import Navbar from "./NavBar";
import Footer from "./Footer";
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
