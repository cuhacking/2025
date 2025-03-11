import * as migration_20250310_110726 from './20250310_110726';
import * as migration_20250311_132954 from './20250311_132954';

export const migrations = [
  {
    up: migration_20250310_110726.up,
    down: migration_20250310_110726.down,
    name: '20250310_110726',
  },
  {
    up: migration_20250311_132954.up,
    down: migration_20250311_132954.down,
    name: '20250311_132954'
  },
];
