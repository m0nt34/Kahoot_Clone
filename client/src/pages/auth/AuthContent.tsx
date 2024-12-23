import style from "../../assets/styles/pages/auth/auth.module.scss";

type props = {
  header?: string;
  title: string;
  emailDescription?: string;
  passwordResetLink?: React.ReactNode;
};
const AuthContent = ({ header, title, emailDescription,passwordResetLink }: props) => {
  return (
    <div>
      <div className={style.inside_cont}>
        {header?.length !== 0 && <header>{header}</header>}
        <form action="" className={style.form}>
          <h1>{title}</h1>
          <div className={style.field_auth}>
            <div className={style.auth_fields}>
              <div className={style.auth_field}>
                <span>Email</span>
                {emailDescription?.length !== 0 && <p>{emailDescription}</p>}
                <input type="email" name="Email" />
              </div>
              <div className={style.auth_field}>
                <span>Password</span>
                <input type="password" name="Password" />
              </div>
            </div>
            {passwordResetLink && passwordResetLink}
            <div className={style.button_cont}>

            <button type="submit">{title}</button>
            </div>
          </div>
          <div className={style.or}>or</div>
          <div className={style.media_auth}>
            <button>
              <img
                src="https://assets-cdn.kahoot.it/auth/assets/google-D1qVgiZr.svg"
                alt=""
              />
              <span>Continue with Google</span>
            </button>
            <button>
              <span>Continue with Single Sign-on</span>
            </button>
          </div>
          <div className={style.bottom_page_changer}>
            {title === "Log in" ? (
              <>
                Don't have an account?
                <p>Sign up</p>
              </>
            ) : (
              <>
                Already have an account?
                <p>Log in</p>
              </>
            )}
          </div>
        </form>
        <div className={style.auth_bottom_cont}>
          <p color="#6E6E6E">
            By signing up, you accept our
            <a
              href="https://create.kahoot.it/go/terms-and-conditions/?lang=en"
              target="_blank"
            >
              Terms and Conditions
            </a>
            . Please read our
            <a
              href="https://create.kahoot.it/go/privacy-policy/?lang=en"
              target="_blank"
            >
              Privacy Policy
            </a>
            and
            <a
              href="https://create.kahoot.it/go/privacy-policy?lang=en#children-policy"
              target="_blank"
            >
              Children’s Privacy Policy
            </a>
            .
          </p>
          <p color="#6E6E6E">
            I understand that I can withdraw my consent at any time and the
            withdrawal will not affect the lawfulness of the consent before its
            withdrawal, as described in the Kahoot!
            <a
              href="https://create.kahoot.it/go/privacy-policy/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
