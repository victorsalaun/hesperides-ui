import React from "react";
import {observer, inject} from "mobx-react";

class ModulesList extends React.Component {
    render() {
        const {modulesStore} = this.props;
        return (
            <section>
                <div className="row">
                    {modulesStore.modulesNames.map(moduleName => (
                        moduleName
                    ))}
                </div>
            </section>
        );
    }

    componentDidMount() {
        const {modulesStore} = this.props;
        modulesStore.fetchModulesNames();
    }
}

export default inject("modulesStore")(observer(ModulesList));
