import { Model, Lst, spinalCore } from 'spinal-core-connectorjs_type';
import { AppProfile } from "./AppProfile";

/**
 * This model contain all the appProfile of the Spinal system.
 * @property {spinal.Lst<AppProfile>} apps List of all AppProfile of the system
 */
export class AppProfileLst extends Model {
  public apps: spinal.Lst<AppProfile>;

  constructor() {
    super({
      apps: new Lst()
    });
  }
}

spinalCore.register_models(AppProfileLst);
