"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[935],{5372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=t(4848),s=t(8453);const r={sidebar_position:5},d="Integrations: Time Pattern",a={id:"Integrations/time-pattern",title:"Integrations: Time Pattern",description:"Documentation for the Time Pattern Automation Integration (Last Updated Mar. 2nd, 2024)",source:"@site/docs/Integrations/time-pattern.md",sourceDirName:"Integrations",slug:"/Integrations/time-pattern",permalink:"/docs/Integrations/time-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/TinkerTechLab/TTLxGOVEE-Documentation/docs/Integrations/time-pattern.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Integrations: Webhooks",permalink:"/docs/Integrations/webhooks"}},l={},o=[{value:"Getting Started",id:"getting-started",level:2},{value:"Examples (Shorthand - TTL Scheduler)",id:"examples-shorthand---ttl-scheduler",level:2},{value:"Run at a specific time, daily",id:"run-at-a-specific-time-daily",level:3},{value:"Run at a specific time, on select day(s) of the week",id:"run-at-a-specific-time-on-select-days-of-the-week",level:3},{value:"Examples (Linux Scheduler)",id:"examples-linux-scheduler",level:2},{value:"Run every 15 minutes",id:"run-every-15-minutes",level:3},{value:"Run at 3AM Daily",id:"run-at-3am-daily",level:3},{value:"Run every 5 hours, but only on the weekend (Saturday, Sunday)",id:"run-every-5-hours-but-only-on-the-weekend-saturday-sunday",level:2},{value:"Questions",id:"questions",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrations-time-pattern",children:"Integrations: Time Pattern"}),"\n",(0,i.jsx)(n.p,{children:"Documentation for the Time Pattern Automation Integration (Last Updated Mar. 2nd, 2024)"}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create an ",(0,i.jsx)(n.a,{href:"https://govee.tinkertechlab.com/automations",children:"automation"}),' with "Time Pattern" as a trigger']}),"\n",(0,i.jsx)(n.li,{children:"Use the examples below to configure your time pattern. Use the Table of Contents in the right-hand menu to find an example that is closest to what you want!"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please note that the Time Pattern Integration uses a limited version of the Linux Cron Scheduler, but also accepts shorthand (We call it the TTL Scheduler) for common tasks."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,i.jsx)(n.strong,{children:"Notice regarding Timezones and Daylight Savings Time"}),": Due to the over-complication of DST and time-zones (",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/Daylight_saving_time_by_country",children:"Just take a look at this list"}),"), the Scheduling system abides by the following rules:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A UTC offset can be set in Automation settings. This UTC offset applies to ",(0,i.jsx)(n.em,{children:"ALL"})," of your automations."]}),"\n",(0,i.jsx)(n.li,{children:"Our server will most likely follow the DST rules in IANA TimeZone America/Chicago. It is advised that you check your automations to make sure they continue to run at the correct time after a DST change."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples-shorthand---ttl-scheduler",children:"Examples (Shorthand - TTL Scheduler)"}),"\n",(0,i.jsx)(n.p,{children:"The TTL Scheduler takes the following shorthand values:"}),"\n",(0,i.jsx)(n.h3,{id:"run-at-a-specific-time-daily",children:"Run at a specific time, daily"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"h<i1> m<i2> @d"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i1"}),", Min:0 Max:24 (Represents hour of the day)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i2"}),", Min:0 Max:60 (Represents minute of hour)"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Enter this value"}),(0,i.jsx)(n.th,{children:"To run at ..."})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h8 m0 @d"})}),(0,i.jsx)(n.td,{children:"8:00AM Daily"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h13 m0 @d"})}),(0,i.jsx)(n.td,{children:"1:00PM Daily"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h13 m30 @d"})}),(0,i.jsx)(n.td,{children:"1:30PM Daily"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"run-at-a-specific-time-on-select-days-of-the-week",children:"Run at a specific time, on select day(s) of the week"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"h<i1> m<i2> @<i3>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i1"}),", Min:0 Max:12 (Represents hour of the day)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i2"}),", Min:0 Max:60 (Represents minute of hour)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i3"}),", Min:1 Max:7 (Represents day of the week where Monday is 1 and Sunday is 7)"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Enter this value"}),(0,i.jsx)(n.th,{children:"To run at ..."})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h8 m0 @1"})}),(0,i.jsx)(n.td,{children:"8AM every Monday"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h13 m0 @5"})}),(0,i.jsx)(n.td,{children:"1PM every Friday"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h13 m30 @6,7"})}),(0,i.jsx)(n.td,{children:"1:30PM every Saturday and Sunday"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"h14 m45 @1,2,3,4,5"})}),(0,i.jsx)(n.td,{children:"2:45PM every Weekday"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples-linux-scheduler",children:"Examples (Linux Scheduler)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Basic Syntax"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Minute Hour DayOfMonth Month DayOfWeek"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To run on a specific interval, use an integer. For example, to run every 15 minutes to the hour (1:15, 2:15, 3:15, etc), enter 15 in the minute section, and an asterisk in the rest ",(0,i.jsx)(n.code,{children:"15 * * * *"})]}),"\n",(0,i.jsxs)(n.li,{children:["To consistently run on an interval, use ",(0,i.jsx)(n.code,{children:"*/<integer>"}),". For example, to run every 15 minutes (1:15, 1:30, 1:45), enter ",(0,i.jsx)(n.code,{children:"*/15"})," in the minute section, and an asterisk in the rest ",(0,i.jsx)(n.code,{children:"*/15 * * * *"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Additional Notes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Intervals less then ",(0,i.jsx)(n.code,{children:"*/15 * * * *"})," cannot be saved and will revert back to the previous save state"]}),"\n",(0,i.jsx)(n.li,{children:"Do not expect tasks to run exactly when you specify. Due to the large number of users, a delay of up to 3 minutes is common while the system parses hundreds of Automations"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"run-every-15-minutes",children:"Run every 15 minutes"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.th,{children:["\u2757","  (GOVEE Rate Limit Warning) This example is API-heavy! Only use it for limited requests!"]})})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"*/15 * * * *"})}),"\n",(0,i.jsx)(n.h3,{id:"run-at-3am-daily",children:"Run at 3AM Daily"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"0 3 * * *"})}),"\n",(0,i.jsx)(n.h2,{id:"run-every-5-hours-but-only-on-the-weekend-saturday-sunday",children:"Run every 5 hours, but only on the weekend (Saturday, Sunday)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"0 */5 * * 6,7"})}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n.p,{children:["We know, it's kind of a lot! Please direct any questions to our ",(0,i.jsx)(n.a,{href:"https://discord.gg/gbmjfFe79x",children:"Discord Server"}),". ",(0,i.jsx)(n.a,{href:"/docs/upgrading",children:"Paid users"})," can also request support over email"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);