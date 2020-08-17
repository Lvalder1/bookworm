import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book  from "../Book";

export default class BookList extends Component {


    render() {
       
        return (
            <section className={styles.books}>
             {this.props.filteredbooks.map((books, index) => (
                <Book bookData={books} key={index} />
            ))}
            </section>
        );            
    }
} 