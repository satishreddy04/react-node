//passport is useful for authnetication mechanism
const passport = require("passport");
const mongoose = require("mongoose");
// Google authentication passpoert startegy is used for specific authentication mechanism, if you want to use twitter then we need to install twitter passport strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");
const User = mongoose.model("users");


passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((id,done)=>{
   User.findById(id).then(user => { done(null,user)})
  })

// new google startegy ceates a new instance of google startegy like authentication with google.
//passprt.use is genereral declaration - it tells that to use some of the startegy which we assigned in our app
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy:true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
            done(null,existingUser)
        } else {
          new User({ googleId: profile.id }).save().then(user=>done(null,user));
        }
      });
    }
  )
);
