import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const GetAllGreetingsV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.array(
      z.object({
        greeting_anonymous_sender_name: z.string().nullable(),
        user_id: z.string().nullable(),
        greeting_id: z.number(),
        greeting_datetime: z.string(),
        greeting_is_anonymous: z.boolean(),
        greeting_text: z.string().nullable(),
        user_credential_username: z.string().nullable(),
      })
    ),
  }),
});
type GetAllGreetingsV0Response = z.infer<typeof GetAllGreetingsV0ResponseZ>;

export { GetAllGreetingsV0ResponseZ, GetAllGreetingsV0Response };
