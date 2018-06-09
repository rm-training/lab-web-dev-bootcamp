$(function () {
  new Confirm(function (confirm) {
    const flagsInBucket = document.querySelectorAll('#bucket ul li');

    confirm.assert(flagsInBucket.length === 5, `Missing ${5 - flagsInBucket.length} flags from the bucket`);
  });
});
