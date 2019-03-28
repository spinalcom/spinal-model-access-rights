import { Model } from 'spinal-core-connectorjs_type';
/**
 * @property  {spinal.Str} name of the role
 * @property  {spinal.Str} description of the role
 */
export declare class Role extends Model {
    name: spinal.Str;
    description: spinal.Str;
    /**
     * @param name {string}
     * @param description {string}
     */
    constructor(name: string, description: string);
}
