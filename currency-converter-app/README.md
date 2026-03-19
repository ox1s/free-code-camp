# Build a Currency Converter

Build an app that is functionally similar to [this example project](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lab-currency-converter/build-a-currency-converter). Try not to copy the example project, give it your own personal style.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**:

1. Your `CurrencyConverter` component should render an input element to accept the amount to be converted from.
2. Your `input` element should accept numbers.
3. Your `CurrencyConverter` component should render two `select` elements to choose the currency to convert from and to.
4. Your `select` element should include options for at least `USD`, `EUR`, `GBP`, and `JPY`. You may use any exchange rate, provided there is no one-to-one mapping between the currencies. Here are some examples of good and bad mappings:

```jsx
const badMapping = {
    USD: 1,
    EUR: 1,
    GBP: 1,
    JPY: 1
};
```

```jsx
const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};
```

5. Your `CurrencyConverter` component should memoize the calculation of the converted amounts for the from currency such that a change in the to select option will not recalculate the converted amounts.
6. Your `CurrencyConverter` component should render an element showing the converted amount in the format `XX.XX CCC`, where `XX.XX` is the converted amount and `CCC` is the currency code.
7. The converted amount should be rounded to two decimal places.

**Tests**:

Passed: 1. You should export a CurrencyConverter component.
Passed: 2. You should have one input[type="number"] element to accept the amount to be converted from.
Passed: 3. You should have two select elements.
Passed: 4. The select elements should have options for at least USD, EUR, GBP, and JPY.
Passed: 5. Changing the value of the first select element should cause the converted amounts to be recalculated.
Passed: 6. Changing the value of the second select element should not cause the converted amounts to be recalculated.
Passed: 7. Changing the value of the first select element should display the new converted amount.
Passed: 8. Changing the value of the second select element should display the new converted amount and currency.
Passed: 9. The converted amount should be displayed in the format XX.XX CCC, where XX.XX is the converted amount rounded to two decimal places and CCC is the currency code.
Passed: 10. The converted amount should be different from the input amount.