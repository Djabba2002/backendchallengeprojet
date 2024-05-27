const Joi = require('joi');

const clientSchema = Joi.object({
  nomComplet: Joi.string().required().messages({
    'string.base': `Le nom complet doit être une chaîne de caractères.`,
    'string.empty': `Le nom complet ne peut pas être vide.`,
    'any.required': `Le nom complet est requis.`
  }),
  numero: Joi.number().required().messages({
    'number.base': `Le numéro doit être un nombre.`,
    'number.empty': `Le numéro ne peut pas être vide.`,
    'any.required': `Le numéro est requis.`
  }),
  objet: Joi.string().required().messages({
    'string.base': `L'objet doit être une chaîne de caractères.`,
    'string.empty': `L'objet ne peut pas être vide.`,
    'any.required': `L'objet est requis.`
  }),
  email: Joi.string().email().required().messages({
    'string.email': `L'email doit être valide.`,
    'string.empty': `L'email ne peut pas être vide.`,
    'any.required': `L'email est requis.`
  }),
  message: Joi.string().required().messages({
    'string.base': `Le message doit être une chaîne de caractères.`,
    'string.empty': `Le message ne peut pas être vide.`,
    'any.required': `Le message est requis.`
  }),
  details: Joi.string().required().messages({
    'string.base': `Les détails doivent être une chaîne de caractères.`,
    'string.empty': `Les détails ne peuvent pas être vides.`,
    'any.required': `Les détails sont requis.`
  })
});

module.exports = {
  clientSchema
};