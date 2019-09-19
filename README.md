# Date validator

fonction de validation de date.

## Installation

```
npm i @fzed51/date-validator
```

## Utilisation

```ts
import { dateValidator } from "@fzed51/date-validator";

console.log(
  dateValidator({
    day: 19,
    month: 10
  })
); // true

console.log(
  dateValidator({
    month: 10,
    year: 2010
  })
); // true

console.log(
  dateValidator({
    day: 19,
    month: 10,
    year: 2010
  })
); // true

console.log(
  dateValidator({
    day: 30,
    month: 2
  })
); // false

console.log(
  dateValidator({
    day: 30,
    month: 3
  })
); // true

console.log(
  dateValidator({
    day: 29,
    month: 2,
    year: 2001
  })
); // false

console.log(
  dateValidator({
    day: 29,
    month: 2,
    year: 2000
  })
); // true
```
