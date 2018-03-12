import {flow, types} from "mobx-state-tree";

const ModulesStore = types
    .model("ModulesStore", {
        modulesNames: types.optional(types.array(types.string), []),
    })
    .actions(self => ({
        fetchModulesNames: flow(function* load() {
            self.modulesNames = yield fetch(
                "http://localhost:8080/rest/modules"
            )
                .then(data => data.json())
                .then(data => data.sort());
            console.log(self.modulesNames);
        })
    }));

export default ModulesStore;
