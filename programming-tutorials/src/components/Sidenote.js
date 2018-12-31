import React, { Component } from 'react';

class Sidenote extends Component  {
    render(){
        return (
            <aside style={{fontSize: 14}}>
                ** {this.props.children} **
            </aside>
        )
    }
}

export { Sidenote };