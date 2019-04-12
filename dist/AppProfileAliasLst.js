"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfileAlias>} apps List of all AppProfile of the system
 */
class AppProfileAliasLst extends spinal_core_connectorjs_type_1.Model {
    constructor() {
        super({
            aliases: new spinal_core_connectorjs_type_1.Lst()
        });
    }
}
exports.AppProfileAliasLst = AppProfileAliasLst;
spinal_core_connectorjs_type_1.spinalCore.register_models(AppProfileAliasLst);
//# sourceMappingURL=AppProfileAliasLst.js.map