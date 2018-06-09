// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//    https://jsonplaceholder.typicode.com/posts
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each object in the response should be used to create
// a new <li> element in the existing <ul> container with the id of "data".
// Display the post title within the <li> element
//
// BONUS:
//
// Clicking one of the <li> elements should display all information
// about the clicked post's author (user) in the <ul> with the ID of "details".
//
// Or -- try using a modal from SemanticUI
// https://semantic-ui.com/modules/modal.html
// You'll need to use $ jquery
//
// Hint:
//    make another HTTP request to
//    https://jsonplaceholder.typicode.com/users/{N}
//    where {N} is the post user_id
//
//