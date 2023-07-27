import { method } from "@valkyr/api";

import { hasToken } from "../../Actions/HasToken";
import { rpc } from "../../Services/Bitcoin";

export const getMempoolInfo = method({
  actions: [hasToken],
  handler: async () => {
    return rpc.blockchain.getMemPoolInfo();
  },
});
