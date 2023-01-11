const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html')

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {}
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
})

const Joi = BaseJoi.extend(extension)

module.exports.cardSetSchema = Joi.object({
    cardSet: Joi.object({
        title: Joi.string().required().escapeHTML(),
        // image: Joi.string().required(),
        description: Joi.string().required().escapeHTML()
    }).required(),
    // deleteImages: Joi.array()
});

module.exports.cardSchema = Joi.object({
    card: Joi.object({
        front: Joi.string().required().escapeHTML(),
        back: Joi.string().required().escapeHTML()
    }).required()
})
