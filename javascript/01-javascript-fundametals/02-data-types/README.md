# Data Types in JavaScript

This folder contains notes and examples related to how JavaScript handles data and types.

The focus is on understanding how values behave, how types change, and common edge cases that can cause confusion.

---

## Files in this folder

### 1. 01-data-types.js

Covers basic classification of data types:

* Primitive types
  string, number, boolean, null, undefined, symbol, bigint
* Reference types
  arrays, objects, functions

Also explains:

* Copy by value vs copy by reference
* How changes affect variables differently

---

### 2. 02-dynamic-typing.js

Explains how JavaScript is dynamically typed:

* A variable can hold different types at different times
* Type depends on the value, not the variable

Also includes:

* Difference between static typing and dynamic typing
* Use of `typeof`
* Common quirks like `typeof null`

---

### 3. 03-type-coercion.js

Covers automatic type conversion in JavaScript:

* String and number operations
* Behavior of `+` vs other operators
* Implicit conversions

Also includes:

* Truthy and falsy values
* Common interview cases
* Differences between `null`, `undefined`, and `NaN`


## Key Takeaways

* Primitive values are copied by value, reference types are copied by reference
* JavaScript is dynamically typed, types are decided at runtime
* Type coercion can lead to unexpected results if not understood properly

---

## Note

These notes are written while learning and will be improved over time as understanding becomes deeper.
