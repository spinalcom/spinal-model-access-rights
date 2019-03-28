import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";
/**
 * Model that represent the profile of an user.
 * @property {spinal.Lst} contain the role that the user has
 */
export declare class UserProfile extends Model {
    roles: spinal.Lst<Role>;
    name: string;
    /**
     * @param {string} name of the user
     * @param {Role[]} roles list of role that represent the user. default []
     */
    constructor(name: string, roles?: Role[]);
}
