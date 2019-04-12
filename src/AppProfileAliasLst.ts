import { Model, Lst, spinalCore } from 'spinal-core-connectorjs_type';
import { AppProfileAlias } from "./AppProfileAlias";

/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfileAlias>} apps List of all AppProfile of the system
 */
export class AppProfileAliasLst extends Model {
  public aliases: spinal.Lst<AppProfileAlias>;

  constructor() {
    super({
      aliases: new Lst()
    });
  }
}

spinalCore.register_models(AppProfileAliasLst);
