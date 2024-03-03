---
sidebar_position: 5
---

# Integrations: Time Pattern

Documentation for the Time Pattern Automation Integration (Last Updated Mar. 2nd, 2024)

## Getting Started

- Create an [automation](https://govee.tinkertechlab.com/automations) with "Time Pattern" as a trigger
- Use the examples below to configure your time pattern. Use the Table of Contents in the right-hand menu to find an example that is closest to what you want!

Please note that the Time Pattern Integration uses a limited version of the Linux Cron Scheduler, but also accepts shorthand (We call it the TTL Scheduler) for common tasks.

---

:warning: **Notice regarding Timezones and Daylight Savings Time**: Due to the over-complication of DST and time-zones ([Just take a look at this list](https://wikipedia.org/wiki/Daylight_saving_time_by_country)), the Scheduling system abides by the following rules:
- A UTC offset can be set in Automation settings. This UTC offset applies to _ALL_ of your automations.
- Our server will most likely follow the DST rules in IANA TimeZone America/Chicago. It is advised that you check your automations to make sure they continue to run at the correct time after a DST change.


## Examples (Shorthand - TTL Scheduler)

The TTL Scheduler takes the following shorthand values:


### Run at a specific time, daily

`h<i1> m<i2> @d` 
- `i1`, Min:0 Max:24 (Represents hour of the day)
- `i2`, Min:0 Max:60 (Represents minute of hour)

| Enter this value | To run at ...|
|------------------|--------------|
| `h8 m0 @d` | 8:00AM Daily|
| `h13 m0 @d` | 1:00PM Daily|
| `h13 m30 @d` | 1:30PM Daily|


### Run at a specific time, on select day(s) of the week

`h<i1> m<i2> @<i3>` 
- `i1`, Min:0 Max:12 (Represents hour of the day)
- `i2`, Min:0 Max:60 (Represents minute of hour)
- `i3`, Min:1 Max:7 (Represents day of the week where Monday is 1 and Sunday is 7)

| Enter this value | To run at ...|
|------------------|--------------|
| `h8 m0 @1` | 8AM every Monday|
| `h13 m0 @5` | 1PM every Friday|
| `h13 m30 @6,7` | 1:30PM every Saturday and Sunday|
| `h14 m45 @1,2,3,4,5` | 2:45PM every Weekday|



## Examples (Linux Scheduler)

**Basic Syntax**

`Minute Hour DayOfMonth Month DayOfWeek`

- To run on a specific interval, use an integer. For example, to run every 15 minutes to the hour (1:15, 2:15, 3:15, etc), enter 15 in the minute section, and an asterisk in the rest `15 * * * *`
- To consistently run on an interval, use `*/<integer>`. For example, to run every 15 minutes (1:15, 1:30, 1:45), enter `*/15` in the minute section, and an asterisk in the rest `*/15 * * * *`

**Additional Notes**
- Intervals less then `*/15 * * * *` cannot be saved and will revert back to the previous save state
- Do not expect tasks to run exactly when you specify. Due to the large number of users, a delay of up to 3 minutes is common while the system parses hundreds of Automations


### Run every 15 minutes

| :exclamation:  (GOVEE Rate Limit Warning) This example is API-heavy! Only use it for limited requests!   |
|----------------------------------------------------------------------------------------------------------|

`*/15 * * * *`

### Run at 3AM Daily

`0 3 * * *`

## Run every 5 hours, but only on the weekend (Saturday, Sunday)

`0 */5 * * 6,7`


## Questions

We know, it's kind of a lot! Please direct any questions to our [Discord Server](https://discord.gg/gbmjfFe79x). [Paid users](/docs/upgrading) can also request support over email