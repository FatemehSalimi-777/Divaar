import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";
import styles from "./CheckOtpForm.module.css";
import { p2e } from "src/utils/numbers";
import { e2p } from "src/utils/numbers";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(p2e(mobile), p2e(code));

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }

    if (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>تایید کد ارسال شده</p>
      <span>کد ارسال شده به {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید:</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید..."
        value={e2p(code)}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button className={styles.backButton} onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
