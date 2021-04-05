import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>This is Header component!</h1>
                <nav id="gnav">
                    <ul class="inner">
                        <li><a href="#">home</a></li>
                        <li><a href="#">menu1</a></li>
                        <li><a href="#">menu2</a></li>
                        <li><a href="#">menu3</a></li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}
