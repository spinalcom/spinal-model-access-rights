"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
class AppProfileAlias extends spinal_core_connectorjs_type_1.Model {
    constructor(name, roles = []) {
        super({
            name: name,
            roles: roles
        });
    }
}
exports.AppProfileAlias = AppProfileAlias;
//# sourceMappingURL=AppProfileAlias.js.map