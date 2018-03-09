import {flow, types} from "mobx-state-tree";

const ModulesStore = types
    .model("ModulesStore", {
        modulesNames: types.optional(types.array(types.string), []),
    })
    .actions(self => ({
        fetchModulesNames: flow(function* load() {
            self.modulesNames = yield fetch(
                "http://localhost:8081/rest/modules"
            ).then(data => data.json());
            console.log(self.modulesNames);
        })
    }));

export default ModulesStore;
