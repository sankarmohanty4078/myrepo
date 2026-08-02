# JavaScript WeakMap & WeakSet

## Why were WeakMap and WeakSet introduced?

Before understanding WeakMap, let's revise how a normal `Map` behaves.

---

# Revising Map

```javascript
const user = {
    name: "Sankar"
};

const map = new Map();

map.set(user, "Student");
```

Memory:

```
user
 │
 ▼
+----------------+
| name:"Sankar"  |
+----------------+

Map
 │
 ▼
Key ─────────────┘
```

The Map stores a **strong reference** to the object.

Therefore,

```javascript
console.log(map.get(user));
```

prints

```
Student
```

---

# The Problem

Consider this code.

```javascript
let user = {
    name: "Sankar"
};

const map = new Map();

map.set(user, "Student");

user = null;
```

Many beginners think:

> Since `user = null`, the object disappears.

This is **incorrect**.

Let's examine memory.

Before:

```
user
 │
 ▼
+----------------+
| name:"Sankar"  |
+----------------+

Map
 │
 ▼
Key ─────────────┘
```

After:

```javascript
user = null;
```

Memory becomes

```
user

null


Map
 │
 ▼
+----------------+
| name:"Sankar"  |
+----------------+
```

The variable `user` no longer points to the object.

However,

the **Map still has a strong reference** to it.

Therefore, the object is still reachable.

---

# Role of the Garbage Collector

The Garbage Collector continuously checks objects in memory.

Its job is **not**:

> Delete every object whose variable becomes `null`.

Its actual job is:

> **Delete objects that are no longer reachable through any strong reference.**

Think of the Garbage Collector asking:

```
Does anyone still strongly reference this object?
```

If the answer is

```
YES
```

the object remains in memory.

If the answer is

```
NO
```

the object becomes eligible for garbage collection.

In our previous example,

```
Map

 │

 ▼

Object
```

The Map still strongly references the object.

So the Garbage Collector says

```
Object is still reachable.

Do NOT delete.
```

---

# Why is this a problem?

Suppose you're building a chat application.

Whenever a user logs in,

you create an object.

```javascript
{
    id: 101,
    name: "Rahul"
}
```

Then,

```javascript
map.set(user, sessionData);
```

The user logs out.

```javascript
user = null;
```

You expect memory to be freed.

But the Map still holds a strong reference.

The Garbage Collector therefore cannot remove the object.

As more users log in,

more objects remain in memory.

Eventually this becomes a **memory leak**.

---

# Enter WeakMap

WeakMap was introduced to solve this problem.

Unlike Map,

WeakMap stores a **weak reference** to an object.

Example:

```javascript
let user = {
    name: "Sankar"
};

const wm = new WeakMap();

wm.set(user, "Student");

user = null;
```

Memory:

```
user

null


WeakMap
 │
 ┆
 ┆ weak reference
 ▼
+----------------+
| name:"Sankar"  |
+----------------+
```

Now the Garbage Collector asks

```
Is there any strong reference to this object?
```

The answer is

```
NO
```

because

- the variable became `null`
- WeakMap stores only a weak reference

Therefore,

```
Garbage Collector

↓

Removes the object

↓

WeakMap entry disappears automatically.
```

Notice an important point:

**WeakMap does not delete the object.**

The **Garbage Collector** deletes the object.

WeakMap simply **does not prevent** garbage collection.

---

# Rule #1 of WeakMap

WeakMap keys **must be objects.**

Valid:

```javascript
const user = {};

const wm = new WeakMap();

wm.set(user, "Student");
```

Invalid:

```javascript
wm.set("name", "Sankar");
```

Result:

```
TypeError
```

Reason:

Weak references only make sense for **objects** because objects have a lifetime managed by the Garbage Collector.

Primitive values like

```javascript
10

true

"Hello"
```

are not managed this way.

Therefore,

WeakMap accepts only objects as keys.

---

# Why isn't WeakMap iterable?

WeakMap intentionally does **not** support iteration.

The following is invalid.

```javascript
for(const item of wm){

}
```

It also does not support

- `.keys()`
- `.values()`
- `.entries()`
- `.size`

Reason:

Imagine JavaScript allowed iteration.

While you are iterating,

the Garbage Collector might remove one of the objects because no strong references remain.

Example:

```
Before

Object A
Object B
Object C

↓

Garbage Collector runs

↓

Object B disappears
```

Now the collection changes while you are iterating over it.

To avoid this unpredictable behaviour,

WeakMap is intentionally **non-iterable**.

---

