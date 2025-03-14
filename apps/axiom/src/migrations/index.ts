import * as migration_20250310_110726 from './20250310_110726';
import * as migration_20250311_132954 from './20250311_132954';
import * as migration_20250312_052940 from './20250312_052940';
import * as migration_20250314_171625 from './20250314_171625';
import * as migration_20250314_204702 from './20250314_204702';

export const migrations = [
  {
    up: migration_20250310_110726.up,
    down: migration_20250310_110726.down,
    name: '20250310_110726',
  },
  {
    up: migration_20250311_132954.up,
    down: migration_20250311_132954.down,
    name: '20250311_132954',
  },
  {
    up: migration_20250312_052940.up,
    down: migration_20250312_052940.down,
    name: '20250312_052940',
  },
  {
    up: migration_20250314_171625.up,
    down: migration_20250314_171625.down,
    name: '20250314_171625',
  },
  {
    up: migration_20250314_204702.up,
    down: migration_20250314_204702.down,
    name: '20250314_204702'
  },
];
