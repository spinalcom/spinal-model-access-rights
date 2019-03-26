import { Model, spinalCore } from 'spinal-core-connectorjs_type';
import { AppProfile } from "./AppProfile";

/**
 * Model that represent an alias of an appProfile.
 * The name of the appProfile represented by the alias can be modified
 * dynamically
 * @property {spinal.Str} name
 * @property {spinal.Ptr} appProfiles
 */
export class AppProfileAlias extends Model{
  public  name: spinal.Str;
  public appProfiles: spinal.Ptr<AppProfile>;

  /**
   * @param name {string}
   * @param appProfiles {AppProfile[]}
   */
  constructor(name :string, appProfiles: AppProfile[] = []){
    super({
      name: name,
      appProfiles: appProfiles
    });
  }


}


spinalCore.register_models(AppProfileAlias);