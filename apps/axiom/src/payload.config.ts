// import path from "node:path";
// import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { clientConfig, adminConfig, baseConfig } from '@/cms/configs'

// const filename = fileURLToPath(import.meta.url);
// const dirname = path.dirname(filename);

export default buildConfig({
  ...baseConfig,
  ...clientConfig,
  admin: {
    ...adminConfig,
  }})
