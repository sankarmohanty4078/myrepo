//fetch() is a browser-provided Web API used to make HTTP requests to servers.
// Ex:Login,Register,Load products,Weather data,GitHub user details,Movie information
// Instead of refreshing the whole webpage, JavaScript requests data in the background.
//Syntax : fetch(url) , Ex: fetch("https://api.github.com/users/octocat");
//fetch() returns a Promise that resolves to the Response object representing the response to the request.
console.log("A");

fetch(url).then(() => console.log("B"));
//promise callback is sent to microtask queue

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");
//o/p: A D B C

//interview Q:Does fetch() reject on HTTP 404 or 500? ans :No
fetch("/wrong-url")
  .then((res) => console.log(res.status))
  .catch((err) => console.log(err)); //question is will catch run??ans : No
//Because the network request itself succeeded.
// The browser successfully contacted the server.The server simply replied : 404
// A response was received.So Promise Fulfilled not rejected.
//When does fetch reject?
// Only when a network-level failure occurs.
// Examples:
// Internet disconnected,DNS failure,Server unreachable
// Request aborted (AbortController),CORS/network failure
// Then .catch() runs.

/*
Output of a fetch()
is a Response Object
The Promise returned by fetch() resolves to a Response object, not directly to your JSON data.
Example:
fetch(url)
.then(response => {
    console.log(response);
});

response contains information like:
response.status
response.ok
response.headers
response.url
response.type
*/

//Response.ok??
// response.ok returns : true for status codes 200-299 Otherwise false
// Example
// if(!response.ok){
//     throw new Error("Request Failed");
// }
// This is the recommended way to handle HTTP errors.

/*
Imagine you request a GitHub user
fetch("https://api.github.com/users/octocat")
The GitHub server sends back something like:
{
  "login": "octocat",
  "id": 583231,
  "followers": 18000
}
The server does NOT send this JavaScript object.It sends raw bytes over the internet.
Something like: 01101011 00110100 101010...
Computers communicate using bytes (binary data), not JavaScript objects.
Why not directly give us the object?
Imagine downloading a 2 GB movie.
Should the browser wait until all 2 GB arrive before giving JavaScript anything?
That would be inefficient. Instead, the browser starts receiving data chunk by chunk.
Example:Chunk 1
Chunk 2
Chunk 3
Chunk 4
...
This continuous flow is called a stream.So the response body isn't a ready-made object.
It's a stream of incoming bytes.
*/

/*
Then what does response.json() do?This is the key.
When you write: const data = await response.json();
JavaScript does something like this internally:
Step 1 Read all bytes from the stream.
011010...
011001...
110101...
...
Step 2 Convert those bytes into text.
{
   "login":"octocat",
   "id":583231
}
↓
Step 3 Run JSON.parse() internally.
↓
Now you finally get:
{
   login: "octocat",
   id: 583231
}
a real JavaScript object.
That's why response.json() returns a Promise Because reading the stream takes time.
Imagine downloading a 500 MB JSON file. JavaScript cannot block the browser while reading it.
So: await response.json(); means:
"Read the entire stream, convert it into text, parse the JSON, then give me the JavaScript object."
*/

/*
Q)Why are there two awaits? This should finally make perfect sense now.
const response = await fetch(url); Waits for:
Server responded
You receive the sealed package (Response).
Then
const data = await response.json();
Waits for:
Open package -> Read every byte -> Convert bytes → text -> Parse JSON -> Return JavaScript object
*/

// fetch() → Get the HTTP response (headers + body stream).
// response.json() → Consume the body stream and convert it into a JavaScript object.

const response = await fetch(url);
await response.json();
await response.json(); // ❌ Error
// Because the stream has already been consumed.
