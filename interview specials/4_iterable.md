# JavaScript Iterables & Iterators

## Introduction

Consider the following code.

```javascript
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}
```

Output

```
10
20
30
```

Question:

> How does `for...of` know how to move from one element to the next?

Does JavaScript use pointer arithmetic like C?

**Answer:**

No.

JavaScript completely hides memory addresses.

Instead of using pointer arithmetic, JavaScript uses an **Iterator**.

---

# C vs JavaScript Traversal

### C

Traversal happens using pointer arithmetic.

```
arr

↓

Address

↓

Address + sizeof(type)

↓

Next Element
```

The CPU literally moves through memory addresses.

---

### JavaScript

Traversal happens using an **Iterator**.

```
Iterable

↓

Creates Iterator

↓

Iterator.next()

↓

Iterator.next()

↓

Iterator.next()

↓

done = true
```

No pointer arithmetic is exposed to the programmer.

---

# What is an Iterable?

An **Iterable** is any object capable of producing an **Iterator**.

Examples:

- Array
- String
- Map
- Set

All of these work with

```javascript
for...of
```

because they implement the **Iterable Protocol**.

---

# Symbol.iterator

Every iterable secretly contains a method whose key is

```javascript
Symbol.iterator
```

Remember:

`Symbol.iterator` is **not** a string.

It is a built-in Symbol provided by JavaScript.

A simplified representation of an array is

```javascript
arr = {

    0: 10,
    1: 20,
    2: 30,

    length: 3,

    [Symbol.iterator]: function () {

        // returns an iterator

    }

}
```

---

# Understanding

```javascript
arr[Symbol.iterator]
```

Notice there are **no parentheses**.

This returns the function itself.

Just like

```javascript
arr.push
```

returns the `push` function.

---

Now,

```javascript
arr[Symbol.iterator]()
```

calls that hidden function.

The function returns an **Iterator object**.

---

# Assignment

```javascript
const iterator = arr[Symbol.iterator]();
```

Internally,

JavaScript performs

```
Array

↓

Call Symbol.iterator()

↓

Returns

Iterator Object

↓

Store inside

iterator
```

The variable

```javascript
iterator
```

does **not** contain

- an array
- a pointer
- an index

It contains an **Iterator object**.

---

# What is an Iterator?

An **Iterator** is an object returned by

```javascript
iterable[Symbol.iterator]()
```

Its job is to remember the current traversal position and produce one value at a time.

An iterator mainly exposes

```javascript
next()
```

---

## Important Clarification

During explanation, we imagined

```javascript
currentIndex
```

inside the iterator.

This was only a **mental model**.

JavaScript does **not** expose a property named

```javascript
currentIndex
```

Internally,

the iterator stores its traversal position using hidden internal slots.

So it is more accurate to say

> The iterator internally remembers the current traversal position.

---

# What does next() return?

Calling

```javascript
iterator.next()
```

does **not** return the next value directly.

It returns an **Iteration Result Object**.

Example

```javascript
iterator.next();
```

returns

```javascript
{
    value: 10,
    done: false
}
```

Notice:

The returned object is **not** another iterator.

It is simply the result of one iteration.

---

# Iteration Result Object

Structure

```javascript
{
    value: ...,
    done: ...
}
```

### value

Current element.

### done

Whether iteration has finished.

---

# Why doesn't next() simply return the value?

Imagine

```javascript
const arr = [10, undefined, 30];
```

Suppose

```javascript
next()
```

returned only

```javascript
undefined
```

JavaScript would not know whether

- the array element actually is `undefined`
- iteration has completed

Therefore,

JavaScript separates these two concepts.

Example

```javascript
{
    value: undefined,
    done: false
}
```

means

> There is a next element, and that element is `undefined`.

Whereas

```javascript
{
    value: undefined,
    done: true
}
```

means

> Iteration has completed.

---

# Step-by-Step Execution

```javascript
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();
```

Nothing has been read yet.

---

### First

```javascript
iterator.next();
```

returns

```javascript
{
    value: 10,
    done: false
}
```

---

### Second

```javascript
iterator.next();
```

returns

```javascript
{
    value: 20,
    done: false
}
```

---

### Third

```javascript
iterator.next();
```

returns

```javascript
{
    value: 30,
    done: false
}
```

Notice

Even for the **last element**,

```javascript
done
```

is still

```javascript
false
```

This is a common interview question.

---

### Fourth

```javascript
iterator.next();
```

returns

```javascript
{
    value: undefined,
    done: true
}
```

Now iteration has completed.

---

### Fifth

```javascript
iterator.next();
```

returns

```javascript
{
    value: undefined,
    done: true
}
```

again.

An exhausted iterator does **not** throw an error.

It simply continues returning

```javascript
{
    value: undefined,
    done: true
}
```

---

# Internal Workflow of for...of

When JavaScript sees

```javascript
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}
```

It conceptually performs something similar to

