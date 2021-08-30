import React from 'react';
import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <div>
            <h2>Sorry</h2>
            <p>404. Page not found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}

export default NotFound;