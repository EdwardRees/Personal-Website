import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class PrevLessonButton extends Component {
    render(){
        const { Location, block } = this.props;
        return (
            <Button color="secondary" block={block}>
                <Link to={Location} style={{color: "white"}}>Previous Lesson</Link>
            </Button>
        )
    }
}
export { PrevLessonButton };