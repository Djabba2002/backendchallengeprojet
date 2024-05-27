const Joi = require('joi');

const compteSchema = Joi.object({
  firstname: Joi.string().required().messages({
    'string.base': `Le nom doit être une chaîne de caractères.`,
    'string.empty': `Le nom ne peut pas être vide.`,
    'any.required': `Le nom est requis.`
  }),
  lastname: Joi.string().required().messages({
    'string.base': `Le prénom doit être une chaîne de caractères.`,
    'string.empty': `Le prénom ne peut pas être vide.`,
    'any.required': `Le prénom est requis.`
  }),
  phone: Joi.number().required().messages({
    'string.base': `Le numéro de téléphone doit être une chaîne de caractères.`,
    'string.empty': `Le numéro de téléphone ne peut pas être vide.`,
    'any.required': `Le numéro de téléphone est requis.`
  }),
  email: Joi .string().required().messages({
    'string.email': `L'email doit être valide.`,
    'string.empty': `L'email ne peut pas être vide.`,
    'any.required': `L'email est requis.`
  }),
  password: Joi.string().required().messages({
    'string.base': `Le mot de passe doit être une chaîne de caractères.`,
    'string.empty': `Le mot de passe ne peut pas être vide.`,
    'any.required': `Le mot de passe est requis.`
  }),
  confirmedpassword: Joi.string().required().messages({
    'string.base': `La confirmation du mot de passe doit être une chaîne de caractères.`,
    'string.empty': `La confirmation du mot de passe ne peut pas être vide.`,
    'any.required': `La confirmation du mot de passe est requise.`
  })
});

module.exports = {
  compteSchema
};