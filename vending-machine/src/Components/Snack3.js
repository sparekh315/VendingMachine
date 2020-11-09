import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';


class Snack3 extends Component {
    render() {
        return(
            <div>
                <Message>
                    <h1>Hi I'm snack 3!</h1>
                    <Link exact to='/'>Go Back</Link>
                </Message>
            </div>
        )
    };
};


export default Snack3;