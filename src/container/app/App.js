import React, {Component} from 'react';
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar"
import BookList from '../../components/BookList';
import { firestore } from "../../firebase";

export default class App extends Component {
state = {
  books: [],
  searchText: "",
  filteredbooks: []
}

setSearchText = (event) => {
  const searchText = event.target.value;
  this.setState({ searchText }, this.filterbooks);
  
}

filterbooks = () => {
  let filteredbooks = this.state.books.filter(book => {
      return book.title
      .toUpperCase()
      .includes(this.state.searchText.toUpperCase());  
  })
  this.setState({ filteredbooks });
}

componentDidMount() {
  firestore
      .collection("Books")
      .get()
      .then((query) => {
          const books = query.docs.map(doc => doc.data());
          this.setState({ 
              books: books,
              filteredbooks: books 
          });
      })
     
}

render () {
  return (
    <main>
      <Header />
      <Searchbar searchText={this.state.searchText} setSearchText={this.setSearchText} />
      <BookList filteredbooks={this.state.filteredbooks} />
    </main>
  );
}
} 
