import { gql } from 'apollo-server';

export default gql`
  type Query {
    tags: [Tag]
    menus: [Menu]
    restaurants: [Restaurant]
    getCats:[Cat]
  }
  type Mutation {
    createTag(input: TagInput): Tag
    createMenu(input: MenuInput): Menu
    createCat(name: String): Cat
  }

  input MenuInput {
    name: String
    score: Int
    tags: [ID]
  }

  input TagInput {
    tagName: String
  }

  type Cat {
    _id: ID
    name: String
  }

  type Tag {
    _id: ID
    tagName: String
  }

  type Menu {
    _id: ID
    name: String
    score: Int
    tags: [Tag]
  }

  type Restaurant {
    _id: ID
    name: String
    menus: [Menu]
    score: Int
  }
`;
