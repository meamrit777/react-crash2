import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home_page">
            <div>
                <Link to="/feedback">
                    <Button themeColor={'primary'}>feedback</Button>
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <Button themeColor={'primary'}>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button>SignUp</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
