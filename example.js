import {
  CoreAdministrationBL,
  AuthenticationAdministrationBL,
} from "./dist/index.js";

let coreAdministrationBL = new CoreAdministrationBL();
console.log(await coreAdministrationBL.getAllGreetingsV0("dumy_access_token"));

let authenticationAdministrationBL = new AuthenticationAdministrationBL();
