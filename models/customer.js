const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlenth: 2,
    maxlenth: 50,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
    minlenth: 1,
    maxlenth: 50,
  },
});
const Customer = mongoose.model('Customer', customerSchema);
function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    phone: Joi.string().min(1).max(50).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}
exports.Customer=Customer;
exports.validateCustomer=validateCustomer;