import { Model } from 'spinal-core-connectorjs_type';
import { AppProfile } from "./AppProfile";
/**
 * Model that represent an alias of an appProfile.
 * The name of the appProfile represented by the alias can be modified
 * dynamically
 * @property {spinal.Str} name
 * @property {spinal.Ptr} appProfiles
 */
export declare class AppProfileAlias extends Model {
    name: spinal.Str;
    appProfile: spinal.Ptr<AppProfile>;
    /**
     * @param name {string}
     * @param appProfiles {AppProfile[]}
     */
    constructor(name: string, appProfiles: AppProfile);
}
