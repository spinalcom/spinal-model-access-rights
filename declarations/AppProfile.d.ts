import { Model } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";
export declare class AppProfile extends Model {
    name: spinal.Str;
    description: spinal.Str;
    roles: spinal.Lst<Role>;
    constructor(name: string, description: string, roles?: Role[]);
}
