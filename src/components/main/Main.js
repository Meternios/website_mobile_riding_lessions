import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Kontakt from '../pages/kontakt/Kontakt';
import Angebot from '../pages/angebot/Angebot';
import Ubermich from '../pages/uebermich/Uebermich';
import Notfound from '../pages/404/Notfound';
import Container from '@material-ui/core/Container';

function Main() {
    return (
        <main className="fh-main">
            <Container fixed>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/kontakt" component={Kontakt} />
                    <Route path="/ueber-mich" component={Ubermich} />
                    <Route path="/angebot" component={Angebot} />
                    <Route component={Notfound} />
                </Switch>
            </Container>
        </main>
    );
}

export default Main;