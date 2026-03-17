## Step 1

In previous lessons, you learned about handling side effects, like data fetching, with the useEffect Hook. In this workshop, you'll build an application that fetches fruit data from an API based on user input and displays the results dynamically.

First, make your FruitsSearch component return a div element with an id of search-container.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  return <div id="search-container"></div>;
}
```

## Step 2

Next, you will create a form where users can search for fruits. Inside the #search-container element, create a form element.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  return (
    <div id="search-container">
      <form></form>
    </div>
  );
}
```

## Step 3

Inside the form element, add a label element. Your label element should have the text Search for fruits: and an htmlFor attribute with the value of "search-input".

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
      </form>
    </div>
  );
}
```

## Step 4

Inside the form element, after the label, add an input with an id of search-input and a type of search.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input id="search-input" type="search" />
      </form>
    </div>
  );
}
```

## Step 5

In React, controlled inputs are a standard way to handle form data, where the input's value is synced with the component's state.
Example Code

```jsx
const MyForm = () => {
  const [name, setName] = useState("");

  return (
    <>
      <label htmlFor="name">Your name</label>
      <input type="text" value={name} id="name" />
    </>
  );
};
```

You will learn more about this pattern in a future lesson.

To track what the user types into the search input field, create a state variable named query with an initial value of an empty string (''). Also define its corresponding setter function, setQuery, using the useState Hook.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input id="search-input" type="search" />
      </form>
    </div>
  );
}
```

## Step 6

When the user types into the input field, a list of fruits should appear that match their query.

To handle this, create a state variable called results with an initial value of an empty array ([]). Also define its setter function, setResults, using the useState Hook.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input id="search-input" type="search" />
      </form>
    </div>
  );
}
```

## Step 7

Bind the input's displayed value to your React state by adding a value attribute to your search input set to the query state's value.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input id="search-input" type="search" value={query} />
      </form>
    </div>
  );
}
```

## Step 8

Add an onChange attribute to the input to capture what the user types. Set it to an arrow function that takes e as an argument. Inside the function, update the query state by passing e.target.value to the setter function, which holds the current value of the input. Here's an example:
Example Code

```jsx
<input onChange={(e) => setExample(e.target.value)} />
```

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
```

## Step 9

Next, you will need a function for when the form gets submitted. Define a handleSubmit function that accepts an event object, e, and calls e.preventDefault().

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
```

## Step 10

Pass the handleSubmit function to the onSubmit prop of the form element so the form submission can be handled correctly.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
```

## Step 11

After the form, add a div element with an id of results that will display the search results.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results"></div>
    </div>
  );
}
```

## Step 12

Inside the #results element, use a ternary operator to check if the length of results array is greater than zero. If it is, map over the items and display each one in a p element with a class of result-item. Be sure to include a key attribute with each paragraph as well.

If results it's empty, render a p element with the message No results found.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map((item) => (
            <p key={item} className="result-item">
              {item}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
```

## Step 13

Next, you will make your app get fruit names from the API when a user types in the input.

First, add a useEffect hook so that it runs whenever the query state changes. Make sure to pass an arrow function as the first argument to useEffect, and include query in the dependency array.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {}, [query]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map((item) => (
            <p key={item} className="result-item">
              {item}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
```

## Step 14

Inside the useEffect callback, add an if condition to check if query.trim() === ''. This checks if query is an empty string or contains only spaces. If so, call setResults([]) and return early.

```jsx
useEffect(() => {
  if (query.trim() === "") {
    setResults([]);
    return;
  }
}, [query]);
```

## Step 15

If query is not empty, you want to get fruits that match the user input from the API, but only after users stop typing for a short period to avoid making the fetch call too frequently.

To start, after the if statement, call setTimeout with an empty arrow function and a delay value of 700 as arguments, and store it in a variable called timeoutId. This allows you to cancel the timeout later when the effect cleans up.

```jsx
useEffect(() => {
  if (query.trim() === "") {
    setResults([]);
    return;
  }
  const timeoutId = setTimeout(() => {}, 700);
}, [query]);
```

## Step 16

Update the first argument to setTimeout to an async arrow function. This allows you to use await inside the delayed logic. Inside that function, create a try...catch block to handle any potential errors when fetching data.

```jsx
useEffect(() => {
  if (query.trim() === "") {
    setResults([]);
    return;
  }
  const timeoutId = setTimeout(async () => {
    try {
    } catch {}
  }, 700);
}, [query]);
```

## Step 17

Inside the try block, call the fetch function with the https://fruit-search.freecodecamp.rocks/api/fruits?q=${query} URL, and store the result in a variable named response. Since you're inside an async function, you should use await before fetch.

```jsx
try {
  const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
}
```

## Step 18

Next, call .json() on the response and store the result in a variable called data. Since you're still inside an async function, you should use await before response.json().

```jsx
// ...
const data = await response.json();
```

## Step 19

Now that you have the data from the API, update the results state by calling setResults and passing in an array that contains only the name property from each fruit in the data array. Use the map() method for this.

```jsx
setResults(data.map((fruit) => fruit.name));
```

## Step 20

For the catch block, add an error parameter, then use console.error to log any error that occurs while fetching or processing the data.

```jsx
catch(error) {
        console.error(error);
      }
```

## Step 21

Below your timeoutId variable, return a cleanup function that clears the timeout using clearTimeout(timeoutId). This prevents multiple delayed fetches from stacking up. Make sure your cleanup function is an arrow function with an implicit return.

And with that your Fruit Search app is complete! Try out your fruit search app by typing in the name of a fruit like apple or pear to see the results appear.

```jsx
const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`,
        );
        const data = await response.json();
        setResults(data.map((fruit) => fruit.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map((item) => (
            <p key={item} className="result-item">
              {item}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
```

