import React, {Component} from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true //Change the value of isLoggedIn state attribute to change the message of the component
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return(
                <div>Welcome Methma !</div>
            )
        }
        else{
            return (
                <div>Welcome Guest !</div>
            )
        }
    }
}

export default UserGreeting