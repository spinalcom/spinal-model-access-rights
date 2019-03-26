"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
class UserProfile extends spinal_core_connectorjs_type_1.Model {
    constructor(roles = []) {
        super({
            roles: roles
        });
    }
}
exports.UserProfile = UserProfile;
spinal_core_connectorjs_type_1.spinalCore.register_models(UserProfile);
//# sourceMappingURL=UserProfile.js.map