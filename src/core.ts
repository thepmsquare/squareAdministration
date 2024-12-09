import { fetchJSONData } from "squarecommons";

class CoreAdministrationBL {
  constructor(
    private administrationBLBaseURL: string = "http://localhost:10111"
  ) {}

  async getAllGreetingsV0(
    accessToken: string,
    orderBy?: string[],
    limit?: number,
    offset?: number
  ) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "get_all_greetings/v0",
        // method
        "POST",
        // headers
        { access_token: accessToken },
        // body
        { limit, offset, order_by: orderBy },
        // query params
        undefined
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export { CoreAdministrationBL };
