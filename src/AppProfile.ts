import { Model, spinalCore } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";

/**
 * @property {spinal.Str} name of the appProfile
 * @property {spinal.Str} description of the appProfile
 * @property {spinal.Lst<Role>} list of role that define the appProfile
 */
export class AppProfile extends Model {
  public name: spinal.Str;
  public description: spinal.Str;
  public roles: spinal.Lst<Role>;

  /**
   *
   * @param {string} name
   * @param {string} description
   * @param {Role[]} roles
   */
  constructor(name: string, description: string, roles: Role[] = []) {
    super({
      name: name,
      description: description,
      roles: roles
    });
  }
}


spinalCore.register_models(AppProfile);
