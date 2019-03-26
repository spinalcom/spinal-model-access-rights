import { Model } from 'spinal-core-connectorjs_type';
export declare class Role extends Model {
    name: spinal.Str;
    description: spinal.Str;
    constructor(name: string, description: string);
}
