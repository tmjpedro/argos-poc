import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: [["devtools", { debuggerAddress: `localhost:9222` }]],
    capabilities: [
      {
        browserName: "chrome",
        "wdio:devtoolsOptions": {
          headless: true,
        },
      },
    ],
  },
};
