var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PreferencesSchema = new Schema({
  trivia: {
    type: String
  },
  number: {
    type: Number
  },
  year: {
    type: Number
  }
});

var Preferences = mongoose.model("Preferences", PreferencesSchema);
module.exports = Preferences;
