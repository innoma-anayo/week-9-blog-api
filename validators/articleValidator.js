const Joi = require("joi");

const articleSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = articleSchema;