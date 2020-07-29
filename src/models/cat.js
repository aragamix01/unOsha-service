import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
});

const Cat = mongoose.model('Cat', catSchema);

export default Cat;
