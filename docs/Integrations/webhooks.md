---
sidebar_position: 4
---

# Integrations: Webhooks

Documentation for the POST webhooks Integration (Last Updated Feb. 2nd, 2024)

## Getting Started

- Create an [automation](https://govee.tinkertechlab.com/automations) with "webhook" as a trigger
- Be sure to copy your API key and Private key into the application you wish to use the API with before closing the modal
- In your application, create a POST HTTP request to `https://govee.tinkertechlab.com/api/v1/webhook/api` with the following parameters:
 - `api_key` (Your API Key beings with "TTL-")
 - `public_key` (Your private key is provided in the Trigger setup modal with your API key)


## Postman

Confused? Take a look at this [example on postman](https://www.postman.com/greenreader9/workspace/ttlxgovee-public-webhooks-api/overview).


## Examples

Be sure to insert your full API key, and Public key! Remember to use the API key provided when you setup the trigger, don't use your GOVEE API key


```curl
curl --location 'https://govee.tinkertechlab.com/api/v1/webhook/api' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'api_key=TTL-' \
--data-urlencode 'public_key='
```


```php
<?php
// PHP cURL Library

$api_key = "TTL-"; // Replace with your TTL API key
$public_key = ""; // Replace with your public key

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://govee.tinkertechlab.com/api/v1/webhook/api',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => 'api_key='.$api_key.'&public_key='.$public_key,
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/x-www-form-urlencoded'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

```php
<?php
// PHP Guzzle Library

$api_key = "TTL-"; // Replace with your TTL API key
$public_key = ""; // Replace with your public key

$client = new Client();
$headers = [
  'Content-Type' => 'application/x-www-form-urlencoded'
];
$options = [
'form_params' => [
  'api_key' => $api_key,
  'public_key' => $public_key
]];
$request = new Request('POST', 'https://govee.tinkertechlab.com/api/v1/webhook/api', $headers);
$res = $client->sendAsync($request, $options)->wait();
echo $res->getBody();
```


```Python
# Python http.client Library

import http.client

api_key = "TTL-"  # Replace with your TTL API key
public_key = ""   # Replace with your public key

conn = http.client.HTTPSConnection("govee.tinkertechlab.com")

payload = f'api_key={api_key}&public_key={public_key}'
headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

conn.request("POST", "/api/v1/webhook/api", payload, headers)
res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```Python
# Python requests Library

import requests

api_key = "TTL-"  # Replace with your TTL API key
public_key = ""   # Replace with your public key

url = "https://govee.tinkertechlab.com/api/v1/webhook/api"

payload = f'api_key={api_key}&public_key={public_key}'
headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

response = requests.post(url, headers=headers, data=payload)

print(response.text)
```


```C#
// C# HTTPClient

var apiKey = "TTL-"; // Replace with your TTL API key
var publicKey = ""; // Replace with your public key

var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Post, "https://govee.tinkertechlab.com/api/v1/webhook/api");

var collection = new List<KeyValuePair<string, string>>();
collection.Add(new KeyValuePair<string, string>("api_key", apiKey));
collection.Add(new KeyValuePair<string, string>("public_key", publicKey));

var content = new FormUrlEncodedContent(collection);
request.Content = content;

var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();

Console.WriteLine(await response.Content.ReadAsStringAsync());

```


```swift
// Swift URLSession

import Foundation

let apiKey = "TTL-" // Replace with your TTL API key
let publicKey = ""  // Replace with your public key

let parameters = "api_key=\(apiKey)&public_key=\(publicKey)"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://govee.tinkertechlab.com/api/v1/webhook/api")!, timeoutInterval: Double.infinity)
request.addValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")

request.httpMethod = "POST"
request.httpBody = postData

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    guard let data = data else {
        print(String(describing: error))
        return
    }
    print(String(data: data, encoding: .utf8)!)
}

task.resume()
```