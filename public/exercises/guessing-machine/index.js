let GuessingModule = (function app(){
	let x;

	function think_of_a_number() {
		x = Math.floor(Math.random() * Math.floor(100));
	}

	think_of_a_number();

	return {
		is_it: function (guess) {
			console.log(x === guess ? "yes!" : "no");
		},
		give_up: function() {
			console.log(x);
		}
	}
})();
