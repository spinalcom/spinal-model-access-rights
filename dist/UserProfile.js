"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
/**
 * Model that represent the profile of an user.
 * @property {spinal.Lst} contain the role that the user has
 */
class UserProfile extends spinal_core_connectorjs_type_1.Model {
    /**
     * @param {string} name of the user
     * @param {Role[]} roles list of role that represent the user. default []
     */
    constructor(name, roles = []) {
        super({
            name: name,
            roles: roles
        });
    }
}
exports.UserProfile = UserProfile;
spinal_core_connectorjs_type_1.spinalCore.register_models(UserProfile);
//# sourceMappingURL=UserProfile.js.map