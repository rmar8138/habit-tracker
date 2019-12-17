const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Strategy: JwtStrategy } = require("passport-jwt");
const UserModel = require("../database/models/user_model");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      const user = await UserModel.findOne({ email }).catch(done);

      if (!user || !user.verifyPasswordSync(password)) {
        return done(null, false);
      }

      return done(null, user);
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: req => {
        let token = null;

        if (req && req.cookies) {
          token = req.cookies.jwt;
        }

        return token;
      },
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      const user = await UserModel.findById(payload.sub).catch(done);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    }
  )
);

module.exports = passport;
