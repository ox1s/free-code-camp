# SuperheroForm

## Step 1

In this workshop, you'll learn how to work with forms in React by building a superhero application form.

Some boilerplate has been provided, you just need to create the rest of the React component.

Begin by returning a div element with a className of form-wrap. Inside the div, create an h2 element with the text Superhero Application Form. Below that, create a p element with the text Please complete all fields.

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
    </div>
  );
};
```

## Step 2

Before building out the form itself, you will create the state variables you need. They are heroName, realName, powerSource, and powers.

For now, create the variables and setters for heroName and realName. Both should have an initial value of empty strings.

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
    </div>
  );
};
```

## Step 3

Now, create the state variables and setters for powerSource and powers. powerSource should have an initial value of empty string, and powers should have an initial value of an empty array.

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
    </div>
  );
};
```

## Step 4

Below the paragraph, create a form element. Within it, add a div with a className of section.

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className="section"></div>
      </form>
    </div>
  );
};
```

## Step 5

Time to create the labels and inputs. In the form, create a label with the text Hero Name and an input element of type text inside it.

Connect the input for Hero Name to the heroName state variable by giving it a value attribute set to heroName.

```jsx
<label>
  Hero Name
  <input type="text" value={heroName} />
</label>
```

## Step 6

You may notice you can't type in the input. If you open up the console you will see a warning.

To remove the warning and fix the input typing issue, use the onChange event to update heroName. The value for the onChange event should be an arrow function with e for the parameter. The arrow function should implicitly return setHeroName(e.target.value).

```jsx
<div className="section">
  <label>
    Hero Name
    <input
      type="text"
      value={heroName}
      onChange={(e) => setHeroName(e.target.value)}
    />
  </label>
</div>
```

## Step 7

Create another label with the text Real Name and an input of type password within it. Give the input a value of realName.

Then use the onChange event to update realName in the same way you updated heroName.

```jsx
<label>
  Real Name
  <input
    type="password"
    value={realName}
    onChange={(e) => setRealName(e.target.value)}
  />
</label>
```

## Step 8

Next, create a label with the className of section and column, and the text How did you get your powers?. Inside the label, create a select element.

```jsx
<label className="section column">
  How did you get your powers?
  <select></select>
</label>
```

## Step 9

Inside your select element, you need to create options for the user to choose as their power source. The select should have seven options listed below:
Power Source
Select one
Bitten by a strange creature
Radioactive exposure
Science experiment
Alien heritage
Ancient artifact discovery
Other

The first option (Select one) should have an empty string as its value attribute (i.e., value=''). This acts as a placeholder in the UI.

```jsx
<label className="section column">
  How did you get your powers?
  <select>
    <option value="">Select one</option>
    <option>Bitten by a strange creature</option>
    <option>Radioactive exposure</option>
    <option>Science experiment</option>
    <option>Alien heritage</option>
    <option>Ancient artifact discovery</option>
    <option>Other</option>
  </select>
</label>
```

## Step 10

To account for the setter function, you will have to attach a value attribute and an onChange event to the select and a value attribute to each of the option elements.

That's a long process, right? So the best way to handle this is to have an array of the option values and map over it to create the option elements.

A powerSourceOptions array has been added at the top of your component. Give it a look.

For now, remove all the options inside the select element except for the first one. In the next step you will map over the array.

```jsx
const { useState } = React;

export const SuperheroForm = () => {
  const powerSourceOptions = [
    "Bitten by a strange creature",
    "Radioactive exposure",
    "Science experiment",
    "Alien heritage",
    "Ancient artifact discovery",
    "Other",
  ];

  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className="section">
          <label>
            Hero Name
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
          </label>
          <label>
            Real Name
            <input
              type="password"
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
            />
          </label>
        </div>
        <label className="section column">
          How did you get your powers?
          <select>
            <option value="">Select one</option>
          </select>
        </label>
      </form>
    </div>
  );
};
```

## Step 11

In a prior lesson, you learned how to render a list of options using the map() method like this:
Example Code

```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}
```

Remember that the key must always be unique. It helps React identify which items have changed, and been added or removed.

