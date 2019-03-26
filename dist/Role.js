"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
class Role extends spinal_core_connectorjs_type_1.Model {
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