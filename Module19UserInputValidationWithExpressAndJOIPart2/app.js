const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];

//  To validate case#2, remove the value part for any example object and replace ''
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

/*
const userInput = { personalInfo: {
                        streetAddress: '123123123',
                        city: 'NewCity',
                        state: 'NS'
                },
                preferences: arrayString};
*/

//  Preferences reference changed to arrayObjects
const userInput = { personalInfo: {
    streetAddress: '123123123',
    city: 'NewCity',
    state: 'NS'
},
preferences: arrayObjects};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});

//  Using arrayString as String data to be validated
//  const preferencesSchema = Joi.array().items(Joi.string())

//  Using arrayObject to validate
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.validate(userInput, schema, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});