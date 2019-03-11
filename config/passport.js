const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const keys = require("./keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

// module.exports = passport =>
//   passport.use(
//     new JwtStrategy(opts, function(jwt_payload, done) {
//       console.log(jwt_payload);
//       User.findById(jwt_payload.id)
//         .then(user => {
//           // err: null, user will be in req.user
//           if (user) return done(null, user);
//           if (!user) return done(null, false);
//         })
//         .catch(e => console.log(e));
//     })
//   );
