import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String },
  menus: {
    type: [
      {
        _id: Schema.Types.ObjectId,
        name: String,
        score: Number,
        tags: {
          type: [{ _id: Schema.Types.ObjectId, tagName: String }],
          ref: 'tags',
        },
      },
    ],
    ref: 'menus',
  },
  score: { type: Number },
});

const Restaurant = mongoose.model('restaurants', restaurantSchema, 'restaurants');

export default Restaurant;
