import React, {Component} from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false //Change the value of isLoggedIn state attribute to change the message of the component
        }
    }
    render() {
        /**
         * Using circuit operator to implement conditional rendering
         */
        return this.state.isLoggedIn && <div>Welcome Methma !</div>

        /**
         * Using ternary operator to implement conditional rendering
         */
        // return(
        //     this.state.isLoggedIn ?(
        //             <div>Welcome Methma !</div>  //evaluate if the condition is true
        //         ):(
        //         <div>Welcome Guest !</div> //evaluate if the condition is false
        //         )
        // )

        /**
         * Using element variables to implement conditional rendering
         */
        // let greetingMessage
        // if (this.state.isLoggedIn) {
        //     greetingMessage = <div>Welcome Methma !</div>
        // }
        // else{
        //     greetingMessage = <div>Welcome Guest !</div>
        // }
        //
        // return <div>{greetingMessage}</div>

        /**
         * Using if/else to implement conditional rendering
         */
        // if (this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Methma !</div>
        //     )
        // }
        // else{
        //     return (
        //         <div>Welcome Guest !</div>
        //     )
        // }
    }
}

export default UserGreeting