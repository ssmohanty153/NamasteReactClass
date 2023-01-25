# Exploring the word - Chapter 6 - Theory

**1. What is a Microservice?**
```
A microservices architecture takes this same approach and extends it to the loosely coupled services which can be 
developed, deployed, and maintained independently. 
Each of these services is responsible for discrete task and can communicate with other services 
through simple APIs to solve a larger complex business problem.
```
**2. What is  Monolith architecture?**
```
A monolithic architecture is a traditional model of a software program, 
which is built as a unified unit that is self-contained and independent from other applications. 

```
**3. What is the difference between Monolith and Microservice?**
```
A monolithic application is built as a single unified unit while a microservices architecture is a collection of 
smaller, independently deployable services. Which one is right for you? It depends on a number of factors. 

```
**4. Why do we need a useEffect Hook?**
```
We need a useEffect when we want to call function on specific condition like when we want to fetch data when our component mounts or state value change. If dependencies arry in useEffect is [] then it will be called only when component mount on intial rendring of component. If we pass in state value in dependencies array then the function inside useEffect will be called every time the state value changes.
```
**5. What is Optional Chaining?**
```
The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
```
**6. What is Shimmer UI?**
```
Shimmer UI is a technique used in user interface (UI) design to create a "placeholder" effect, 
which is used to indicate that content is loading or being retrieved from a server. 
The effect is created by displaying a repeated pattern of UI elements, such as boxes or lines, 
that mimic the layout of the final content. 
The idea is to give users an idea of what the final content will look like while it is being loaded, rather than displaying a blank screen or a loading spinner. 
This can improve the overall user experience by providing visual cues and reducing the perception of waiting time.

```
**7. What is the difference between JS expression and JS statement**
```
In JavaScript, an expression is a piece of code that returns a value, 
while a statement is a piece of code that performs an action or a sequence of actions.
```
**8. What is Conditional Rendering, explain with a code example**
```
With conditional rendering we can render our component or part of component depending on condition.
example:
```
```javascript

const isOpen = true;

if(isOpen){
    <Popover />
} else {
    <Test />
}
```
**9. What is CORS?**
```
CORS stands for Cross-Origin Resource Sharing. 
It is a security feature implemented by web browsers that blocks web pages from making requests to a different domain than the one that served the web page. 
This is done to prevent malicious websites from making unauthorized requests on behalf of the user, 
such as stealing personal information or performing actions without the user's knowledge.

```
**10. What is async and await?**
```
async and await are keywords in JavaScript that are used to handle asynchronous code. Asynchronous code is code that runs in a non-blocking way, allowing other code to continue running while it is executing. This is in contrast to synchronous code, which runs in a blocking way, meaning that the execution of the code is stopped until the operation is completed.
```
**11. What is the use of `const json = await data.json();` in  getRestaurants()**
```
.json() is used to parse a JSON string and convert it into a JavaScript object. 
```