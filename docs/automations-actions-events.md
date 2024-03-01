---
sidebar_position: 5
---

# Automations, Actions, and Events

This article explains the difference between Automations, Actions, and Events, and how each is used.

## Events

Starting with the most common of them all! Events are what control your devices. For example, the "Set Color" Event will set the color of a device to a color of your choosing!

Events can only be used within Actions and Automations, they cannot be called alone. To control individual devices, check out the web interface at https://govee.tinkertechlab.com/dash.

## Automations

Automations are groupings of events that can be triggered by multiple services. For example, you can have an Automation that sets the Kitchen Lights to red, and the Dining Room lights to green every day at 2PM using an Automation. You can also trigger this automation via [Discord](/docs/Integrations/discord), and [iOS](/docs/Integrations/ios) (Among others) as well. See the example below to see how Automations are used. 

## Actions

Actions are groupings of events that can be used across multiple Automations. Taking our example of setting the color of two devices from the previous section (Kitchen Lights to red, Dining Room Lights to green), we can save those two events to an action, and then use them with multiple automations. For example, we can create the two automations below with our action:

### Action
- Set "Kitchen Lights" to red
- Set "Dining Room Lights" to green

### Automation 1:
- Run Action
- Set bedroom lights to blue

### Automation 2:
- Run Action
- Turn on living room fan

Now, instead of adding "Set the Kitchen Lights to red, and the Dining Room lights to green" in each automation, we only need to set them once, in an action, and use them in both of our Automations. Pretty cool, right?

## Examples:

Still confused? Take a look at this example that uses Automations, Actions, and Events!

Note: The name of the Automation or Event appears in _italics_.

### **Action**: _turn on outdoor lights_
- **Event**: Set "Outdoor Spotlights" Brightness to 100%
- **Event**: Set "Outdoor Rope Light" Brightness to 100%

### **Action**: _turn off outdoor lights_
- **Event**: Set "Outdoor Spotlights" to Off
- **Event**: Set "Outdoor Rope Light" to Off

### **Automation**: _Outdoor Party_
Triggers: iOS Client, Discord
- **Event**: Run Action "turn on outdoor lights"
- **Event**: Set "Outdoor Spotlights" to DIYScene "Disco"
- **Event**: Set "Outdoor Rope Light" to LightScene "Rainbow"

### **Automation**: _Move the Party Inside_
Triggers: iOS Client, Discord
- **Event**: Run Action "turn off outdoor lights"
- **Event**: Set "Curtain Lights" to DIYScene "Portal"

### **Automation**: _Outdoor Off_
Triggers: iOS Client, Discord, Daily at 2AM
- **Event**: Run Action "turn off outdoor lights"


## How do I create Automations and Actions?

You can create your own automations and actions by selecting "Automations" from the left sidebar in your account. Or, [click here](https://govee.tinkertechlab.com/automations) to visit the page directly.

## I have a suggestion for a new Event, how do I contact you?

Please create a new topic in the "Help" Channel on our Discord Server! [Join our server here](https://discord.gg/gbmjfFe79x)!