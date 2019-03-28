import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";
/**
 * This model contain all the role allowed in the Spinal system.
 * @property {spinal.Lst<Role>} roles list of role a the spinal system
 */
export declare class RoleLst extends Model {
    roles: spinal.Lst<Role>;
    constructor();
}
