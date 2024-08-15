import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { getProfile } from "src/services/user";
import { deleteAllCookies } from "src/utils/cookie";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import styles from "./DropDown.module.css";

function DropDown() {
  const dropDownStyles = {
    backgroundColor: "#fff",
    position: "absolute",
    top: "100%",
    left: "0",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "grey",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: " rgba(149, 157, 165, 0.5) 0px 8px 24px",
    transition: "all 0.5s ease-in-out",
  };
  const [open, setOpen] = useState(false);

  const { refetch, data, error } = useQuery(["profile"], getProfile);

  const signoutHandler = () => {
    deleteAllCookies();
    refetch();

    setOpen((pre) => !pre);
    if (data) {
      toast.success("شما با موفقیت خارج شدید!");
    } else {
      toast.error("شما در حساب کاربری خود هستید!");
    }
  };

  const openHandler = () => {
    if (!data) {
      setOpen(false);
    } else {
      setOpen((pre) => !pre);
    }
  };

  return (
    <div className={styles.container}>
      {!open ? (
        <button onClick={openHandler}>
          {" "}
          <AiOutlineCaretDown />{" "}
          {data ? "دیوار من" : <Link to="/auth">وارد شوید</Link>}
        </button>
      ) : (
        <button onClick={openHandler}>
          {" "}
          <AiOutlineCaretUp />{" "}
          {data ? "دیوار من" : <Link to="/auth">وارد شوید</Link>}
        </button>
      )}

      {open && (
        <div className={styles.menu}>
          <div>
            <Link to="/dashboard">
              <h3>آگهی های من</h3>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <h3>ثبت آگهی جدید</h3>
            </Link>
          </div>
          {data ? (
            <div>
              <h3 onClick={signoutHandler}>خروج</h3>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
export default DropDown;
