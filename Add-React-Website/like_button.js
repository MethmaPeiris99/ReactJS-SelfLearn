'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// These 2 lines of code find the <div> tag which is added to the html page and display the Like button React component inside it
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);