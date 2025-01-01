import {
  CoreAdministrationBL,
  AuthenticationAdministrationBL,
} from "./dist/index.js";

let coreAdministrationBL = new CoreAdministrationBL();
console.log(await coreAdministrationBL.getAllGreetingsV0("dumy_access_token"));

let authenticationAdministrationBL = new AuthenticationAdministrationBL();
console.log(
  await authenticationAdministrationBL.registerUsernameV0(
    "dumy_username",
    "dumy_password",
    "dummy_password_2"
  )
);
console.log(
  await authenticationAdministrationBL.loginUsernameV0(
    "dumy_username",
    "dumy_password"
  )
);
