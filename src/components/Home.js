import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Shelf from './Shelf';
import Stack from './Stack';
import '../App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { focus: "shelf" };
    }


    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <h2><a href="https://camlab.fas.harvard.edu/" target="_blank" rel="noreferrer noopener">CAMLab PUBLICATION SPACE</a></h2>
                        <Nav focus={this.state.focus} />
                    </div>
                </header>
                <main>
                    <Switch>
                        <Route path="/stack">
                            <Stack />
                        </Route>
                        <Route path="/">
                            <Shelf />
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Home;