import { Model } from 'spinal-core-connectorjs_type';
import { AppProfileAlias } from "./AppProfileAlias";
/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfileAlias>} apps List of all AppProfile of the system
 */
export declare class AppProfileAliasLst extends Model {
    aliases: spinal.Lst<AppProfileAlias>;
    constructor();
}
