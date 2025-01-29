import * as migration_20250127_172810 from './20250127_172810';
import * as migration_20250128_233530 from './20250128_233530';
import * as migration_20250129_000012 from './20250129_000012';

export const migrations = [
  {
    up: migration_20250127_172810.up,
    down: migration_20250127_172810.down,
    name: '20250127_172810',
  },
  {
    up: migration_20250128_233530.up,
    down: migration_20250128_233530.down,
    name: '20250128_233530',
  },
  {
    up: migration_20250129_000012.up,
    down: migration_20250129_000012.down,
    name: '20250129_000012'
  },
];
