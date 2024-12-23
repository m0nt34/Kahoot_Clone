import style from "../../assets/styles/pages/auth/auth.module.scss";
import AuthContent from "./AuthContent";

const Auth = () => {
  return (
    <div className={style.auth}>
      <AuthContent
        header=""
        title="Log in"
        emailDescription=""
        passwordResetLink={
          <span className={style.password_reset}>
            Forgot password?<a href="/forgot-password">Reset your password</a>
          </span>
        }
      />
    </div>
  );
};

export default Auth;
