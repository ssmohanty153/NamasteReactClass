# Talk is cheap - show me the code - Chapter 4 - Theory


**1. Is JSX mandatory for React??**
```
No. JSX is not mandatory but using jsx it makes code more readable and maintainable. 
```

**2. Is ES6 mandatory for React?**
```
No. ES6 is not mandatory for React but using ES6 makes it easier to code in react
```

**3. What is <React.Fragment></React.Fragment> and <></>?**

```
<React.Fragment></React.Fragment> and <></> is element used in React where we want return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
```
**4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**

```
{TitleComponent} is used when we want to use variable in jsx. This variable can hold any type of value

<TitleComponent/> is component composition when you wants to call component inside another component we use it like that.

{<TitleComponent></TitleComponent>} this is same thing as above but it doesnot have self closing tag. This is used when we want to insert child into any component


```

**5. How can I write comments in JSX?**
```javascript
{
    //one line comment

    /*
    This is multi line comment
    this is how we can write multiline comment in jsx
    */
}
```
**6. What is Virtual DOM?**
```
Virtual DOM is virtual representation of UI is kept in memory 
and synced with the “real” DOM by a library such as ReactDOM. 
This process is called reconciliation.
```
**7. What is Reconciliation in React?**
```
Reconciliation is algorithum React uses behind the scene to diff one tree from other and determines what need to be changed in UI and not (reRender)
```
**8. What is React Fiber?**
```
React Fiber is a concept of ReactJS that is used to render a system faster and smoother. 
React makes coding simple as compared to other frameworks. 
After certain changes who is the next element to render the system called reconciler. 
This algorithm helps to compare two DOM trees and diff them. 
React fiber helps to do it better.
```
**9. Why we need keys in React? When do we need keys in React?**
```
Keys in React act as identifier. When we want to identify 
element from group of elements we use keys for each elements.
We use keys when we are mapping through Array or rendering multiple children
```
**10. Can we use index as keys in React?**
```
Yes we can use index as key but there is better way to assign keys by using unique value from data
```
**11. What is props in React?**
```
Props are the propeties that are passed into component or arguments/parameter passed into function
```
**12. What is a Config Driven UI ?**
```
Config driven UI is concept used to built and run app using config provided.
This can be based off location prefrence. country prefrence.
ex. Food ordering app renders their hotel list based of customer's current location this is known as config driven UI.
```