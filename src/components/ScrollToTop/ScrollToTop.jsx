import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    }
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility()
    });
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      })
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible &&
          <button onClick={this.scrollToTop}>
            TO THE TOP
          </button>
        }
      </div>
    );
  };


};
