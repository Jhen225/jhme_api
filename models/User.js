const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_FACTOR = 10;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  datecreated: { type: Date, default: Date.now() },
  datemodified: { type: Date, default: Date.now() },
  lastlogin: { type: Date, default: Date.now() },
});

UserSchema.pre('save', function(cb) {
  var user = this;
  console.log(user);
  if (!user.isModified('password')) return cb();

  bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt))
    .then(hash => (user.password = hash)),
    then(_ => cb()
    ).error(err => cb(err));

});

const userModel = (module.exports = mongoose.model('User', UserSchema));
