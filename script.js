var message = document.querySelector('.message');
var btn = document.querySelector('.btn');
btn.addEventListener('click', active);

function active(){
	var add = Number(message.getAttribute('data-count'))|| 0;
	message.setAttribute('data-count', add + 1);
	if (add === 0) {
		message.classList.add('add-numb');
	}
	false;
}

