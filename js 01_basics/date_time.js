// date_time.js

// ---------- STATIC METHODS ----------

// Returns current time in milliseconds since Jan 1, 1970 UTC
console.log("Date.now() ->", Date.now());

// Parses a date string and returns milliseconds since epoch (use ISO format for reliability)
console.log('Date.parse("2020-01-01") ->', Date.parse("2020-01-01"));

// Returns UTC milliseconds for given date parts (year, month, etc.)
console.log("Date.UTC(2020, 0, 1) ->", Date.UTC(2020, 0, 1));

// ---------- CREATING DATE INSTANCES ----------

const today = new Date(); // Current date & time
const isoDate = new Date("2020-05-12T23:50:21.817Z"); // ISO string (preferred)
const fromParts = new Date(2020, 4, 12, 15, 30); // year, month(0-indexed), day, hr, min
const fromTimestamp = new Date(1700000000000); // from epoch ms

console.log({ today, isoDate, fromParts, fromTimestamp });

// ---------- COMMON GETTERS (LOCAL TIME) ----------

const d = new Date("2000-01-17T16:45:30");

console.log("getDate ->", d.getDate()); // Day of month (1–31)
console.log("getMonth ->", d.getMonth()); // Month (0–11)
console.log("getFullYear ->", d.getFullYear()); // Year (YYYY)
console.log("getDay ->", d.getDay()); // Weekday (0–6)
console.log("getHours ->", d.getHours()); // Hours (0–23)
console.log("getMinutes ->", d.getMinutes()); // Minutes (0–59)
console.log("getSeconds ->", d.getSeconds()); // Seconds (0–59)
console.log("getTime ->", d.getTime()); // Epoch milliseconds
console.log("getTimezoneOffset ->", d.getTimezoneOffset()); // Minutes offset from UTC

// ---------- COMMON SETTERS (LOCAL TIME) ----------

d.setFullYear(2025); // Set full year
d.setMonth(6); // Set month (0–11)
d.setDate(20); // Set day of month
d.setHours(10); // Set hours
d.setMinutes(30); // Set minutes
d.setSeconds(0); // Set seconds

console.log("after setting values ->", d.toString());

// ---------- USEFUL STRING FORMATS ----------

const dateExample = new Date("2020-05-12T23:50:21.817Z");

console.log("toString ->", dateExample.toString()); // Full local time string
console.log("toDateString ->", dateExample.toDateString()); // "Tue May 12 2020"
console.log("toTimeString ->", dateExample.toTimeString()); // "18:50:21 GMT-0500..."
console.log("toISOString ->", dateExample.toISOString()); // ISO 8601 format
console.log("toJSON ->", dateExample.toJSON()); // Same as toISOString(), for JSON.stringify()
console.log("toUTCString ->", dateExample.toUTCString()); // UTC-based readable string
console.log("toLocaleString ->", dateExample.toLocaleString()); // Localized date + time
console.log("toLocaleDateString ->", dateExample.toLocaleDateString()); // Localized date
console.log("toLocaleTimeString ->", dateExample.toLocaleTimeString()); // Localized time

// ---------- PRACTICAL USAGE EXAMPLES ----------

// ✅ Extract parts
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const [hour, minute, second] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
console.log("parts ->", { month, day, year, hour, minute, second });

// ✅ Convert to readable format for UI
console.log(
  "Readable:",
  date.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
);

// ✅ Store in DB / API (ISO string for MongoDB or REST)
console.log("For database:", date.toISOString());

// ✅ Compare / sort dates
const d1 = new Date("2024-05-01");
const d2 = new Date("2024-06-01");
console.log("Compare dates ->", d1.getTime() < d2.getTime()); // true

// ---------- TWO-DIGIT YEAR GOTCHA (INTERVIEW TRAP) ----------
// Avoid using 2-digit years — they behave inconsistently
let legacy = new Date(98, 1); // may be 1998
console.log("new Date(98,1) ->", legacy.toString());
legacy.setFullYear(98); // ✅ Preferred — sets exactly year 98 (not 1998)
console.log("After setFullYear(98) ->", legacy.getFullYear());

// ---------- WEEKDAY & TIME DISPLAY (your requested snippet) ----------
const newDate = new Date();
console.log(
  `Day index: ${newDate.getDay()} and the time: ${newDate.toLocaleTimeString()}`,
);

// ✅ Get full weekday name using locale options
const weekdayName = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(`Today is ${weekdayName}.`);

// Combine both: readable weekday and full localized time
console.log(
  `Today is ${weekdayName}, and the time is ${newDate.toLocaleTimeString()}.`,
);

// ---------- QUICK INTERVIEW NOTES ----------
// ✅ Always use ISO date strings when parsing (e.g., "2024-01-17T10:30:00Z")
// ✅ Avoid deprecated methods: getYear(), setYear()
// ✅ Use getFullYear()/setFullYear() instead
// ✅ Prefer toISOString() for DB / API storage (MongoDB compatible)
// ✅ Use toLocaleString() for user-facing UI (auto-localized)
// ✅ Use getTime() or Date.now() for comparisons & timestamps
// ✅ Use toLocaleString({ weekday: 'long' }) to display weekday names cleanly
