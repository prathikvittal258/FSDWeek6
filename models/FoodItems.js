const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    foodGroup: { type: String, required: true },
    description: String,
    nutritionalInformation: {
        calories: Number,
        macronutrients: {
            proteins: Number,
            fats: Number,
            carbohydrates: Number,
            sugar: Number,
            fiber: Number,
        },
        micronutrients: {
            vitamins: [String],
            minerals: [String],
        },
        sodium: Number,
        cholesterol: Number,
    },
    servingSize: String,
    allergens: [String],
    ingredients: [String],
    preparationMethods: String,
    certifications: [String],
    countryOfOrigin: String,
    brandOrManufacturer: String,
    dietaryRestrictions: [String],
    healthBenefits: String,
    bestPractices: String,
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);