import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Snack3 extends Component {
    render() {
        return(
            <div>
                <h1>Hi I'm snack 3!</h1>
                <Link exact to='/'>Go Back</Link>
            </div>
        )
    };
};


export default Snack3;