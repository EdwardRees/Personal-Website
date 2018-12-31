import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BackButton extends Component{
    static contextTypes = {
        router: () => true,
    }

    render() {
        return(
            <Button
            onClick={this.context.router.history.goBack}
            block color="danger"
            >Back</Button>
        )
    }
}
export { BackButton };