import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Sorry, la página que buscas no existe</p>
            <NavLink to={'/'}>Volver al home</NavLink>
        </div>
    );
}
 
export default Error404;