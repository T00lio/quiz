const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const express = require("express");

const GOOGLE_CLIENT_ID =
  "849071680992-d9g469lsr1iu78tk5qr67ou5gccad9uc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "ff4b7e70eadd6b42925b";
const GITHUB_CLIENT_SECRET = "37a1bbbb710327c12dc406310c9625cbe3f9a72c";

const FACEBOOK_CLIENT_ID = "1304537796900873";

var User = {};

// google auth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      console.log(profile);
    }
  )
);

// github auth strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      console.log(profile);
    }
  )
);

// facebook auth strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      console.log(profile);
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

module.exports = passport;
