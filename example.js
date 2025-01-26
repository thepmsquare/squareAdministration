import {
  CoreAdministrationBL,
  AuthenticationAdministrationBL,
} from "./dist/index.js";

let coreAdministrationBL = new CoreAdministrationBL();
console.log(await coreAdministrationBL.getAllGreetingsV0("dummy_access_token"));

let authenticationAdministrationBL = new AuthenticationAdministrationBL();
console.log(
  await authenticationAdministrationBL.registerUsernameV0(
    "dummy_username",
    "dummy_password",
    "dummy_password_2"
  )
);
console.log(
  await authenticationAdministrationBL.loginUsernameV0(
    "dummy_username",
    "dummy_password"
  )
);
console.log(
  await authenticationAdministrationBL.removeAppForSelfV0("dummy_access_token")
);

// will not work because refresh token are expected from cookies.
console.log(await authenticationAdministrationBL.generateAccessTokenV0());
console.log(await authenticationAdministrationBL.logoutV0());
