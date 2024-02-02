const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { Pool } = require("pg");
const express = require("express");

const GOOGLE_CLIENT_ID =
  "849071680992-d9g469lsr1iu78tk5qr67ou5gccad9uc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

var User = {};

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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findbyId(id, (err, user) => {
    done(err, user);
  });
});
