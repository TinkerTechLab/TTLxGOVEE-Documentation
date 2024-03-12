"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[304],{8320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(4848),i=r(8453);const o={sidebar_position:4},a="Integrations: Webhooks",s={id:"Integrations/webhooks",title:"Integrations: Webhooks",description:"Documentation for the POST webhooks Integration (Last Updated Feb. 2nd, 2024)",source:"@site/docs/Integrations/webhooks.md",sourceDirName:"Integrations",slug:"/Integrations/webhooks",permalink:"/docs/Integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/TinkerTechLab/TTLxGOVEE-Documentation/docs/Integrations/webhooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Integrations: iOS Client",permalink:"/docs/Integrations/ios"},next:{title:"Integrations: Time Pattern",permalink:"/docs/Integrations/time-pattern"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Postman",id:"postman",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"integrations-webhooks",children:"Integrations: Webhooks"}),"\n",(0,t.jsx)(n.p,{children:"Documentation for the POST webhooks Integration (Last Updated Feb. 2nd, 2024)"}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an ",(0,t.jsx)(n.a,{href:"https://govee.tinkertechlab.com/automations",children:"automation"}),' with "webhook" as a trigger']}),"\n",(0,t.jsx)(n.li,{children:"Be sure to copy your API key and Private key into the application you wish to use the API with before closing the modal"}),"\n",(0,t.jsxs)(n.li,{children:["In your application, create a POST HTTP request to ",(0,t.jsx)(n.code,{children:"https://govee.tinkertechlab.com/api/v1/webhook/api"})," with the following parameters:"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"}),' (Your API Key beings with "TTL-")']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public_key"})," (Your private key is provided in the Trigger setup modal with your API key)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"postman",children:"Postman"}),"\n",(0,t.jsxs)(n.p,{children:["Confused? Take a look at this ",(0,t.jsx)(n.a,{href:"https://www.postman.com/greenreader9/workspace/ttlxgovee-public-webhooks-api/overview",children:"example on postman"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Be sure to insert your full API key, and Public key! Remember to use the API key provided when you setup the trigger, don't use your GOVEE API key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-curl",children:"curl --location 'https://govee.tinkertechlab.com/api/v1/webhook/api' \\\r\n--header 'Content-Type: application/x-www-form-urlencoded' \\\r\n--data-urlencode 'api_key=TTL-' \\\r\n--data-urlencode 'public_key='\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\r\n// PHP cURL Library\r\n\r\n$api_key = \"TTL-\"; // Replace with your TTL API key\r\n$public_key = \"\"; // Replace with your public key\r\n\r\n$curl = curl_init();\r\n\r\ncurl_setopt_array($curl, array(\r\n  CURLOPT_URL => 'https://govee.tinkertechlab.com/api/v1/webhook/api',\r\n  CURLOPT_RETURNTRANSFER => true,\r\n  CURLOPT_ENCODING => '',\r\n  CURLOPT_MAXREDIRS => 10,\r\n  CURLOPT_TIMEOUT => 0,\r\n  CURLOPT_FOLLOWLOCATION => true,\r\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\r\n  CURLOPT_CUSTOMREQUEST => 'POST',\r\n  CURLOPT_POSTFIELDS => 'api_key='.$api_key.'&public_key='.$public_key,\r\n  CURLOPT_HTTPHEADER => array(\r\n    'Content-Type: application/x-www-form-urlencoded'\r\n  ),\r\n));\r\n\r\n$response = curl_exec($curl);\r\n\r\ncurl_close($curl);\r\necho $response;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\r\n// PHP Guzzle Library\r\n\r\n$api_key = \"TTL-\"; // Replace with your TTL API key\r\n$public_key = \"\"; // Replace with your public key\r\n\r\n$client = new Client();\r\n$headers = [\r\n  'Content-Type' => 'application/x-www-form-urlencoded'\r\n];\r\n$options = [\r\n'form_params' => [\r\n  'api_key' => $api_key,\r\n  'public_key' => $public_key\r\n]];\r\n$request = new Request('POST', 'https://govee.tinkertechlab.com/api/v1/webhook/api', $headers);\r\n$res = $client->sendAsync($request, $options)->wait();\r\necho $res->getBody();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Python",children:'# Python http.client Library\r\n\r\nimport http.client\r\n\r\napi_key = "TTL-"  # Replace with your TTL API key\r\npublic_key = ""   # Replace with your public key\r\n\r\nconn = http.client.HTTPSConnection("govee.tinkertechlab.com")\r\n\r\npayload = f\'api_key={api_key}&public_key={public_key}\'\r\nheaders = {\r\n    \'Content-Type\': \'application/x-www-form-urlencoded\'\r\n}\r\n\r\nconn.request("POST", "/api/v1/webhook/api", payload, headers)\r\nres = conn.getresponse()\r\ndata = res.read()\r\n\r\nprint(data.decode("utf-8"))\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Python",children:"# Python requests Library\r\n\r\nimport requests\r\n\r\napi_key = \"TTL-\"  # Replace with your TTL API key\r\npublic_key = \"\"   # Replace with your public key\r\n\r\nurl = \"https://govee.tinkertechlab.com/api/v1/webhook/api\"\r\n\r\npayload = f'api_key={api_key}&public_key={public_key}'\r\nheaders = {\r\n    'Content-Type': 'application/x-www-form-urlencoded'\r\n}\r\n\r\nresponse = requests.post(url, headers=headers, data=payload)\r\n\r\nprint(response.text)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:'// C# HTTPClient\r\n\r\nvar apiKey = "TTL-"; // Replace with your TTL API key\r\nvar publicKey = ""; // Replace with your public key\r\n\r\nvar client = new HttpClient();\r\nvar request = new HttpRequestMessage(HttpMethod.Post, "https://govee.tinkertechlab.com/api/v1/webhook/api");\r\n\r\nvar collection = new List<KeyValuePair<string, string>>();\r\ncollection.Add(new KeyValuePair<string, string>("api_key", apiKey));\r\ncollection.Add(new KeyValuePair<string, string>("public_key", publicKey));\r\n\r\nvar content = new FormUrlEncodedContent(collection);\r\nrequest.Content = content;\r\n\r\nvar response = await client.SendAsync(request);\r\nresponse.EnsureSuccessStatusCode();\r\n\r\nConsole.WriteLine(await response.Content.ReadAsStringAsync());\r\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'// Swift URLSession\r\n\r\nimport Foundation\r\n\r\nlet apiKey = "TTL-" // Replace with your TTL API key\r\nlet publicKey = ""  // Replace with your public key\r\n\r\nlet parameters = "api_key=\\(apiKey)&public_key=\\(publicKey)"\r\nlet postData = parameters.data(using: .utf8)\r\n\r\nvar request = URLRequest(url: URL(string: "https://govee.tinkertechlab.com/api/v1/webhook/api")!, timeoutInterval: Double.infinity)\r\nrequest.addValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")\r\n\r\nrequest.httpMethod = "POST"\r\nrequest.httpBody = postData\r\n\r\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\r\n    guard let data = data else {\r\n        print(String(describing: error))\r\n        return\r\n    }\r\n    print(String(data: data, encoding: .utf8)!)\r\n}\r\n\r\ntask.resume()\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);