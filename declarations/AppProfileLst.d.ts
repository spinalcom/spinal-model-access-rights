import { Model } from 'spinal-core-connectorjs_type';
import { AppProfile } from "./AppProfile";
/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfile>} apps List of all AppProfile of the system
 */
export declare class AppProfileLst extends Model {
    apps: spinal.Lst<AppProfile>;
    constructor();
}
