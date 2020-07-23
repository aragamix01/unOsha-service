import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagName: { type: String },
});

const Tags = mongoose.model('tags', tagSchema, 'tags');

export default Tags;
