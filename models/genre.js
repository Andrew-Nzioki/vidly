const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlenth: 5,
    maxlenth: 50,
  },
});
const Genre = mongoose.model('Genre', genreSchema);
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}
exports.validateGenre=validateGenre;
exports.Genre=Genre;
