/*
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server,
 * decoded from JSON.
 *
 * Hints:
 *
 * Test with this API (which supports CORS):
 *  http://jsonplaceholder.typicode.com/users
 *  https://jsonplaceholder.typicode.com/users
 *
 * Set content type before sending a request:
 *
 *   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 *
 * Send a data object as JSON:
 *
 *    req.send(JSON.stringify(data));
 *
 * Parse an incoming JSON string:
 *
 *   var data = JSON.parse(req.responseText || "null");
 *
 * Only resolve the promise if the (load) `status' code is >= 200 and
 * < 300.  Otherwise reject the promise.  Also reject the promise on
 * XHR failure (error).
 *
 */
const Ajax = (function () {
  /**
   * raw
   * abstraction for the actual XHR request
   *
   * @return Promise
   */
  function raw(url, method, data) {
    // Return a promise.
  };

  /**
   * get
   * makes HTTP GET request to a given URL
   *
   * @return Promise
   */
  function get(url) {
  };

  /**
   * post
   * makes HTTP POST request to a given URL to create a resource
   *
   * @return Promise
   */
  function post(url, data) {
  };

  /**
   * patch
   * makes HTTP PATCH request to a given URL to update existing resource
   *
   * @return Promise
   */
  function patch(url, data) {
  };

  /**
   * destroy
   * makes HTTP DELETE request to a given URL to delete existing resource
   *
   * @return Promise
   */
  function destroy(url) {
  };

  // Our public interface
  return {
    get: get,
    post: post,
    patch: patch,
    destroy: destroy,
  };
}());

// Usage examples -- Uncomment to test:
/*
const promGet = Ajax.get('https://jsonplaceholder.typicode.com/users');
promGet.then(function (data) {
	console.log(data);
});

const promPost = Ajax.post('https://jsonplaceholder.typicode.com/users', {
  name: 'Ryan',
  username: 'Morris'
});
promPost.then(function (data) {
	console.log(data);
});
*/