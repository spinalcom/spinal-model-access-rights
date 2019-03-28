"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * @property  {spinal.Str} name of the role
 * @property  {spinal.Str} description of the role
 */
class Role extends spinal_core_connectorjs_type_1.Model {
    /**
     * @param name {string}
     * @param description {string}
     */
    constructor(name, description) {
        super({
            name: name,
            description: description
        });
    }
}
exports.Role = Role;
spinal_core_connectorjs_type_1.spinalCore.register_models(Role);
//# sourceMappingURL=Role.js.map