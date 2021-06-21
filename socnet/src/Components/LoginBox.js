import "../index.css";
import logo from "../Socnet.png"

const LoginBox = () => {
  return (
    <div className="login-dark">
      <form id="pass" method="post">
        <div>
          <img className="illustration" src={logo} width="100%" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
          <div></div>
        </div>
        <div  className="slogan">
          <span>Internet Now</span>
        </div>
        <span className="wil">- SocNet</span>
      </form>
    </div>
  );
};

export default LoginBox;
