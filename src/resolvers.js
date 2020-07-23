import Tags from './models/tags';
import Menu from './models/menu';
import Restaurant from './models/restaurant';
import mongoose from 'mongoose';

export default {
  Query: {
    async tags() {
      return await Tags.find();
    },
    async menus() {
      return await Menu.find().populate('tags');
    },
    async restaurants() {
      return await Restaurant.find().populate({
        path: 'menus',
        populate: { path: 'tags' },
      });
    },
  },

  Mutation: {
    async createTag(root, { input }) {
      return await Tags.create(input);
    },
    async createMenu(root, { input }) {
      return await Menu.create(input);
    },
  },
};
