import React, {Component} from 'react';

export default class Navigation extends Component {
    render() {
        return(
            <div>
             <div className='prev'>&lt;&lt; Prev</div>
             <div className='next' onClick='onClickHandleForNext'>Next &gt;&gt;</div>
            </div>
        );
    }
}