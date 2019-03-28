"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * This model contain all the role allowed in the Spinal system.
 * @property {spinal.Lst<Role>} roles list of role a the spinal system
 */
class RoleLst extends spinal_core_connectorjs_type_1.Model {
    constructor() {
        super({
            roles: new spinal_core_connectorjs_type_1.Lst()
        });
    }
}
exports.RoleLst = RoleLst;
spinal_core_connectorjs_type_1.spinalCore.register_models(RoleLst);
//# sourceMappingURL=RoleLst.js.map