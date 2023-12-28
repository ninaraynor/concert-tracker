const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const ensureLoggedIn =


passport.use(new GoogleStrategy(
    // config obj
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // verify callback function
    // async/await
    async function(accessToken, refreshToken, profile, cb) {
      // user has logged in with OAuth...
      try {
        // try to find user:
        let user = await User.findOne({ googleId: profile.id });
        // existing user found
        if (user) return cb(null, user);
        // new user via oauth
        user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
          });
          return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  ));

  // callback func passport calls to give us user
  passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  // when req comes in from auth user
  passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
  });