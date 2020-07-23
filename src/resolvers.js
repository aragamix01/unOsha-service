import Tags from './models/tags';
import Menu from './models/menu';
import mongoose from 'mongoose';

export default {
  Query: {
    async tags() {
      return await Tags.find();
    },
    async menus() {
      return await Menu.find().populate('tags').exec();
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
