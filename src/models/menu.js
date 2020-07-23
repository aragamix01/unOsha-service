import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: { type: String },
  score: { type: Number },
  tags: {
    type: [{ _id: Schema.Types.ObjectId, tagName: String }],
    ref: 'tags',
  },
});

const Menu = mongoose.model('menus', menuSchema, 'menus');

export default Menu;
