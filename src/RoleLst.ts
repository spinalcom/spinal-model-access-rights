import { Model, Lst, spinalCore } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";

/**
 * This model contain all the role allowed in the Spinal system.
 * @property {spinal.Lst<Role>} roles list of role a the spinal system
 */
export class RoleLst extends Model {
  public roles: spinal.Lst<Role>;

  constructor() {
    super({
      roles: new Lst()
    })
  }
}

spinalCore.register_models(RoleLst);
