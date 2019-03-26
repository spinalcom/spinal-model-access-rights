import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";
export declare class UserProfile extends Model {
    roles: spinal.Lst<Role>;
    constructor(roles?: Role[]);
}
