const {Schema,model}=require("mongoose");

const recipeSchema = new Schema({

    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:String,
    image:String,
    ingredients:[{
        type:String,
        quantity:Number
    }],
    portions:Number,
    howToCookIt:String,
    kcal:Number,
    carbohydrates:Number,
    proteins:Number,
    fats:Number,
    

},
{
        timestamps:true
});

const Recipe = model("Recipe",recipeSchema)
module.exports=Recipe