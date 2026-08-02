# JavaScript Proxy

## What is a Proxy?

A **Proxy** is a special object that wraps another object and **intercepts (catches)** operations performed on it before they reach the original object.

Instead of interacting directly with the original object, your program interacts with the Proxy.

```
Program
   │
   ▼
 Proxy
   │
   ▼
Original Object
```

---

## Real-Life Analogy

Imagine a CEO and a secretary.

```
Visitor
   │
   ▼
Secretary (Proxy)
   │
   ▼
CEO (Original Object)
```

The secretary can:

- Allow access
- Deny access
- Modify information
- Log every visitor
- Return different information

The visitor never directly talks to the CEO.

Similarly, a Proxy sits between your code and the original object.

---

## Why do we need Proxy?

Normally,

```javascript
const user = {
    name: "Sankar",
    age: 22
};

console.log(user.name);
```

The request directly reaches the object.

Sometimes we want to:

- Validate data
- Log property access
- Prevent invalid values
- Hide sensitive information
- Automatically update UI (Vue 3)
- Monitor every object operation

A Proxy makes all of this possible.

---

# Creating a Proxy

Syntax:

```javascript
const proxy = new Proxy(target, handler);
```

Parameters:

- **target** → Original object
- **handler** → Object containing trap functions

Example:

```javascript
const user = {
    name: "Sankar",
    age: 22
};

const proxyUser = new Proxy(user, {});
```

An empty handler means:

> "Do nothing special. Behave exactly like the original object."

---

# The `get` Trap

The `get` trap runs whenever a property is **read**.

Example:

```javascript
const user = {
    name: "Sankar",
    age: 22
};

const proxyUser = new Proxy(user, {

    get(target, property) {

        console.log(property);

        return target[property];

    }

});

console.log(proxyUser.age);
```

Output:

```
age
22
```

---

## Parameters of `get`

```javascript
get(target, property)
```

### target

The original object.

```
{
    name: "Sankar",
    age: 22
}
```

### property

The property being accessed.

If we write:

```javascript
proxyUser.age
```

then

```javascript
property
```

becomes

```text
"age"
```

---

## Execution Flow

```
proxyUser.age

        │
        ▼

Proxy intercepts

        │
        ▼

get(user, "age")

        │
        ▼

console.log("age")

        │
        ▼

return user["age"]

        │
        ▼

22
```

---

## Why is `return target[property]` necessary?

Suppose we remove the return statement.

```javascript
get(target, property) {

    console.log(property);

}
```

Now,

```javascript
console.log(proxyUser.age);
```

Output:

```
age
undefined
```

Reason:

Every JavaScript function that does not explicitly return a value automatically returns:

```javascript
undefined
```

So JavaScript behaves as if we wrote:

```javascript
get(target, property){

    console.log(property);

    return undefined;

}
```

---

# Why use `proxyUser.age` instead of `user.age`?

Consider:

```javascript
proxyUser.age
```

Flow:

```
Program

    │

    ▼

Proxy

    │

    ▼

Original Object
```

Now,

```javascript
user.age
```

Flow:

```
Program

    │

    ▼

Original Object
```

The Proxy is completely bypassed.

Only operations performed on the Proxy object trigger its traps.

---

# The `set` Trap

The `set` trap runs whenever a property is assigned a new value.

Syntax:

```javascript
set(target, property, value)
```

Parameters:

- **target** → Original object
- **property** → Property being changed
- **value** → New value

---

## Example

```javascript
const user = {
    age: 22
};

const proxyUser = new Proxy(user, {

    set(target, property, value){

        console.log(property, value);

        target[property] = value;

        return true;

    }

});

proxyUser.age = 30;

console.log(user.age);
```

Output:

```
age 30
30
```

---

## Execution Flow

```
proxyUser.age = 30

        │

        ▼

Proxy intercepts

        │

        ▼

set(user, "age", 30)

        │

        ▼

console.log("age", 30)

        │

        ▼

user["age"] = 30

        │

        ▼

return true
```

---

# Why must `set()` return `true`?

The return value tells JavaScript whether the assignment succeeded.

```
true
```

means

```
Assignment successful
```

```
false
```

means

```
Assignment failed
```

If nothing is returned,

```javascript
set(){

    target[property] = value;

}
```

JavaScript automatically returns

```javascript
undefined
```

which is a **falsy** value.

In **strict mode**, this causes a **TypeError** because JavaScript assumes the assignment failed.

Therefore, always return:

```javascript
return true;
```

after a successful assignment.

---

# Example: Validation

Without Proxy:

```javascript
const user = {
    age: 22
};

user.age = -10;
```

Result:

```
age = -10
```

No validation occurs.

---

Using Proxy:

