import React, { Component } from "react";

export default class Necklaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbNail: this.props.thumb
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      thumbNail: this.props.thumb2
    });
  }

  handleMouseOut() {
    this.setState({
      thumbNail: this.props.thumb
    });
  }

  render() {
    return (
      <div className="earings">
        <a className="earings__thumb" href="/shop">
          <img
            alt="memo"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            src={this.state.thumbNail}
          />
        </a>
        <div className="earings__text">
          <h5 className="earings__text--description">{this.props.title}</h5>
          <h5 className="earings__text--price">{this.props.price}</h5>
        </div>
      </div>
    );
  }
}