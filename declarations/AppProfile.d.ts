import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";
/**
 * @property {spinal.Str} name of the appProfile
 * @property {spinal.Str} description of the appProfile
 * @property {spinal.Lst<Role>} list of role that define the appProfile
 */
export declare class AppProfile extends Model {
    name: spinal.Str;
    description: spinal.Str;
    roles: spinal.Lst<Role>;
    /**
     *
     * @param {string} name
     * @param {string} description
     * @param {Role[]} roles
     */
    constructor(name: string, description: string, roles?: Role[]);
}
