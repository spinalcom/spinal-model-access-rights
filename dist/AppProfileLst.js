"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfile>} apps List of all AppProfile of the system
 */
class AppProfileLst extends spinal_core_connectorjs_type_1.Model {
    constructor() {
        super({
            apps: new spinal_core_connectorjs_type_1.Lst()
        });
    }
}
exports.AppProfileLst = AppProfileLst;
spinal_core_connectorjs_type_1.spinalCore.register_models(AppProfileLst);
//# sourceMappingURL=AppProfileLst.js.map