// ! indicates that the field cannot have a null value (non-nullable)
const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input BookInput {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput) : User
        removeBook(bookId: String!) : User
    }
`

module.exports = typeDefs;