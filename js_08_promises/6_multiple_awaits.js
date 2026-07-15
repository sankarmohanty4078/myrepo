//here we discuss the problem of sequential multiple await statements and its solutions
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User"), 2000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts"), 2000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Comments"), 2000);
  });
}

async function getData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();

  console.log(user, posts, comments);
}

getData();
// the above code will take 6 seconds to execute because each await statement is waiting for the previous one to complete
//first await takes 2s -> second await started and takes 2s -> third await started and takes 2s = total 6s taken

//we dont want this behavior unless the following awaits are dependent on its prior awaits like this:
// const user = await getUser(id);
// const orders = await getOrders(user.id);
// const invoice = await getInvoice(orders[0].id);

//solution 1: Parallel Execution
/*
fetchUser() and fetchPosts() are both called before any await is encountered.
 Calling these functions immediately creates two Promises and starts their asynchronous operations 
 (e.g., timers, network requests, etc.) simultaneously. Both Promises are now running in parallel.
  When await p1 executes, the async function pauses until p1 resolves. 
  By that time, p2 has also been running in the background. So when the function resumes after 3 seconds, 
  p2 is already fulfilled, and await p2 returns almost immediately.
 Therefore, the total execution time is approximately 3 seconds, not 6 seconds.
*/
const userPromise = fetchUser();
const postsPromise = fetchPosts();
const commentsPromise = fetchComments();

const user = await userPromise;
const posts = await postsPromise;
const comments = await commentsPromise;

//solution 2: Promise.all() (read more about it in 3_promise_apis.js)
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
]);

console.log(user, posts, comments);