```javascript
const iterator = arr[Symbol.iterator]();

while (true) {

    const result = iterator.next();

    if (result.done) {
        break;
    }

    console.log(result.value);

}
```

This is **not** the actual engine implementation,

but it accurately represents the workflow.

---

# Complete Internal Flow

```
Array

↓

Call

arr[Symbol.iterator]()

↓

Iterator Object created

↓

Store in variable

↓

iterator.next()

↓

{
    value:10,
    done:false
}

↓

Use value

↓

iterator.next()

↓

{
    value:20,
    done:false
}

↓

Use value

↓

iterator.next()

↓

{
    value:30,
    done:false
}

↓

Use value

↓

iterator.next()

↓

{
    value:undefined,
    done:true
}

↓

Loop Stops
```

---

# Understanding Symbol.iterator

Without parentheses

```javascript
arr[Symbol.iterator]
```

returns

```
Function
```

Exactly like

```javascript
arr.push
```

returns the push function.

---

With parentheses

```javascript
arr[Symbol.iterator]()
```

JavaScript

- calls the function
- creates a new iterator
- returns that iterator

---

# What does the iterator variable actually contain?

Example

```javascript
const iterator = arr[Symbol.iterator]();
```

Conceptually,

```
iterator

↓

Iterator Object

↓

next()
```

If printed in Chrome,

it appears similar to

```
Array Iterator {}
```

---

# Common Misconception

The iterator itself is **not**

- an array
- a pointer
- an index

It is simply an object responsible for producing values sequentially.

---

# Tricky Interview Questions

---

## Question 1

Predict the output.

```javascript
const arr = [10, 20];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next().value);

console.log(iterator.next().done);

console.log(iterator.next());

console.log(iterator.next());
```

### Correct Answer

First

```javascript
iterator.next()
```

returns

```javascript
{
    value:10,
    done:false
}
```

Therefore

```
10
```

is printed.

---

Second

```javascript
iterator.next()
```

returns

```javascript
{
    value:20,
    done:false
}
```

Since

```javascript
.done
```

is requested,

the output becomes

```
false
```

---

Third

```javascript
iterator.next()
```

returns

```javascript
{
    value:undefined,
    done:true
}
```

---

Fourth

Again

```javascript
{
    value:undefined,
    done:true
}
```

No error occurs.

---

## Question 2

Does the iterator contain a property named

```javascript
currentIndex
```

### Correct Answer

No.

`currentIndex` was used only as a learning model.

Internally,

JavaScript stores traversal state using hidden internal slots.

---

## Question 3

When does

```javascript
done
```

become

```javascript
true
```

### Correct Answer

Not when returning the last element.

The last valid element is returned as

```javascript
{
    value: lastElement,
    done: false
}
```

Only after attempting to move **beyond** the last element does JavaScript return

```javascript
{
    value: undefined,
    done: true
}
```

---

## Question 4

Why doesn't

```javascript
next()
```

return only the value?

### Correct Answer

Because an iterable may legitimately contain

```javascript
undefined
```

as one of its elements.

Using

```javascript
done
```

separates

- a valid value of `undefined`
- the end of iteration

---

# Questions Asked During Learning

### Q1

How does `for...of` know to move through an array?

**Answer**

The iterable creates an iterator using

```javascript
Symbol.iterator
```

The iterator's

```javascript
next()
```

method returns one value at a time until

```javascript
done
```

becomes

```javascript
true
```

---

### Q2

What does

```javascript
Reflectively,

const iterator = arr[Symbol.iterator]();
```

actually do?

**Answer**

It calls the array's hidden

```javascript
Symbol.iterator
```

method.

That method creates and returns a new Iterator object.

The variable stores that Iterator object.

---

### Q3

What does

```javascript
arr[Symbol.iterator]
```

return?

**Answer**

The iterator function itself.

No iterator is created until parentheses

```javascript
()
```

are used.

---

### Q4

What does

```javascript
iterator.next()
```

return?

**Answer**

An Iteration Result Object.

```javascript
{
    value: ...,
    done: ...
}
```

---

### Q5

What is an Iterator?

**Refined Answer**

An Iterator is an object returned by an iterable's

```javascript
Symbol.iterator()
```

method.

It internally remembers the traversal position and provides a

```javascript
next()
```

method that returns an Iteration Result Object containing

```javascript
value
```

and

```javascript
done
```

until iteration is complete.

---

# Key Takeaways

- `for...of` works with iterables.
- Every iterable implements `Symbol.iterator`.
- `Symbol.iterator()` returns an Iterator object.
- The iterator exposes `next()`.
- `next()` returns an Iteration Result Object.
- The Iteration Result Object contains `value` and `done`.
- `done` becomes `true` only after moving beyond the last element.
- An exhausted iterator continues returning

```javascript
{
    value: undefined,
    done: true
}
```

- `for...of` repeatedly calls `next()` until `done` becomes `true`.