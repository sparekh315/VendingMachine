import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class VendingMachine extends Component {
    render() {
        return(
            <div>
                <h1>I'm the Vending Machine!</h1>
                <Link exact to='/snack1'>Snack 1</Link>
                <Link exact to='/snack2'>Snack 2</Link>
                <Link exact to='/snack3'>Snack 3</Link>
            </div>
        )
    };
};


export default VendingMachine;