import React, { Component } from "react";
import styles from "./Book.module.scss";

class Book extends Component {
    render () {
        const bookData = this.props.bookData;
        return (
            <section className={styles.book}>
                <img src={bookData.image} alt=""></img>
                <h3>{bookData.title}</h3>
                <p>by {bookData.author}</p>
            </section>
        )
    }
}

export default Book;