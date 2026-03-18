# Build a Shopping List App

## Step 1

In this workshop, you'll build a simple shopping list app to practice using the useMemo() and useCallback() hooks in React. You'll learn how to use these hooks to optimize the performance of your app by memoizing potentially expensive calculations and functions.

All the basic HTML and CSS you'll need has been provided for you, along with the basic structure of a React component named ShoppingList.

Within the ShoppingList component, return an empty pair of parentheses for now.

## Step 2

Within the return statement of the ShoppingList component, add a div element with a className of container.

Inside the div, nest an h1 element with the text Shopping List, and below that, nest an empty form element.

```jsx
const { useState } = React;

export const ShoppingList = () => {
  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form></form>
    </div>
  );
};
```

## Step 3

Within the form element, add a label element with the text Search for an item:. Next, give the label an htmlFor attribute set to search. This will associate the label with an input element you'll add next.

Below the label, add an input element with the type and id attributes set to search. Also, give the input a placeholder of Search..., and an aria-describedby attribute set to search-description.

Finally, add a p element below the input, and give it the text Type to filter the list below: and an id of search-description. This will provide additional context for screen readers.

```jsx
const { useState } = React;

export const ShoppingList = () => {
  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
        />
        <p id="search-description">Type to filter the list below:</p>
      </form>
    </div>
  );
};
```

## Step 4

Now that you have the basic structure of the app, it's time to add some items and get the search functionality working.

Create an array and assign it to a variable named items. Within the array, add the strings Apples, Bananas, Strawberries, Blueberries, Mangoes, Pineapple, Lettuce, Broccoli, Paper Towels, and Dish Soap. This will be the list of items that will be displayed in the app.

## Step 5

Next, you need to create a state variable, a setter function, and set the initial state with the useState() hook to store the user's input.

As a reminder, here's how to create a state variable named age, a setter function to update it named setAge, and initialize age to the number 0 with the useState() hook:
Example Code

const [age, setAge] = useState(0);

At the top of the ShoppingList component, use the useState() hook to create a state variable named query and a setter function to update it named setQuery. Initialize query to an empty string. This will be used to store the user's search input.

## Step 6

In the input element, add a value attribute and set it to the query state variable. This will allow the input field to display the current value of query. Also, remember that you need to use curly braces ({}) to embed JavaScript expressions like query in JSX.

Then, add an onChange event handler to the input element. Pass it an anonymous function that takes e as an argument, which is the event object. Inside the anonymous function, call setQuery() and pass it e.target.value. This will update the query state variable with the current value of the input field whenever the user types in it.

## Step 7

Create a variable named filteredItems and assign it the result of filtering the items array with the filter() method. Pass an anonymous function to the filter() method that takes item as an argument. Inside the anonymous function, just return item for now.

## Step 8

While you're not really filtering anything yet, and filteredItems matches the items array, it would be nice to see the list of items on the page.

First, add a ul element below the p element in the form. Inside the unordered list, use the map() method to iterate over the filteredItems array, and pass an anonymous function to it. The anonymous function should take item as an argument, and return an li element for each item. Each li should display the item text.

## Step 9

If you check the console, you'll see a warning about a missing key prop. This is because React needs a unique key for each element in a list to help it identify which items have changed, are added, or are removed. It is also important for performance reasons.

To fix this, add a key prop to the li element inside the map() method. Set the key to the value of item. Generally, you should use a unique identifier like an id as the key, but since the items are all unique strings, you can use the string itself in this case.

## Step 10

Now it's time to finish the search functionality.

The search input should be case-insensitive, and should also match partial strings. For example, if a user types in app, it should match both Apples and Pineapples. This is because the lowercase version of app is a substring of the lowercase version of both Apples and Pineapples.

First, inside the filter() method, use the toLowerCase() method to convert item into a lowercase string.

## Step 11

Next, use the includes() method to check if the lowercase version of item includes the lowercase version of query as a substring.

For example, here's how to use the toLowerCase() and includes() methods to check if the string freeCodeCamp includes code:
Example Code

const str1 = "freeCodeCamp";
const str2 = "code";
str1.toLowerCase().includes(str2.toLowerCase()); // true

Chain the includes() method to the lowercase item and check if it includes the lowercase query. Remember to lowercase query as well.

## Step 12

Now the search input should work as expected, and filter the shopping list based on the user's input.

Next, we'll add a way to check off items in the list so users can keep track of what they've already purchased.

To do this, we'll need another state variable and a setter function. Use the useState hook to create a state variable named selectedItems and a setter function named setSelectedItems. Initialize selectedItems as an empty array. This array will store the items the user has selected, and we'll apply some styling to those selected items later.

## Step 13

Create a function named toggleItem that takes item as an argument.

Inside the function, just call the setSelectedItems() function for now. We'll come back a bit later to implement the logic to toggle selected items.

## Step 14

Within the li element, above the item text, add an input element with the type attribute set to checkbox. Also, set its onChange attribute to an anonymous function that calls toggleItem() with item as an argument.

Finally, wrap the input and the item text in a label element for better accessibility.

## Step 15

Back to the toggleItem() function.

If you recall from a past lesson, you can compare past and present states in React, and use that to determine an upcoming state. In this case, you'll use the past and present states to either add or remove items from the selectedItems array.

First, call the setSelectedItems() function, and pass it an anonymous function as an argument. This anonymous function should take prev as an argument, which is the previous state of selectedItems.

Inside the anonymous function, use the includes method to check if prev includes item and return the result.

## Step 16

