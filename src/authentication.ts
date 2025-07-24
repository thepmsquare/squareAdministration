import { fetchJSONData } from "squarecommons";

import {
  GenerateAccessTokenV0ResponseZ,
  LoginUsernameV0ResponseZ,
  LogoutV0Z,
  RegisterUsernameV0ResponseZ,
  RemoveAppForSelfV0ResponseZ,
  resetPasswordAndLoginUsingBackupCodeV0ResponseZ,
} from "./types/AuthenticationResponses.js";

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
        undefined,
        // credentials
        "include"
      );
      return RegisterUsernameV0ResponseZ.parse(data);
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
        undefined,
        // credentials
        "include"
      );
      return LoginUsernameV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async removeAppForSelfV0(accessToken: string, password: string) {
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
        { password },
        // query params
        undefined
      );
      return RemoveAppForSelfV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async logoutV0() {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "logout/v0",
        // method
        "DELETE",
        // headers
        undefined,
        // body
        undefined,
        // query params
        undefined,
        // credentials
        "include"
      );
      return LogoutV0Z.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async generateAccessTokenV0() {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "generate_access_token/v0",
        // method
        "GET",
        // headers
        undefined,
        // body
        undefined,
        // query params
        undefined,
        // credentials
        "include"
      );
      return GenerateAccessTokenV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async registerLoginGoogleV0(googleID: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "register_login_google/v0",
        // method
        "POST",
        // headers
        undefined,
        // body
        { google_id: googleID },
        // query params
        undefined,
        // credentials
        "include"
      );
      return GenerateAccessTokenV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async resetPasswordAndLoginUsingBackupCodeV0(
    backupCode: string,
    username: string,
    newPassword: string,
    logoutOtherSessions: boolean = false
  ) {
    try {
      const data = await fetchJSONData(
        // base url
        this.administrationBLBaseURL,
        // endpoint
        "reset_password_and_login_using_backup_code/v0",
        // method
        "POST",
        // headers
        undefined,
        // body
        {
          backup_code: backupCode,
          username: username,
          new_password: newPassword,
          logout_other_sessions: logoutOtherSessions,
        },
        // query params
        undefined,
        // credentials
        "include"
      );
      return resetPasswordAndLoginUsingBackupCodeV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
}
export { AuthenticationAdministrationBL };
