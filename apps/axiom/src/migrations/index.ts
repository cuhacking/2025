import * as migration_20250302_043807 from './20250302_043807';
import * as migration_20250302_045653 from './20250302_045653';

export const migrations = [
  {
    up: migration_20250302_043807.up,
    down: migration_20250302_043807.down,
    name: '20250302_043807',
  },
  {
    up: migration_20250302_045653.up,
    down: migration_20250302_045653.down,
    name: '20250302_045653'
  },
];
