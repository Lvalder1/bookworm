import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book  from "../Book";

class BookList extends Component {
    render () {
        return (
            <section className={styles.BookList}>
                <Book />
            </section>
        )
    }
}

export default BookList