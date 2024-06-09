import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}> {children}</div>
      <Footer />
    </>
  );
}

export default Layout;
