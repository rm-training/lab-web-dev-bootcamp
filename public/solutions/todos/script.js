// get the form
const $form = $('#todo-form');
// get oure template compiled
const itemTemplate = Handlebars.compile($('#item-template').html());
// get the todo list
const $todoList = $('#todo-list');

$form.on('submit', function (e) {
  const newTodo = {
    title: $form.find('[name=title]').val()
  };

  console.log(newTodo);
  appendTodoItem(newTodo);

  // TODO - save it to the API?
  $.ajax({
    url: 'http://localhost:3000/todos',
    method: 'post',
    data: $(this).serialize()
  }).then(function (response) {
    console.log('Success', response);
  });

  // don't do the browser default stuff
  e.preventDefault();
});

// use delegation for list item click handlers
$todoList.on('click', '.icon.check', function (e) {
  // if I am completed, un-complete me?
  // if I am not complete, complete me
  console.log('Clicky complete');

  // this is sufficient for the UI but what about the data?
  if (!$(this).hasClass('check')) {
    $(this).addClass('check');
    $(this).parent().addClass('disabled');
  }
});

$todoList.on('click', '.icon.remove', function (e) {
  // if I am completed, un-complete me?
  // if I am not complete, complete me
  const $listItem = $(this).parents('.item');
  const itemId = $listItem.data('id');

  // we fade out immediately for the perception of a "fast UI"
  $listItem.fadeOut('fast');

  $.ajax({
    url: 'http://localhost:3000/todos/' + itemId,
    method: 'delete'
  }).then(function (response) {
    console.log('Successfully deleted');
    $listItem.remove();
  }, function (error) {
    console.log('Failed to delete', error);
    $listItem.fadeIn('fast');
  });
});

// get the initial list
const getTodos = $.ajax({
  url: 'http://localhost:3000/todos'
});

// initialize the list
getTodos.then(function (response) {
  // console.log(response);
  response.forEach(function (el) {
    appendTodoItem(el);
  });
});

// add a new item into the bottom of the list
function appendTodoItem(itemData) {
  // create a new item element
  const newItemHtml = itemTemplate(itemData);
  const $newItem = $(newItemHtml).hide();

  // set some data (the item id) for us to use later, ie: in deletion
  $newItem.data('id', itemData.id);

  // insert it into the list
  $todoList.prepend($newItem);
  $newItem.fadeIn('slow');
}
