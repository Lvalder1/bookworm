import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book  from "../Book";
import { firestore } from "../../firebase";

class BookList extends Component {
    state = {
        Books:[]
    }

    componentDidMount() {
        firestore
            .collection ("Books")
            .get()
            .then ((query) => {
                const Books = query.docs.map(doc => doc.data ());
                this.setState({ Books });
            })
        }       

    render () {
        return (
            <section className={styles.books}>
                {this.state.Books.map((book, index) => (
                    <Book bookData={book} key={index} />
                ))}
            </section>
        )
    }
}
export default BookList