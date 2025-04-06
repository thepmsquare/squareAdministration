import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const GetAllGreetingsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.array(
      z.strictObject({
        greeting_anonymous_sender_name: z.string().nullable(),
        user_id: z.string().nullable(),
        greeting_id: z.number(),
        greeting_datetime: z.string(),
        greeting_is_anonymous: z.boolean(),
        greeting_text: z.string().nullable(),
        user_profile_username: z.string().nullable(),
      })
    ),
    total_count: z.number(),
  }),
});
type GetAllGreetingsV0Response = z.infer<typeof GetAllGreetingsV0ResponseZ>;

export { GetAllGreetingsV0ResponseZ, GetAllGreetingsV0Response };
