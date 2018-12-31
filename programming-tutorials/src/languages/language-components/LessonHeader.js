import React, { Component } from 'react';

class LessonHeader extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { title } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                {this.props.children}
            </div>
        )
    }
}

export { LessonHeader };