var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PreferencesSchema = new Schema({
  googleId: {
    type: String
  },
  trivia: {
    type: Boolean
  },
  number: {
    type: Boolean
  },
  year: {
    type: Boolean
  },
  math: {
    type: Boolean
  }
});

var Preferences = mongoose.model("Preferences", PreferencesSchema);


module.exports = Preferences;