Rather than just returning prev.includes(item), return a ternary operator with prev.includes(item) as the condition. Just return null for both cases for now.

## Step 17

For the truthy condition, if prev includes item, return a filtered array with item removed.

Chain the filter() method to prev and pass it an anonymous function that takes i as an argument. Inside the function, check that i is not strictly equal to item. This will return a new array with all items except item.

## Step 18

For the falsy condition, use the spread operator to return a copy of the prev array with item appended to the end. This will add item to the selectedItems array.

## Step 19

Now you'll work on some logic to cross off any selected items on the list.

First off, since everything inside of this filteredItems.map() call is being implicitly returned, wrap all the code within it in curly braces, and return the li element explicitly.

For example, here's how you would do this with a simple component that renders a list of names:
Example Code

```jsx
const names = ["Abbey", "Beau", "Quincy"];

const NameList = () => {
  return (
    <ul>
      {names.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};
```

## Step 20

Before the return statement within the filteredItems.map() call, create a variable called isChecked and use the includes() method to check if the current item is in the selectedItems array.

Then, add a style prop to the li element, and use a ternary operator to set the textDecoration property to line-through if isChecked is true, or none if it is false. Remember that you need to wrap the ternary operator in curly braces since it's a JavaScript expression.

For example, here's how you can use a ternary operator to conditionally set the color of a paragraph in a simple component:
Example Code

```jsx
const MyComponent = () => {
  const isActive = true;

  return (
    <p style={{ color: isActive ? "green" : "black" }}>
      This text is conditionally styled.
    </p>
  );
};
```

```jsx
const isChecked = selectedItems.includes(item);
return (
  <li
    key={item}
    style={{
      textDecoration: isChecked ? "line-through" : "none",
    }}
  >
    <label>
      <input type="checkbox" onChange={() => toggleItem(item)} />
      {item}
    </label>
  </li>
);
```

## Step 21

Then, in the checkbox input element, add a checked attribute and set it to isChecked. While it's not strictly necessary to set the checked attribute, it's a good practice to ensure that each checkbox reflects the current state of the selectedItems array.

## Step 22

Your app works! Go ahead and test it out.

However, it's not as efficient as it could be. While React is already very performant, there are some cases where it can be better to cache the results of potentially expensive calculations, or to ensure that functions are not recreated on every render.

We'll improve the performance of your app over the following steps. But first, let's add some logging so you can see the lifecycle of this component more clearly.

Above filteredItems, add a console.log() statement that logs the string Filtering items... to the console.

## Step 23

Now you will see Filtering items... in the console every time you type in the search bar and check or uncheck an item. This is because those actions update the state of the component, which causes it to re-render.

This isn't usually a problem. But if you have a lot of items in the list, or if you're fetching a lot of data from an API and manipulating it, your app can feel slow.

To improve performance, you can use the useMemo() hook to memoize, or in other words, cache, the result of the filtering operation. Then, React will only re-run the filtering operation when its dependency changes, rather than on every render.

First, destructure the useMemo() hook from React at the top of your file.

## Step 24

useMemo() takes two arguments: a function that returns the value you want to memoize, and an array of dependencies. The memoized value will only be recomputed when one or more of its dependencies change.

Here's the basic syntax for useMemo():
Example Code

```jsx
const memoizedValue = useMemo(() => {
  // Some expensive calculation
  return value;
}, [dependency1, dependency2]);
```

Set filteredItems equal to useMemo(), and pass it an anonymous function with curly braces. Inside the curly braces, use a return statement to explicitly return your existing filtering logic. Also, add query as the only dependency in the dependencies array. This ensures that the filtering operation is only re-run when query changes.

## Step 25

Finally, move your console.log() statement inside the useMemo() callback function, just above the return statement.

## Step 26

Another thing React does each time it re-renders a component is recreate the functions inside of it. Here, every time you check or uncheck an item, the toggleItem() function is recreated. This is not a problem in most cases, but can lead to performance issues in larger apps.

Let's add some logging to track this.

Above the ShoppingList component, use let to create a variable named prevToggleItem and set it to null. You'll use this to track the function definition of toggleItem() across renders.

## Step 27

Next, write an if statement to check if prevToggleItem is not strictly equal to toggleItem. If they are not equal, log the string New toggleItem function to the console. Then, set prevToggleItem equal to toggleItem.

## Step 28

Now that you can see when the toggleItem() function definition is first set or changes, you should also log when the function is the same across renders.

Add an else statement to the if statement you just wrote. Inside the else block, log the string Current toggleItem function to the console.

## Step 29

If you use the app now, you'll see that the toggleItem() function is recreated every time you check or uncheck an item, or type in the search bar.

To improve performance, you can use the useCallback() hook to memoize or cache the toggleItem() function. Then React will only recreate the function when its dependencies change.

First, destructure the useCallback() hook from React at the top of your file.

## Step 30

The useCallback() hook takes two arguments: a function and an array of dependencies. The function will only be recreated if one of the dependencies changes.

Here's the basic syntax for useCallback():
Example Code

```jsx
const memoizedCallback = useCallback(() => {
  // Your function logic
  return value;
}, [dependency1, dependency2]);
```

Set toggleItem equal to useCallback(), and pass it an anonymous function that takes item as an argument. Move your existing toggleItem() function logic inside the anonymous function, where setSelectedItems is called. Finally, add setSelectedItems as a dependency in the dependencies array.

After that, you're done optimizing! Your app should still work the same way, but you'll only see your console logs when the query state changes or when the toggleItem() function is recreated.
