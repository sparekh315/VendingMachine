import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';


class Snack2 extends Component {
    render() {
        return(
            <div>
                <Message>
                    <h1>Hi I'm snack 2!</h1>
                    <Link exact to='/'>Go Back</Link>
                </Message>
            </div>
        )
    };
};


export default Snack2;