import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const loginUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      user_id: z.string(),
      access_token: z.string(),
      refresh_token: z.string(),
    }),
  }),
});
type LoginUsernameV0Response = z.infer<typeof loginUsernameV0ResponseZ>;

export { loginUsernameV0ResponseZ, LoginUsernameV0Response };
