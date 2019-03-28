"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * @property {spinal.Str} name of the appProfile
 * @property {spinal.Str} description of the appProfile
 * @property {spinal.Lst<Role>} list of role that define the appProfile
 */
class AppProfile extends spinal_core_connectorjs_type_1.Model {
    /**
     *
     * @param {string} name
     * @param {string} description
     * @param {Role[]} roles
     */
    constructor(name, description, roles = []) {
        super({
            name: name,
            description: description,
            roles: roles
        });
    }
}
exports.AppProfile = AppProfile;
spinal_core_connectorjs_type_1.spinalCore.register_models(AppProfile);
//# sourceMappingURL=AppProfile.js.map