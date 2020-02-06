import {AvatarDriver as AvatarDriverCore } from 'wix-ui-core/dist/src/components/avatar/avatar.driver';

export default interface AvatarDriver extends AvatarDriverCore {
  clickIndication: () => Promise<void>
  indicationExists: () => Promise<boolean>
}
