import { Model, spinalCore } from 'spinal-core-connectorjs_type';
import { Role } from "./Role";

/**
 * Model that represent the profile of an user.
 * @property {spinal.Lst} contain the role that the user has
 */
export class UserProfile extends Model {
  public roles: spinal.Lst<Role>;

  /**
   *
   * @param {Role[]} roles list of role that represent the user. default []
   */
  constructor(roles: Role[] = []) {
    super({
      roles: roles
    });
  }
}

spinalCore.register_models(UserProfile);