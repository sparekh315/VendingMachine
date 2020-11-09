import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';


class VendingMachine extends Component {
    render() {
        return(
            <div>
                <Message>
                    <h1>I'm the Vending Machine!</h1>
                </Message>
                <Message>
                    <Link exact to='/snack1'>Snack 1</Link>
                    <Link exact to='/snack2'>Snack 2</Link>
                    <Link exact to='/snack3'>Snack 3</Link>
                </Message>
                
            </div>
        )
    };
};


export default VendingMachine;