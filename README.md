# squareAdministration

## about

helper for administration bl for my projects.

## usage

[Example](./example.js)

## env

1. node js - v18.17.0
2. npm - v9.6.7

## changelog

### v2.0.1

- AuthenticationAdministrationBL
  - set credentials: include in RegisterUsernameV0ResponseZ, LoginUsernameV0ResponseZ, generateAccessTokenV0 and logoutV0.

### v2.0.0

- AuthenticationAdministrationBL
  - remove refreshToken as input parameter from generateAccessTokenV0, logoutV0.
  - remove refresh_token from types RegisterUsernameV0ResponseZ, LoginUsernameV0ResponseZ.

### v1.5.0

- AuthenticationAdministrationBL
  - add generateAccessTokenV0, logoutV0.

### v1.4.1

- Core
  - bugfix in type of getAllGreetingsV0.
- All
  - use strictObject instead of object in zod.
  - export all types in index file.

### v1.4.0

- add types to getAllGreetingsV0.

### v1.3.1

- bug fix in type for removeAppForSelfV0.

### v1.3.0

- add types to removeAppForSelfV0.

### v1.2.0

- add types to registerUsernameV0.

### v1.1.0

- migrate types to zod.
- add types to loginUsernameV0.

### v1.0.0

- initial implementation.

## Feedback is appreciated. Thank you!
