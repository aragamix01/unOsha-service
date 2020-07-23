import mongoose from 'mongoose';
import Tags from './tags';

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: { type: String },
  score: { type: Number },
  tags: { type: [Schema.Types.ObjectId], ref: 'tags' },
});

const Menus = mongoose.model('menus', menuSchema, 'menus');

export default Menus;
