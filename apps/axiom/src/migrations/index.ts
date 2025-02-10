import * as migration_20250210_065131 from './20250210_065131';

export const migrations = [
  {
    up: migration_20250210_065131.up,
    down: migration_20250210_065131.down,
    name: '20250210_065131'
  },
];
