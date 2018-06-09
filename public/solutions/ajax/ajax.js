const buttonEl = document.querySelector('button');
const dataList = document.getElementById('data');
const detailsEl = document.getElementById('details');

buttonEl.addEventListener('click', function (e) {
  const req = new XMLHttpRequest();

  req.addEventListener('load', function (e) {
    let data;
    let newLi;

    console.log('Response', req.status, req.responseText);

    if (req.status === 200) {
      data = JSON.parse(req.responseText);

      for (var i = 0; i < data.length; i++) {
        // create new <li>
        newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(data[i].title));

        // could also just use innerHTML to avoid textNode creation
        // newLi.innerHTML = data[i].name;

        // BONUS #1:
        // Wrapped in IIFE to protect scope and use data[i].id
        (function (id) {
          newLi.addEventListener('click', function (e) {
            showDetailsHandler(id);
          });
        }(data[i].userId));

        // @todo
        // BONUS #2

        dataList.appendChild(newLi);
      }
    }
  });

  req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  req.send(null);
});

// Bonus #1:
const showDetailsHandler = function (postAuthorId) {
  const detailsRequest = new XMLHttpRequest();

  detailsRequest.addEventListener('load', function (e) {
    let data;
    if (detailsRequest.status === 200) {
      data = JSON.parse(detailsRequest.responseText);
      console.log(detailsRequest.responseText);

      $(detailsEl)
        .html(detailsRequest.responseText)
        .modal('show');
    }
  });

  detailsRequest.open('GET', 'https://jsonplaceholder.typicode.com/users/' + postAuthorId);
  detailsRequest.send(null);
};
