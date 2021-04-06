import React from 'react';
import ReactDOM from 'react-dom';
import footer_css from './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            < footer class="footer mt-auto py-3" >
                <div class="container">
                    <p class="text-muted">Copyright©SERVICE & SECURITY CORPORATION, ALL Right Reserved.</p>
                </div>
            </footer >
        );
    }
}
