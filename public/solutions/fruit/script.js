// Content manipulation
//
// Use jQuery to complete the following
// You will be adding, moving, and manipulating content
//
// Warnings:
// a. Be sure to write your code so it runs on document ready only
// b. Take care not to REMOVE classes or attributes unless
// told to do so in each task below

$(function() {

  // 1
  //     Create a new "Grapes" list item in the "new" list
  //     Give it two additional classes: "fresh" and "glyph-grapes"
  //     Then style it with white text and a purple background
  var $newList = $('.new');
  $grapeLi = $('<li>');
  $grapeLi.html('Grapes');
  $grapeLi.addClass('fresh');
  $grapeLi.addClass('glyph-grapes');
  $newList.append($grapeLi);

  // 2
  //     Remove any "spoiled" (based on class)
  //     list items from the page entirely
  $('.spoiled').remove();

  // 3
  //     Move "Cherries" into the "new" list as the last item
  //     Add text to the list item, "(10)" to indicate you have ten cherries.
  //    Resulting text: "Cherries (10)"

  $cherries = $('.glyph-cherry');
  $newList.append($cherries);

  // 4
  //     Copy "Apples" into the "new" list as the first item
  //     Set it's data-type attribute value from "red" to "green"
  //     Remove the class "mushy" and give it a class of "fresh"

  $apples = $('.glyph-apple');
  $newApple = $apples.clone();
  $newApple
    .data('type', 'green')
    .removeClass('mushy')
    .addClass('fresh');
  $newList.append($newApple);

  // 5
  //    Bring it together
  //    Write a function, "sort()" that will perform all
  //    the manipulations you wrote above
  //    To test, uncomment the sort() invokation line
  //    then press the sort button

  $("#sorter").one('click', function() {
    if (typeof sort === 'function') {
      sort();
    } else {
      console.log("You haven't written the sort() function yet!")
    }
  });

  // 6 (Bonus)
  //    Animate your manipulations
  //    Update your sort() function so that:
  //    For any element that is removed from the page, fade it out
  //    For any element that is added to the page, fade it in
  //    For any element that is moved in the page, fade it out before moving, then fade it in once moved

});