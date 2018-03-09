import React from "react";
import {AppBar} from "material-ui";
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from "react-router-dom";

const styles = {
    title: {
        cursor: "pointer"
    }
};

const Header = ({history}) => (
    <AppBar
        title={<span style={styles.title}>Hespérides</span>}
        onTitleClick={() => history.push("/")}
        iconElementLeft={<div/>}
        iconElementRight={
            <FlatButton label="Modules" onClick={() => history.push("/modules")}/>
        }
    />
);

export default withRouter(Header);