# Methods of WeakMap

```javascript
wm.set(key, value);

wm.get(key);

wm.has(key);

wm.delete(key);
```

These are the only commonly used methods.

---

# WeakSet

WeakSet behaves similarly.

Normal Set:

```javascript
const set = new Set();

set.add(10);

set.add("Hello");

set.add({});

set.add(true);
```

A normal Set accepts values of any type.

WeakSet accepts **only objects.**

Valid:

```javascript
const ws = new WeakSet();

const obj = {};

ws.add(obj);
```

Invalid:

```javascript
ws.add(10);
```

Result:

```
TypeError
```

---

# Garbage Collection in WeakSet

Suppose

```javascript
let obj = {};

const ws = new WeakSet();

ws.add(obj);

obj = null;
```

The Garbage Collector asks

```
Is there any strong reference to this object?
```

Answer:

```
NO
```

Therefore,

```
Garbage Collector

↓

Removes the object

↓

WeakSet entry disappears automatically.
```

Again,

WeakSet does **not** delete the object.

The Garbage Collector does.

WeakSet simply allows it.

---

# Map vs WeakMap

| Feature | Map | WeakMap |
|----------|-----|----------|
| Keys | Any type | Objects only |
| Reference type | Strong | Weak |
| Prevents Garbage Collection | Yes | No |
| Iterable | Yes | No |
| Has `.size` | Yes | No |

---

# Set vs WeakSet

| Feature | Set | WeakSet |
|----------|-----|----------|
| Values | Any type | Objects only |
| Reference type | Strong | Weak |
| Prevents Garbage Collection | Yes | No |
| Iterable | Yes | No |
| Has `.size` | Yes | No |

---

# Interview Questions

## Question 1

What is the major difference between Map and WeakMap?

### Refined Answer

Map holds **strong references** to object keys.

As long as the Map references an object,

the Garbage Collector cannot remove it.

WeakMap holds **weak references**.

If no strong references remain,

the object becomes eligible for garbage collection.

WeakMap also accepts only objects as keys.

---

## Question 2

What happens here?

```javascript
let obj = {
    x: 10
};

const wm = new WeakMap();

wm.set(obj, "Data");

obj = null;
```

### Refined Answer

The object becomes **eligible for garbage collection**.

Reason:

The variable `obj` no longer references the object,

and WeakMap stores only a weak reference.

The Garbage Collector checks whether any strong reference still exists.

Finding none,

it removes the object.

The WeakMap entry disappears automatically.

---

## Question 3

Will this work?

```javascript
const wm = new WeakMap();

wm.set("age", 22);
```

### Refined Answer

No.

WeakMap keys must be objects.

Weak references only make sense for objects because their lifetime is managed by the Garbage Collector.

Strings, numbers and other primitive values cannot be used as WeakMap keys.

---

## Question 4 (Interview Trap)

Predict the output.

```javascript
const wm = new WeakMap();

wm.set({}, "A");

console.log(wm.get({}));
```

### Correct Output

```javascript
undefined
```

### Explanation

The first `{}` creates **Object #1**.

```javascript
wm.set({}, "A");
```

stores

```
Object #1 → "A"
```

The second `{}`

```javascript
wm.get({});
```

creates an entirely different object (**Object #2**).

Although both objects look identical,

they occupy different locations in memory.

Equivalent code:

```javascript
const obj1 = {};

wm.set(obj1, "A");

const obj2 = {};

console.log(wm.get(obj2));
```

Since

```
obj1 !== obj2
```

WeakMap does not find a matching key.

Hence,

```javascript
undefined
```

---

## Question 5

Which is a better choice for storing temporary metadata about DOM elements?

- Map
- WeakMap

### Refined Answer

WeakMap.

Temporary metadata should disappear automatically when the DOM element is removed.

WeakMap stores only weak references,

so once no strong references to the DOM element remain,

the Garbage Collector can reclaim it.

This prevents memory leaks.

Using Map would keep a strong reference to the DOM element,

preventing garbage collection until the Map entry is removed manually.

---

# Key Takeaways

- Map stores **strong references**.
- WeakMap stores **weak references**.
- WeakMap never prevents garbage collection.
- WeakMap does **not** delete objects.
- The Garbage Collector deletes objects when **no strong references remain**.
- WeakMap accepts only objects as keys.
- WeakMap is not iterable.
- WeakSet behaves exactly like WeakMap but stores only objects instead of key-value pairs.
- WeakMap and WeakSet are mainly used to avoid memory leaks while associating temporary data with objects.