import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import DropDown from "src/components/templates/DropDown";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src="divar.svg" alt="svg" />
        </Link>
        <span>
          <img src="location.svg" alt="svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
      <DropDown />
        {/* <Link to="/auth">
          <span>
            <img src="profile.svg" alt="svg" />
            <p>دیوار من</p>
          </span>
        </Link> */}
        <Link className={styles.button} to="/dashboard">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
