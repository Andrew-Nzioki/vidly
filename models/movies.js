const Joi = require('joi');
const mongoose = require('mongoose');
const { genresSchema } = require('./genre');
const { Schema } = mongoose;
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlenth: 2,
    maxlenth: 50,
  },
  genre: {
    type: genresSchema,
    required: true,
  },
  numberInStock: { Number, required: true, min: 0, max: 255 },

  dailyRentalRate: { Number, required: true, min: 0, max: 255 },
});
const Movie = mongoose.model('Movies', movieSchema);
function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(255).required(),
    dailyRentalRate: Joi.number().min(0).max(255).required(),
  };

  return Joi.validate(movie, schema);
}
exports.validateMovie = validateMovie;
exports.Movie = Movie;
