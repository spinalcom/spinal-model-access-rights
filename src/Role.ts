import { Model, spinalCore } from 'spinal-core-connectorjs_type';

/**
 * @property  {spinal.Str} name of the role
 * @property  {spinal.Str} description of the role
 */
export class Role extends Model {
  public name: spinal.Str;
  public description: spinal.Str;

  /**
   * @param name {string}
   * @param description {string}
   */
  constructor(name: string, description: string) {
    super({
      name: name,
      description: description
    });
  }

}

spinalCore.register_models(Role);