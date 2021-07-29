import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import actions from "../api";
import TheContext from "../TheContext";
import "../auth.css";

function Auth(props) {
  let { getTheUser } = useContext(TheContext);

  const responseGoogle = async (response) => {
    console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
  };

  return (
    <>
      <div className="google-container">
        <div className="login-title">
          <h3>Login With Google</h3>
        </div>

        <div className="google-button-container">
          <GoogleLogin
            className="google-button"
            clientId={process.env.REACT_APP_GOOGLEID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
      <div>
        <h6>No Google account?</h6>
        <a
          href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to create one
        </a>
      </div>
    </>
  );
}

export default Auth;
