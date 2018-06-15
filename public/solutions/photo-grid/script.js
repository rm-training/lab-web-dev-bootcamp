// With Handlebars...
//const photoTemplate = Handlebars.compile($("#photo-template").html());

function handleResponse(response) {
  const $album = $("#album");

	// for each array item
  response.forEach(function(item) {

    // render an album item
    let newImg = "<img ";
    newImg += "src='" + item.thumbnailUrl + "' ";
    newImg += " />";

		// With Handlebars...
    //var newImg = photoTemplate(item);

		$album.append(newImg);
  });
}

$.ajax({
  url: 'http://jsonplaceholder.typicode.com/photos',
  data: {
    albumId: 10
  },
  success: handleResponse,
  dataType: 'json'
});
