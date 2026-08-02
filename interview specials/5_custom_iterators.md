# custom iterator.md

# Generators - Final Concepts

---

## 1. Infinite Generator and `break`

### Program

```javascript
function* infinite() {              // Generator function is created.
    let i = 1;                      // Local variable initialized only once.

    while (true) {                  // Infinite loop inside the generator.
        yield i++;                  // Yield current value and pause. Increment happens after yielding.
    }
}

const g = infinite();               // Creates a generator object. Generator body has NOT started executing yet.

for (const x of g) {                // for...of repeatedly calls g.next().
    console.log(x);                 // Prints each yielded value.

    if (x === 5) {                  // Condition checked after every value.
        break;                      // Stops only the for...of loop.
    }
}
```

### Output

```text
1
2
3
4
5
```

### Important Points

* `break` **does not terminate** the generator.
* It only terminates the `for...of` loop.
* The generator remains paused at its last `yield`.
* Since nobody calls `g.next()` again, execution never resumes.

---

## 2. Generator State After `break`

### Program

```javascript
function* infinite() {              // Generator function.
    let i = 1;                      // Initial value.

    while (true) {                  // Infinite sequence.
        yield i++;                  // Pause after every value.
    }
}

const g = infinite();               // Generator object created.

for (const x of g) {                // Loop starts consuming values.
    console.log(x);                 // Prints current value.

    if (x === 5) {                  // Stops after printing 5.
        break;                      // Only exits the loop.
    }
}

console.log(g.next());              // Generator resumes exactly where it paused.
console.log(g.next());              // Continues normally.
```

### Output

```text
1
2
3
4
5
{ value: 6, done: false }
{ value: 7, done: false }
```

### Explanation

The generator never restarted.

The generator never finished.

It simply resumed from the point where it had paused after yielding `5`.

---

# Why Generators Exist

Arrays are **eager**.

Generators are **lazy**.

---

## Array (Eager Evaluation)

```javascript
const arr = [1, 2, 3, 4, 5];
```

The complete array is created immediately in memory.

If you create one million values, all one million values are stored.

---

## Generator (Lazy Evaluation)

```javascript
function* numbers() {
    let n = 1;

    while (true) {
        yield n++;
    }
}
```

Nothing is generated until `next()` is called.

Only one value exists at a time.

The generator remembers only its execution state.

---

# Advantages of Generators

* Lazy evaluation
* Better memory efficiency
* Can generate infinite sequences
* Suitable for processing very large datasets
* State is automatically preserved between `yield`s

---

# Difference Between Array and Generator

| Array                               | Generator                        |
| ----------------------------------- | -------------------------------- |
| Eager evaluation                    | Lazy evaluation                  |
| Stores all values immediately       | Produces values on demand        |
| High memory usage for large data    | Very low memory usage            |
| Cannot represent infinite sequences | Can represent infinite sequences |
| Random access using index           | Sequential access using `next()` |

---

# Quiz Questions

## Question 1

Predict the output.

```javascript
function* infinite() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

const g = infinite();

for (const x of g) {
    console.log(x);

    if (x === 5) {
        break;
    }
}

console.log(g.next());
```

### Correct Answer

```text
1
2
3
4
5
{ value: 6, done: false }
```

**Common Mistakes**

* Thinking the generator restarts from `1`.
* Thinking `done` becomes `true`.
* Thinking `break` destroys the generator.

None of these are correct. `break` only exits the loop. The generator's internal state remains intact.

---

## Interview Takeaways

* Generator execution pauses at every `yield`.
* `break` does not reset or terminate the generator.
* The next call to `next()` resumes from the exact paused location.
* Infinite generators are safe as long as the consumer decides when to stop requesting values.
* Generators enable lazy evaluation by producing values only when requested.
