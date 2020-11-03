import { Button, Form, Input } from "semantic-ui-react";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import "./css/LoginScreen.css";


const responseGoogle = (response) => {
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}
 

function LoginScreen() {
  return (
    <>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input icon="users" iconPosition="left" placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input icon="lock" iconPosition="left" placeholder="Password" />
        </Form.Field>
        <Button  type="button" className="button" inverted color='blue'>Login</Button>
        <br />
        <br />
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          cookiePolicy={'single_host_origin'}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          buttonText=""
          className="social-button"
          icon={false}
          ><span><i className="google icon"></i></span></GoogleLogin>
          <br/>
          <br/>
        <FacebookLogin
          appId="418265335842616"
          autoLoad={true}
          fields="name,email,picture,birthday,friends"
          icon="fa-facebook"
          textButton=""
          typeButton="button"
          cssClass="social-button"
          callback={responseFacebook}
        ></FacebookLogin>
        <br/>
        <br/>
        {/* <Button.Group>
           <Button color="google plus">
            <i class="google icon" style={{ alignSelf: "center" }}></i>
          </Button> 
          

          <Button color="facebook">
            <i class="facebook f icon" style={{ alignSelf: "center" }}></i>
          </Button>
          <Button color="instagram">
            <i class="instagram icon" style={{ alignSelf: "center" }}></i>
          </Button>
        </Button.Group> */}
      </Form>
    </>
  );
}

export default LoginScreen;
