import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Link to="/login">
                <Button themeColor={'primary'}>Login</Button>
            </Link>
            <Link to="/signup">
                <Button>SignUp</Button>
            </Link>
        </>
    );
}

export default Home;
