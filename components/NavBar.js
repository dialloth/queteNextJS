import React from "react";
import Link from "next/link";
import styles from './layout.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>

      <ul className={styles.ul}>
      
        <li className="li-nav">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Terms">Terms</Link>
        </li>
      </ul>
    </nav>
  );
}
