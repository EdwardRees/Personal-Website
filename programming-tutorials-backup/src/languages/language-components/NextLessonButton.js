import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class NextLessonButton extends Component {
    render(){
        const { Location, block } = this.props;
        return(
            <div>
                <Button color="success" block={block}>
                    <Link to={Location} style={{color: "white"}}>
                    Next Lesson</Link>
                </Button>
            </div>
        )
    }
}

export { NextLessonButton };