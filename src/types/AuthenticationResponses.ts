import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const LoginUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      user_id: z.string(),
      access_token: z.string(),
      refresh_token: z.string(),
    }),
  }),
});
type LoginUsernameV0Response = z.infer<typeof LoginUsernameV0ResponseZ>;

const RegisterUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      user_id: z.string(),
      username: z.string(),
      app_id: z.number(),
      access_token: z.string(),
      refresh_token: z.string(),
    }),
  }),
});
type RegisterUsernameV0Response = z.infer<typeof RegisterUsernameV0ResponseZ>;
const RemoveAppForSelfV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.array(z.never()).max(0),
  }),
});
type RemoveAppForSelfV0Response = z.infer<typeof RemoveAppForSelfV0ResponseZ>;
export {
  LoginUsernameV0ResponseZ,
  LoginUsernameV0Response,
  RegisterUsernameV0ResponseZ,
  RegisterUsernameV0Response,
  RemoveAppForSelfV0ResponseZ,
  RemoveAppForSelfV0Response,
};
