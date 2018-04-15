import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
//import logo from './logo.svg';
//import './App.css';

const getBooksQuery=gql`
{
books{
    name
    id
}
}
`

class BookList extends Component {
  render() {
      console.log(this.props)
    return (
      <div >
        <ul id="book-list">
        <li>Book name</li>
</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);