```javascript
const proxyUser = new Proxy(user, {

    set(target, property, value){

        if(property === "age" && value < 0){

            console.log("Invalid age");

            return false;

        }

        target[property] = value;

        return true;

    }

});
```

Now,

```javascript
proxyUser.age = -10;
```

Output:

```
Invalid age
```

The original object remains unchanged.

---

# Proxy Can Change Behavior Without Changing the Object

Example:

```javascript
const user = {
    name: "Sankar"
};

const proxyUser = new Proxy(user, {

    get(){

        return "Hidden";

    }

});

console.log(proxyUser.name);

console.log(user.name);
```

Output:

```
Hidden
Sankar
```

Notice:

The original object still stores

```javascript
name = "Sankar"
```

The Proxy only changes what the caller **sees**.

---

## Sunglasses Analogy 😎

Imagine your friend is wearing a blue shirt.

Without glasses:

```
Friend

Blue Shirt
```

Now wear magical red glasses.

```
You

   │

Magic Glasses

   │

Friend
```

You now see:

```
Black Shirt
```

Did your friend actually change clothes?

**No.**

Only **your view** changed.

Similarly,

```
Original Object

name = "Sankar"
```

still exists.

The Proxy simply returns

```
"Hidden"
```

instead.

---

# Proxy vs Object.defineProperty()

Before ES6, JavaScript used:

```javascript
Object.defineProperty()
```

Example:

```javascript
let name = "Sankar";

const user = {};

Object.defineProperty(user, "name", {

    get(){

        return name;

    },

    set(value){

        console.log("Changed!");

        name = value;

    }

});
```

Problem:

It works **one property at a time**.

For an object with hundreds of properties, getters and setters must be created for every property.

---

Proxy solves this.

Instead of wrapping each property,

```
name

age

city

phone
```

Proxy wraps the **entire object**.

```
Entire Object

      │

      ▼

    Proxy
```

Every property is automatically monitored.

---

# Vue 3 Uses Proxy

Suppose:

```javascript
const state = {
    count: 0
};
```

HTML:

```
Count : 0
```

Now,

```javascript
state.count++;
```

How does Vue know the value changed?

Internally,

```
state

    │

    ▼

 Proxy

    │

    ▼

set()

    │

    ▼

Update UI
```

A simplified idea:

```javascript
const state = new Proxy({

    count: 0

},{

    set(target, property, value){

        target[property] = value;

        updateUI();

        return true;

    }

});
```

Whenever data changes,

the UI updates automatically.

This is called **Reactivity**.

---

# React vs Vue

### React

You explicitly tell React that state changed.

```javascript
setCount(count + 1);
```

React already knows to re-render.

---

### Vue

You simply write

```javascript
state.count++;
```

The Proxy detects the change automatically and updates the UI.

---

# Reflect

Without Reflect:

```javascript
get(target, property){

    return target[property];

}
```

With Reflect:

```javascript
get(target, property){

    return Reflect.get(target, property);

}
```

Similarly,

Instead of

```javascript
target[property] = value;
```

use

```javascript
Reflect.set(target, property, value);
```

---

## Why use Reflect?

At first glance,

```javascript
target[property]
```

and

```javascript
Reflect.get(target, property)
```

look identical.

Reflect exists because it performs JavaScript's **default internal behavior** correctly.

Think of it as saying:

> "After doing my custom work, perform the normal JavaScript operation."

---

## Another Benefit

Normal JavaScript has different syntax for different operations.

```javascript
obj.name

obj.name = "Rahul"

delete obj.name

"name" in obj
```

Reflect provides one consistent API.

```javascript
Reflect.get(obj, "name");

Reflect.set(obj, "name", "Rahul");

Reflect.deleteProperty(obj, "name");

Reflect.has(obj, "name");
```

Everything follows the same pattern.

---

## Why Frameworks Prefer Reflect

When objects involve:

- Getters
- Inheritance
- Receivers
- Complex Proxy interactions

Reflect preserves JavaScript's normal internal behavior correctly.

Therefore, you'll often see:

```javascript
const proxy = new Proxy(user, {

    get(target, property, receiver){

        return Reflect.get(target, property, receiver);

    },

    set(target, property, value, receiver){

        return Reflect.set(
            target,
            property,
            value,
            receiver
        );

    }

});
```

This is the standard pattern used in many real-world libraries.

---

# Summary

A Proxy:

- Wraps an object
- Intercepts operations
- Can modify behavior
- Can validate data
- Can log operations
- Can hide information
- Can trigger UI updates
- Powers Vue 3's reactivity system

Most commonly used traps:

- `get()`
- `set()`

Reflect is commonly paired with Proxy because it performs JavaScript's default behavior in a consistent and reliable way.