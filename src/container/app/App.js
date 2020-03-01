import React from 'react';
import styles from "./App.module.scss";
import Header from "../../components/Header";
import BookList from '../../components/BookList';

function App() {
  return (
    <main>
      <Header />
      <BookList />
    </main>
  );
}

export default App;
