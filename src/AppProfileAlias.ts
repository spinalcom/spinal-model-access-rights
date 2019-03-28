import { Model, spinalCore } from 'spinal-core-connectorjs_type';
import { AppProfile } from "./AppProfile";
import Ptr = spinal.Ptr;

/**
 * Model that represent an alias of an appProfile.
 * The name of the appProfile represented by the alias can be modified
 * dynamically
 * @property {spinal.Str} name
 * @property {spinal.Ptr} appProfiles
 */
export class AppProfileAlias extends Model{
  public  name: spinal.Str;
  public appProfile: spinal.Ptr<AppProfile>;

  /**
   * @param name {string}
   * @param appProfiles {AppProfile[]}
   */
  constructor(name :string, appProfiles: AppProfile){
    super({
      name: name,
      appProfile: new Ptr(appProfiles)
    });
  }


}


spinalCore.register_models(AppProfileAlias);