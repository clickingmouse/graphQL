const express = require('express');
const graphqlHTTP= require('express-graphql');
const app = express();
const schema = require('./schema/schema')

const mongoose = require('mongoose')

mongoose.connect ("mongodb://shaun:test123@ds121665.mlab.com:21665/gql-ninja")

mongoose.connection.once('open',()=>{console.log("connected to database")})

app.use('/graphql',graphqlHTTP({
//schmea:schema
// or just(ES6) 
schema,
graphiql:true
}));


app.listen(4000,()=>{
console.log("now listening for requests on port 4000")

})