import React from 'react';
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar"
import BookList from '../../components/BookList';

function App() {
  return (
    <main>
      <Header />
      <Searchbar />
      <BookList />
    </main>
  );
}

export default App;
