import { gql } from 'apollo-server';

export default gql`
  type Query {
    tags: [Tag]
    menus: [Menu]
  }
  type Mutation {
    createTag(input: TagInput): Tag
    createMenu(input: MenuInput): Menu
  }

  input MenuInput {
    name: String
    score: Int
    tags: [ID]
  }

  input TagInput {
    tagName: String
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
`;
