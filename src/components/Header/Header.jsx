import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render () {
        return (
        <section className={styles.header}>
            <h1>Bookworm</h1>
        </section>
        )
    }
}

export default Header;