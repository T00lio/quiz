const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { Pool } = require("pg");

const GOOGLE_CLIENT_ID =
  "849071680992-d9g469lsr1iu78tk5qr67ou5gccad9uc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      const pool = new Pool({
        user: "tuliosalvatierra",
        host: "tmp",
        database: "questions",
        password: "1234",
        port: 5432, // default PostgreSQL port
      });

      try {
        const user = await User.findOrCreate({ googleId: profile.id });
        const newUser = {
          username: user.username,
          email: user.email,
          avatar: user.photo[0],
        };
        await addUser(newUser);
        return cb(null, user);
      } catch (error) {
        console.error("Error adding user:", error);
        return cb(error);
      }

      async function addUser(user) {
        const query = "INSERT INTO users (username, email) VALUES ($1, $2)";
        const values = [user.username, user.email];

        try {
          const client = await pool.connect();
          await client.query(query, values);
          client.release();
          console.log("User added successfully!");
        } catch (error) {
          console.error("Error adding user:", error);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findbyId(id, (err, user) => {
    done(err, user);
  });
});
