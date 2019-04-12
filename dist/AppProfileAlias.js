"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * Model that represent an alias of an appProfile.
 * The name of the appProfile represented by the alias can be modified
 * dynamically
 * @property {spinal.Str} name
 * @property {spinal.Ptr} appProfiles
 */
class AppProfileAlias extends spinal_core_connectorjs_type_1.Model {
    /**
     * @param name {string}
     * @param appProfiles {AppProfile[]}
     */
    constructor(name, appProfiles) {
        super({
            name: name,
            appProfile: new spinal_core_connectorjs_type_1.Ptr(appProfiles)
        });
    }
}
exports.AppProfileAlias = AppProfileAlias;
spinal_core_connectorjs_type_1.spinalCore.register_models(AppProfileAlias);
//# sourceMappingURL=AppProfileAlias.js.map