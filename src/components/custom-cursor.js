import React, { Component, Fragment } from 'react';

import '../styles/cursor.css';

class CustomCursor extends Component {
  mouseMove = e => {
    const cursor = document.getElementById('cursor');
    const cursor2 = document.getElementById('cursor2');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor2.style.left = e.clientX + 'px';
    cursor2.style.top = e.clientY + 'px';
  };
  handleMouseOver = e => {
    const cursor = document.getElementById('cursor');
    const cursor2 = document.getElementById('cursor2');
    cursor.classList.add('hover');
    cursor2.classList.add('hover');
  };
  handleMouseOut = e => {
    const cursor = document.getElementById('cursor');
    const cursor2 = document.getElementById('cursor2');
    cursor.classList.remove('hover');
    cursor2.classList.remove('hover');
  };
  handleHover = hover => {
    hover.addEventListener('mouseover', this.handleMouseOver);
    hover.addEventListener('mouseout', this.handleMouseOut);
  };
  componentDidMount() {
    const b = document.getElementsByTagName('body')[0];
    b.addEventListener('mousemove', this.mouseMove);

    const hovers = document.querySelectorAll('a');
    for (let i = hovers.length - 1; i >= 0; i--) {
      const hover = hovers[i];
      this.handleHover(hover);
    }
  }
  render() {
    return (
      <Fragment>
        <div id='cursor' className='cursor' />
        <div id='cursor2' className='cursor2' />
      </Fragment>
    );
  }
}

export default CustomCursor;
