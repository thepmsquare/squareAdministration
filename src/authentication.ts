import { fetchJSONData } from "squarecommons";

import { loginUsernameV0ResponseZ } from "./types/AuthenticationResponses.js";

class AuthenticationAdministrationBL {
  constructor(
    private administrationBLBaseURL: string = "http://localhost:10111"
  ) {}

  async registerUsernameV0(
    username: string,
    password: string,
    adminPassword: string
  ) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "register_username/v0",
        // method
        "POST",
        // headers
        undefined,
        // body
        { username, password, admin_password: adminPassword },
        // query params
        undefined
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async loginUsernameV0(username: string, password: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "login_username/v0",
        // method
        "POST",
        // headers
        undefined,
        // body
        { username, password },
        // query params
        undefined
      );
      return loginUsernameV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async removeAppForSelfV0(accessToken: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "remove_app_for_self/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export { AuthenticationAdministrationBL };
