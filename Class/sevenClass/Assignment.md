**What are various ways to add images into our App? Explain with code examples**
```
1. Using regular path just like we do in html
2. By importing image and using that name constant
3. by using dynamic src usign template literal 
```
**What would happen if we do console.log(useState())?**
```
It will return two things: 1) varible which is undefined and second setter function to update the varible's value
```
**How will useEffect behave if we don't add a dependency array ?**
```
It will run on every render and re-renders.
```
**What is SPA?**
```
SPA is single page application where website or aplications that interacts with the user 
by dynamically rewriting the current page rather than loading entire new pages from a server. 
This approach avoids interruption of the user experience between successive pages, 
making the application behave more like a desktop application.
```
**What is difference between Client Side Routing and Server Side Routing?**
```
Client-side routing is when the routing is handled by JavaScript on the client-side. 
In this case, the JavaScript code intercepts clicks on links and uses 
the HTML5 history API to manipulate the browser's URL, 
allowing the application to update the page content without a full page reload.

Server-side routing is when the routing is handled by the server. In this case, 
when a user clicks on a link or enters a URL, the request is sent to the server, 
which then returns the appropriate HTML file or generates the appropriate HTML on the fly and sends it back to the client. 
The browser then renders the new content, causing a full page reload.

```
