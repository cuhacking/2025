import * as migration_20250127_172810 from './20250127_172810';

export const migrations = [
  {
    up: migration_20250127_172810.up,
    down: migration_20250127_172810.down,
    name: '20250127_172810'
  },
];
