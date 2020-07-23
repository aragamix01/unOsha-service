import Tags from './models/tags';
import Menus from './models/menus';
export default {
  Query: {
    async tags() {
      return await Tags.find();
    },
    async menus() {
      return await Menus.find().populate({ path: 'tags' });
    },
  },

  Mutation: {
    async createTag(root, { input }) {
      return await Tags.create(input);
    },
    async createMenu(root, { input }) {
      return await Menus.create(input);
    },
  },
};
