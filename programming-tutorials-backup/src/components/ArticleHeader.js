import React, { Component } from "react";

class ArticleHeader extends Component {
  render() {
    return (
      <div>
        <span style={{ fontSize: 25 }}>{this.props.title}</span>
        <br />
        <span style={{ fontSize: 15 }}>By: {this.props.author}</span>
      </div>
    );
  }
}

export { ArticleHeader };
