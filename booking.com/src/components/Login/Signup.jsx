import React, {useState} from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };


  const responseGoogle = (res) => {
    // console.log(res);
    let data = { ...res.profileObj, events: {} };
    // console.log(data);
    localStorage.setItem("login", JSON.stringify(data));
  };

  return (
    <div className={styles.login}>
      <div className={styles.nav}>
        <svg
          viewBox="0 0 256 48"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-logo"
          width="110"
          height="24"
        >
          <title>Booking.com</title>
          <g fill="none">
            <path
              fill="#FFF"
              d="M17.592 25.92c-.001-2.637-1.668-4.268-4.244-4.268h-3.61c-1.158.163-1.683.866-1.683 2.225v5.906l5.293.007c2.618 0 4.243-1.161 4.244-3.87zm-9.537-9.529h4.764c2.677 0 3.63-1.702 3.63-3.48 0-2.335-1.392-3.73-3.714-3.73h-2.71c-1.354.087-1.97.785-1.97 2.247v4.963zm15.76 9.96c0 5.605-4.279 9.519-10.903 9.519H2v-28c.02-1.785 1.872-3.585 3.64-3.652h7.137c5.96 0 9.81 3.004 9.81 7.984 0 3.26-1.628 5.144-2.599 5.981l-.836.717.957.541c2.323 1.31 3.706 3.892 3.706 6.91zm126.32-2.676c0-5.095-2.75-5.689-4.81-5.689-4.16 0-4.48 4.189-4.48 5.473 0 2.917 1.26 6.031 4.82 6.031 2.04 0 4.47-1.01 4.47-5.815zm5.91-10.937l-.02 20.994c0 8.007-5.98 10.852-11.52 10.852-2.69 0-5.66-.726-7.95-1.945l-.45-.239.73-1.87.51-1.287c.56-1.388 1.37-1.734 2.75-1.315 1.06.384 2.64.811 4.38.811 3.57 0 5.54-1.689 5.54-4.745v-.638l-.51.376c-1.29.988-2.93 1.473-5 1.473-6.06 0-10.29-4.76-10.29-11.575 0-6.819 4.09-11.402 10.17-11.402 3.06 0 4.94 1.081 5.99 1.993l.3.261.18-.35c.47-.902 1.42-1.394 2.66-1.394h2.53zM69.707 24.184c0-3.711-2.296-6.307-5.57-6.307-3.26 0-5.529 2.596-5.529 6.307 0 3.714 2.27 6.312 5.53 6.312 3.326 0 5.57-2.538 5.57-6.312zm6.381 0c0 6.87-5.036 11.856-11.95 11.856-6.904 0-11.91-4.986-11.91-11.856 0-6.866 5.006-11.853 11.91-11.853 6.914 0 11.95 4.987 11.95 11.853zm31.357 11.493V16.281c0-2.34-1.11-3.475-3.42-3.475l-2.56-.01.02 17.704h-.02l.02 5.37h5.96v-.193zm17.06-23.399c-3.33 0-5.45 1.487-6.64 2.74l-.4.405-.14-.55c-.35-1.344-1.53-2.085-3.3-2.085h-2.86l.02 22.895h6.04V25.131c0-1.032.14-1.926.41-2.744.72-2.473 2.36-4.009 4.89-4.009 2.03 0 3.2 1.075 3.2 3.854v9.971c0 2.37 1.47 3.48 3.83 3.48h2.23V21.261c0-5.786-1.96-8.983-7.28-8.983zM93.436 24.777a5.596 5.596 0 0 0-.902-1.275l-.208-.221.22-.212c.316-.335.64-.731.951-1.191l6.087-9.083h-7.389l-4.573 7.104c-.259.381-.782.573-1.564.573H84.48V7.045C84.48 4.36 82.642 3 80.84 3h-2.426l.006 32.691h6.06v-9.508h1.15c.745 0 1.253.086 1.488.492l3.611 6.843c1.007 1.857 2.014 2.173 3.906 2.173h5.016l-3.736-6.203-2.479-4.711zm-49.788-.593c0-3.711-2.29-6.307-5.569-6.307-3.26 0-5.526 2.596-5.526 6.307 0 3.714 2.266 6.312 5.526 6.312 3.326 0 5.57-2.538 5.57-6.312zm6.38 0c0 6.87-5.026 11.856-11.949 11.856-6.897 0-11.902-4.986-11.902-11.856 0-6.866 5.005-11.853 11.902-11.853 6.923 0 11.948 4.987 11.948 11.853zM100.764 6.81c0-2.106 1.7-3.81 3.78-3.81 2.09 0 3.79 1.704 3.79 3.81 0 2.101-1.7 3.807-3.79 3.807-2.08 0-3.78-1.706-3.78-3.807z"
            ></path>
            <path
              fill="#0896FF"
              d="M189.08 28.067c-.02.021-2.7 2.848-6.21 2.848-3.21 0-6.45-1.974-6.45-6.377 0-3.808 2.51-6.467 6.11-6.467 1.17 0 2.49.421 2.7 1.127l.03.12c.48 1.601 1.93 1.683 2.21 1.683l3.41.004v-2.984c0-3.936-4.99-5.364-8.35-5.364-7.18 0-12.39 5.017-12.39 11.927 0 6.905 5.15 11.918 12.26 11.918 6.16 0 9.51-4.068 9.54-4.111l.18-.219-2.69-4.487-.35.382zm57.35-15.41c-2.7 0-5.18 1.27-6.85 3.393l-.47.601-.37-.672c-1.21-2.203-3.28-3.322-6.17-3.322-3.02 0-5.04 1.693-5.99 2.701l-.61.666-.24-.88c-.34-1.267-1.47-1.966-3.17-1.966h-2.5l-.02 22.806h5.97V25.917c0-.881.11-1.754.33-2.669.59-2.432 2.22-5.046 4.96-4.786 1.69.164 2.51 1.474 2.51 4.004v13.518h5.63V25.917c0-1.104.11-1.927.35-2.755.51-2.32 2.58-4.703 5.23-4.703 1.91 0 2.91 1.086 2.91 4.007v10.183c0 2.305 1.35 3.335 3.64 3.335h2.42l.01-14.56c0-5.817-2.55-8.767-7.57-8.767zm-40.77.386c-6.9 0-12.31 4.988-12.31 11.855s5.41 11.856 12.31 11.856c6.92 0 11.95-4.989 11.95-11.856s-5.03-11.855-11.95-11.855zm-45.35 19.403c0-2.106 1.69-3.81 3.78-3.81s3.79 1.704 3.79 3.81c0 2.102-1.7 3.808-3.79 3.808s-3.78-1.706-3.78-3.808zm45.35-1.237c-3.26 0-5.53-2.598-5.53-6.311 0-3.712 2.27-6.308 5.53-6.308 3.27 0 5.57 2.596 5.57 6.308 0 3.773-2.24 6.311-5.57 6.311z"
            ></path>
          </g>
        </svg>
        <img
          className={styles.buiavatarimage}
          src="https://q-xx.bstatic.com/backend_static/common/flags/new/48/in.png"
          alt=""
        ></img>
      </div>

      <div className={styles.form}>
        <h2 className={styles.formheading}>Sign in or create an account</h2>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            autoFocus
          />
          {showPassword ? (
            <div>
              <label htmlFor="password1">Password</label>
              <input
                className={styles.input}
                type="password"
                name="password1"
                id="password1"
              />
              <label htmlFor="password2">Confirm Password</label>
              <input
                className={styles.input}
                type="password"
                name="password2"
                id="password2"
              />
            </div>
          ) : null}
          <input
            className={styles.button}
            type="submit"
            value="Create account"
          />
        </form>
      </div>

      <div className={styles.line}>
        <hr className={styles.hr} />
        <p className={styles.p}>or use one of these options</p>
        <hr className={styles.hr} />
      </div>

      <div className={styles.authlogin}>
        <button className={styles.google}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC"
            alt="img"
          />
        </button>
        <GoogleLogin
          clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className={styles.google}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                className={styles.googleimage}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-KxlZ9aqVMbPO3Ll49gBa3Ro245LV3KdLR2w4kQO4gy_PYVGJTPv4mBaJmVRNK4WPp4&usqp=CAU"
                alt=""
              />
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
        <button className={styles.google}>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </button>
      </div>
      <div className={styles.line1}>
        <hr />
        <p className={styles.p1}>
          By signing in or creating an account, you agree with our{" "}
          <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Statement</span>
        </p>
        <hr />
      </div>
      <div className={styles.line1}>
        <p className={styles.p1}>All rights reserved.</p>
        <p className={styles.p1}>Copyright (2006-2021) – Booking.com™</p>
      </div>
    </div>
  );
};

export default Login;