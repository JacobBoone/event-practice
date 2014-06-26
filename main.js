// //  ________________ PART 1



// //  set up a counter this is at GLOBAL level
// var counter = 0;

// console.log(this);

// $(document).on('ready', function() {
//   console.log('hello world from on.ready');

//   // LISTEN for click events on <button>

// //  set up a counter, window evel
// // var counter = 0;


// // listen for click events on button
//   $('button').on('click', function(){
//   	// test functionality with a console log
//   	console.log('hello world from button.click', counter);

// //  when button clicked will increase counter

// 	counter++;

//   });

// // listen for clicks on my-button (normal style)
// // $('#my-button').on('click', function(){
	
// // short hand of line above
// $('#my-button').click(function(eventArgs){
// 	// prints out all the arguments passed to this function
// 	console.log(arguments);

// 	//print out named alias for 1st argument
// 	console.log(eventArgs.clientX);
// });

// // Prevent all anchor tags from going anywhere

// $('a').on('click', function(e){
// 	console.log("Clicked an anchor tag");
// 	// this refers to the DOM element that was clicked
// 	console.log(this);


// 	// we can convert that DOM element into a Jquery object
// 	// by passing it to the $()
// 	$(this).css('color', 'red')
// 	// event-way to break the default behavior
// 	// like navigating to a page when clicking one a <a> tag
// 	e.preventDefault();

//   // THIS will to the same as    e.preventDefault();
// 	// return false;


// });


// });




//  -------------- PART 2




$(document).on('ready', function() {

	$(document).on('click', function(eventArgs){
		var targ = $(eventArgs.target);
		console.log(eventArgs.target);
		if(targ.text() === 'Something Cool'){
			console.log('that\'s so cool');
		}
	});









});






























