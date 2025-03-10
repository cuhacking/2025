import * as migration_20250310_110726 from './20250310_110726';

export const migrations = [
  {
    up: migration_20250310_110726.up,
    down: migration_20250310_110726.down,
    name: '20250310_110726'
  },
];
