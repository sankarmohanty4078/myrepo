//------------------------------------------------------
// Professional Implementation (Production)
//------------------------------------------------------

// Uses timestamps instead of setTimeout().
// Commonly used in production for better performance.

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;

    fn(...args);
  };
}

//------------------------------------------------------
// Real World Example
// YouTube Live Chat Slow Mode
//------------------------------------------------------

function sendMessage(message) {
  console.log("Message Sent:", message);
}

const slowMode = throttle(sendMessage, 10000);

// User clicks Send button repeatedly.

slowMode("Hello Everyone");

// Allowed

slowMode("Anyone Here?");

// Ignored

slowMode("Please Reply");

// Ignored

// 10 seconds later...

slowMode("Now I Can Send Again");

// Allowed

// Output

// Message Sent: Hello Everyone

// (Everything ignored for 10 seconds)

// Message Sent: Now I Can Send Again

//------------------------------------------------------
// Common Uses of Throttling
//------------------------------------------------------

// 1. YouTube Live Chat Slow Mode

const youtubeSlowMode = throttle(sendMessage, 10000);

//------------------------------------------------------

// 2. Discord Slow Mode

const discordSlowMode = throttle(sendMessage, 5000);

//------------------------------------------------------

// 3. Prevent Button Spam

const buyNowThrottle = throttle(placeOrder, 3000);

//------------------------------------------------------

// 4. Scroll Event Optimization

const optimizedScroll = throttle(updateScrollPosition, 100);

//------------------------------------------------------

// 5. Window Resize Event

const optimizedResize = throttle(updateLayout, 200);

//------------------------------------------------------

// 6. Mouse Move Optimization

const optimizedMouseMove = throttle(updateCursorPosition, 50);

//------------------------------------------------------

// 7. Infinite Scrolling

const loadMorePosts = throttle(fetchNextPage, 500);

//------------------------------------------------------

// 8. Multiplayer Game Controls

const movePlayer = throttle(sendPlayerPosition, 100);

//------------------------------------------------------

// 9. API Rate Limiting

const fetchWeather = throttle(callWeatherAPI, 1000);

//------------------------------------------------------

// 10. Keyboard Shortcut Protection

const saveDocument = throttle(saveFile, 2000);

//------------------------------------------------------
// Debounce vs Throttle
//------------------------------------------------------

// Debounce

// Waits until the user STOPS triggering the event.

// Example

// Search Box
// Autocomplete
// Search Suggestions
// Form Validation

//------------------------------------------------------

// Throttle

// Executes immediately,
// then ignores events for a fixed interval.

// Example

// Scroll Events
// Mouse Move
// Window Resize
// Live Chat Slow Mode
// Button Spam Prevention

//------------------------------------------------------
// Timeline Comparison
//------------------------------------------------------

// User Events

// A   B   C   D   E

//------------------------------------------------------

// Debounce (Delay = 1 second)

// A ❌
// B ❌
// C ❌
// D ❌
// E ✅

// Only the LAST event executes.

//------------------------------------------------------

// Throttle (Delay = 1 second)

// A ✅
// B ❌
// C ❌
// D ✅
// E ❌

// Executes once every interval.

//------------------------------------------------------
// Interview Revision
//------------------------------------------------------

// Debounce
// -> Wait until user stops.

// Throttle
// -> Execute once every fixed interval.

// Debounce
// -> Search Box, Autocomplete.

// Throttle
// -> Scroll, Resize, Mouse Move, Slow Mode.

// Debounce
// -> Uses clearTimeout().

// Throttle
// -> Uses either setTimeout() or Date.now().

// Production
// -> Date.now() implementation is commonly preferred.
