const graphql = require('graphql');
const_= require('lodash');

const{GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

// dummy data 

var books = [
    {name: 'Games of Thrones', genre: 'Fantasy', id:'1'},
    {name: 'Me before you', genre: 'Romantic', id:'2'},
    {name: 'Crazy dog', genre: 'Comedy', id:'3'},
];


const BookType  = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});


const RootQuery = new GraphQLObjectType({

     name: 'RootQueryType',
     fields: {
         book: {
             type: BookType,
             args: {id: {type:GraphQLString}},
             resolve(parent, args) {
                 // code to get data from db / other source
                 return _.find(books,{id:args.id});
             }
         }
     }
})

module.exports = new GraphQLSchema ({
    query: RootQuery
});