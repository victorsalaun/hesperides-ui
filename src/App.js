import React from "react";
import {inject, observer} from "mobx-react";
import {
    blueGrey900,
    blueGrey700,
    blueGrey100
} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Route, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Header from "./components/Header/Header";
import ModulesList from "./components/Modules/ModulesList";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey900,
        primary2Color: blueGrey700,
        primary3Color: blueGrey100
    }
});

// Create React Router Browser History
const history = createBrowserHistory();

const App = ({modulesStore}) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Router history={history} basename={"/"}>
                <div>
                    <Header/>
                    <div>
                        <Route exact path="/"/>
                        <Route exact path="/modules" component={ModulesList}/>
                        <Route path="/modules/:id"/>
                    </div>
                </div>
            </Router>
        </div>
    </MuiThemeProvider>
);

export default inject("modulesStore")(observer(App));