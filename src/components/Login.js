import { React } from "react";

// Take in a component as argument WrappedComponent
function LoginUser(WrappedComponent) {
    function loginUser(username, userId) {
		localStorage.setItem("username", username);
		localStorage.setItem("id", userId);
	}

    // And return a new anonymous component
    return class extends React.Component {
      render(){
        return <LoginUser
                  name="React"
                  {...this.props} />;
      }
    }
}