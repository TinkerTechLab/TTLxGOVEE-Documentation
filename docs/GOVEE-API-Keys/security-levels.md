---
sidebar_position: 2
---


# Security Levels

We offer two security levels that you can save your GOVEE API keys with, and each has its own set of benefits and drawbacks. 

## High Security Level (Recommended)

The High Security Level is the most secure, however it does come with some limitations:

### Pros
- More secure
  - In the event of a security breach, an attacker needs your account password (Which is not easily accessible in the event of a breach) to get your GOVEE API keys
  - TTL Staff Members and Server Administrators cannot view your key (It's encrypted in a way that makes it impossible)

### Cons
- "Login With Google" is disabled, as your account password is required to decrypt your GOVEE API keys
- The following additional options are unavailable: 
  - The Discord Integration (Both for Automations and for normal use)
  - The "Time" trigger (For Automations)

## Regular Security Level

Get access to the entire feature set, but with slightly less security

### Pros
- Access to all features (Including "Login with Google" and our Discord Integration)

### Cons
- In the event of a breach, it _may_ be possible for attackers to retrieve your GOVEE API key
- Server Administrators _may_ be able to view your API key

## More Information

In both situations, and attacker needs access to both our source code, and our database in order to attempt an attack on your API key(s). Simply accessing the Database is _not enough_ to retrieve your API key, no matter what method you use to secure it. While it is extremely unlikely that an attacker is able to access our systems, it is possible. Our goal is to let you decide what security level to use in order to provide you with a level of control that would not be possible otherwise.

Obviously, we take every possible step to ensure your data stays safe and secure. Please review our [Privacy Policy](https://govee.tinkertechlab.com/legal/privacy-policy) for more information on how we work to keep your information safe.