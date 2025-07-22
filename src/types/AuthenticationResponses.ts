import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const LoginUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      access_token: z.string(),
    }),
  }),
});
type LoginUsernameV0Response = z.infer<typeof LoginUsernameV0ResponseZ>;

const RegisterUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      username: z.string(),
      app_id: z.number(),
      access_token: z.string(),
    }),
  }),
});
type RegisterUsernameV0Response = z.infer<typeof RegisterUsernameV0ResponseZ>;
const RemoveAppForSelfV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.array(z.number()),
  }),
});
type RemoveAppForSelfV0Response = z.infer<typeof RemoveAppForSelfV0ResponseZ>;

const GenerateAccessTokenV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      access_token: z.string(),
    }),
  }),
});
type GenerateAccessTokenV0Response = z.infer<
  typeof GenerateAccessTokenV0ResponseZ
>;

const LogoutV0Z = APIOutputZ.extend({
  data: z.null(),
});

type LogoutV0 = z.infer<typeof LogoutV0Z>;

const registerLoginGoogleV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      username: z.string(),
      app_id: z.number(),
      access_token: z.string(),
      was_new_user: z.boolean(),
    }),
  }),
});

type registerLoginGoogleV0Response = z.infer<
  typeof registerLoginGoogleV0ResponseZ
>;

export {
  LoginUsernameV0ResponseZ,
  LoginUsernameV0Response,
  RegisterUsernameV0ResponseZ,
  RegisterUsernameV0Response,
  RemoveAppForSelfV0ResponseZ,
  RemoveAppForSelfV0Response,
  GenerateAccessTokenV0ResponseZ,
  GenerateAccessTokenV0Response,
  LogoutV0Z,
  LogoutV0,
  registerLoginGoogleV0ResponseZ,
  registerLoginGoogleV0Response,
};
