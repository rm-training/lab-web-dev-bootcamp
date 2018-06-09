/***************************************************************************** */
/*
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server,
 * decoded from JSON.
 *
 * Hints:
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
   * Likely abstraction for the raw ajax request
   *
   * @return {Promise}
   */
  function raw (url, method, data) {
    const ajaxPromise = new Promise(function (resolve, reject) {
      const req = new XMLHttpRequest();

      req.addEventListener('load', function (e) {
        if (req.status >= 200 && req.status < 300) {
          resolve(JSON.parse(req.responseText || 'null'));
        }

        reject(req.status);
      });

      req.addEventListener('error', function () {
        reject('Something went wrong with the request');
      });

      req.open(method, url);
      req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      req.send(data && JSON.stringify(data));
    });

    return ajaxPromise;
  }

  // HTTP GET (Fetch resource).
  function get(url) {
    return raw(url, 'GET');
  }

  // HTTP POST (Create new resource).
  function post(url, data) {
    return raw(url, 'POST', data);
  }

  // HTTP PATCH (Update existing resource).
  function patch(url, data) {
    return raw(url, 'PATCH', data);
  }

  // HTTP DELETE (Delete existing resource).
  function destroy(url) {
    return raw(url, 'DELETE');
  }

  // Public interface here:
  return {
    get: get,
    post: post,
    patch: patch,
    destroy: destroy,
  };
}());

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

