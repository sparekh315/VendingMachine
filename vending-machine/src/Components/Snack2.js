import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Snack2 extends Component {
    render() {
        return(
            <div>
                <h1>Hi I'm snack 2!</h1>
                <Link exact to='/'>Go Back</Link>
            </div>
        )
    };
};


export default Snack2;