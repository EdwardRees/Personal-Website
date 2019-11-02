import React, { Component } from "react";
class ArticleBody extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export { ArticleBody };