After the first option, use an arrow function to map through the powerSourceOptions array using source as the parameter.

Then inside the map() method, create an option element with a key of source and a value of source. Lastly, use {source} to display the name of each power source in the dropdown.

```jsx
<select>
  <option value="">Select one</option>
  {powerSourceOptions.map((source) => (
    <option key={source} value={source}>
      {source}
    </option>
  ))}
</select>
```

## Step 12

The values of the powerSourceOptions now show up as the options for the select element.

Now, use powerSource as the value of the select element. Then, set up an onChange handler using an arrow function that takes e as the parameter and implicitly returns setPowerSource(e.target.value).

```jsx
<select value={powerSource} onChange={(e) => setPowerSource(e.target.value)}>
  <option value="">Select one</option>
  {powerSourceOptions.map((source) => (
    <option key={source} value={source}>
      {source}
    </option>
  ))}
</select>
```

## Step 13

The next input is a checkbox to mark all super hero powers that apply to the user.

Create a label element with a className of section and column, and the text of List your powers (select all that apply):.

```jsx
<label className="section column">
  List your powers (select all that apply):
</label>
```

## Step 14

There will be six checkboxes, so it's also best to create an array for them and map through them to display them as checkboxes. For that, a powersOptions array has been provided for you.

Use an arrow function to map through the powersOptions array using parameter of power. Inside the map, create a label element with a key of power, and a text of Hello.

After that, you should see six Hello text. You will fill in the elements of the array in the next step.

```jsx
{
  powersOptions.map((power) => <label key={power}>Hello</label>);
}
```

## Step 15

Remove the Hello text inside the label, then create an input of type checkbox and a value of power.

Finally, display the values from the array next to each checkbox by creating a span element just before the closing label with a text content of {power}.

```jsx
{
  powersOptions.map((power) => (
    <label key={power}>
      <input type="checkbox" value={power} />
      <span>{power}</span>
    </label>
  ));
}
```

## Step 16

To mark the checkboxes, add a checked attribute to the checkbox input. Use the includes method to verify if the current power is in the powers array.

The onChange will be a separate function, set it to handlePowersChange for now. This will lead to an error you will fix in the next step.

```jsx
<input
  type="checkbox"
  value={power}
  checked={powers.includes(power)}
  onChange={handlePowersChange}
/>
```

## Step 17

To fix the error, create a handlePowersChange arrow function with an e parameter.

Inside the function, destructure value and checked from e.target to get the value of the checkbox and whether it is checked or not.

```jsx
const handlePowersChange = (e) => {
  const { value, checked } = e.target;
};
```

## Step 18

Below the destructured value and checked, update the list of checked powers.

Call the setPowers function, which takes an array argument. Use a ternary operator to check if checked is true. If it is, spread the existing powers array into a new array and add the value to it. If it is not true, filter out the value from powers with powers.filter(p => p !== value).

```jsx
const handlePowersChange = (e) => {
  const { value, checked } = e.target;
  setPowers(checked ? [...powers, value] : powers.filter((p) => p !== value));
};
```

## Step 19

Next, tell the form how to submit. Add a method attribute with a value of post and an action attribute with a value of https://superhero-application-form.freecodecamp.org to the form element.

Now, submitting the form will send it to that URL. You will do that in the next step.

```jsx
<form
    method="post"
    action="https://superhero-application-form.freecodecamp.org"
    >
```

## Step 20

Create a button element with the className of submit-btn and a type of submit. Give the button the text Join the League.

After you do that, try to submit the form and see what happens.

```jsx
<button className="submit-btn" type="submit">
  Join the League
</button>
```

## Step 21

Did you notice that you can submit the form without filling in the inputs?

To stop that, add the disabled attribute to disable the submit button if heroName, realName, or powerSource are falsy, or if the length of powers is 0.

Now, the button will be disabled if something isn't filled in. Fill in the form with your superhero information and submit it to join the league.

With that, your superhero application form is complete.

```jsx
<button
  className="submit-btn"
  type="submit"
  disabled={!heroName || !realName || !powerSource || powers.length === 0}
>
  Join the League
</button>
```

