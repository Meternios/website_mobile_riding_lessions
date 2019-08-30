import React, { useState, useEffect }  from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from '../404/Notfound';
import Footer from '../footer/Footer.js';

function Main() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('test');
    });

    return (
        <main className={"fh-main " + count}>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Router>
                <Switch>
                    <Route exact path="/" component={Footer} />
                    <Route path="/users" component={Footer} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </main>
    );
}

export default Main;