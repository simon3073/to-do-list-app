function newItem() {
	// retrieve the input text
	let inputValue = $('#input').val();

	// set up out new element in a variable
	let li = $('<li></li>');

	// if there is not to do text to add
	if (inputValue === '') {
		alert('You have to write a task to be added!'); // ask to add it
	} else {
		// or else add the element to the list
		li.append(inputValue);
		$('#list').append(li);
	}

	// on double click of an to do item > add the strikethrough class
	function crossOut() {
		li.toggleClass('strike');
	}
	li.on('dblclick', crossOut);

	let deleteItemIcon = $('<i class="fa-solid fa-xmark"></i>');
	li.append(deleteItemIcon);

	function deleteItem() {
		li.addClass('delete');
	}

	deleteItemIcon.on('click', deleteItem);

	// clear the input field for a new task to be added
	$('#input').val('');
}
