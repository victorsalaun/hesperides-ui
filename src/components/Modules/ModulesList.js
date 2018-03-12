import React from "react";
import {observer, inject} from "mobx-react";
import {GridList, GridTile} from 'material-ui/GridList';
import {RaisedButton} from "material-ui";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        marginTop: '100px',
        overflowY: 'auto',
    },
    button: {
        margin: 12,
    },
};

class ModulesList extends React.Component {
    render() {
        const {modulesStore} = this.props;
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {modulesStore.modulesNames.map(moduleName => (
                        <GridTile
                            key={moduleName}
                        >
                            <RaisedButton label={moduleName} primary={true} style={styles.button}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }

    componentDidMount() {
        const {modulesStore} = this.props;
        modulesStore.fetchModulesNames();
    }
}

export default inject("modulesStore")(observer(ModulesList));
