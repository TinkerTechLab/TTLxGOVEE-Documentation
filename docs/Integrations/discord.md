---
sidebar_position: 2
---

# Integrations: Discord

Documentation for the Discord Integration (Last Updated Feb. 2nd, 2024)

## Connecting to Discord

You must connect your TTL account to Discord before using the integration

1. Login to the [control panel](https://govee.tinkertechlab.com/dash) and open the [settings page](https://govee.tinkertechlab.com/settings) (Via your profile icon in the upper-right)

2. Scroll down to the "Integrations" section (On wide-screen devices, this will be in the left column)

3. Select the big "Connect To Discord" button (Don't see the button? You may already be connected)

4. Click "Approve" when Discord asks if TTLxGOVEE can have access to your account

5. Join our Discord server (You can always leave later. You need to join in order to chat with our bot. [Click here to Join our Discord server](https://discord.gg/gbmjfFe79x))

6. View the "[Getting Started](https://discord.com/channels/1203793630448455770/1203802134823305237)" channel to DM our bot (Specifically Step 8)

## Setting up the bot

The first time you message our bot, there are a few setup steps you must complete (NOTE: these steps must be completed by DMing the bot!)

1. Start by sending any word you want (A simple "hello" will do!)

2. Message the bot with the email address you use to login to the [control panel](https://govee.tinkertechlab.com/dash). (**Note: We will _never_ ask for your password, GOVEE API key, or 2fa key on Discord!**)

3. Test the setup of your GOVEE API keys be using the `test` command (Please note that your API keys must use the "Regular Security" level to work with the Discord integration. See [GOVEE API key security level](/docs/GOVEE-API-Keys/security-levels) and [Managing your GOVEE API keys](/docs/GOVEE-API-Keys/using-multiple-keys))

4. As long as at least one of your API keys is configured with the "Regular" security level, the bot is setup and ready for use!

## Connecting to a custom Discord Server

Starting with BotV2, you can add the bot to your own Discord server, and link it to a channel allowing all members of the channel to control your lights! Perfect for the workplace or at home, when multiple people wish to control the same lights without having to share the same GOVEE APP login information.

1. Click [this link](https://discord.com/oauth2/authorize?client_id=1203871803609448448), then add the bot to your server by selecting it via the drop-down. Make sure to allow the bot all the permissions it requests, they are important for it to work properly! Discord link: https://discord.com/oauth2/authorize?client_id=1203871803609448448

> Note! Unlike in your DMs, you'll need to mention the bot (Give an @) at the beginning of every message you want it to respond to, including the setup prompts! For your privacy, the bot will never store any posts that do not mention it.

2. Send `@bot setup` in the channel you wish to link the bot to. The user who wants to link their TTL account must be the same user that sends the message.

>Note! You need to setup the bot to work in your DMs before you can link it to a channel! Setup instructions are above if you need them :)

3. Following the bots instructions, request a verification code from your DMs, and send it to the bot in the channel you want to link it to.

4. Once setup, all Discord members with access to the channel can use all the bot's commands to control the GOVEE lights linked to your TTL account.

5. Want to unlink the bot? Just type `@bot bot remove channel` in the channel, or `@bot bot reset` to completely reset it in all channels and your DMs.

## Using the bot

### Bot commands

_Please note: This list may not be up-to-date. Please [join our Discord server](https://discord.gg/gbmjfFe79x) and reference the [bot commands](https://discord.com/channels/1203793630448455770/1203860648178745394) channel for updated information_

- `test` (Tests your linked GOVEE API keys)
- `list automations` (Lists your [TTL Automations](https://govee.tinkertechlab.com/automations) that use Discord as a trigger)
- `bot reset` (Resets the bot to a 'new' state. You will have redo the [bot setup](#setting-up-the-bot))
- `@bot bot remove channel` (Can only be sent in a channel. Will remove the bot from the channel. Use `reset` to remove from all link channels)
- `<automation trigger word>` (Trigger an [automation](https://govee.tinkertechlab.com/automations))
- `turn on <device name>` (Turn on a single device. Devices name must be unique)
- `turn off <device name>` (Turn on a single device. Devices name must be unique)
- `turn on room <room name>` (Turn on all devices linked to a room - Plus/Premium only [Upgrade](/docs/upgrading))
- `turn off room <room name>` (Turn off all devices linked to a room - Plus/Premium only [Upgrade](/docs/upgrading))
- `turn on all <optional API key #>` (Turn on all devices controlled by the API key - Premium only [Upgrade](/docs/upgrading))
- `turn off all <optional API key #>` (Turn off all devices controlled by the API key - Premium only [Upgrade](/docs/upgrading))