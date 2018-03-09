import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import ModulesStore from "./stores/ModulesStore";

// Enable MobX Strict Functionality
// mobx.useStrict(true);

const modulesStore = ModulesStore.create();

const store = {
    modulesStore: modulesStore
};

const main = (
    <Provider {...store}>
        <App />
    </Provider>
);

ReactDOM.render(main, document.getElementById("root"));

registerServiceWorker();