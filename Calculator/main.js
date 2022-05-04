let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
	button.addEventListener('click', (e) => {
		switch (e.target.textContent) {
			case 'Reset':
				display.textContent = '';
				break;
			case '=':
				try {
					display.textContent = eval(display.textContent);
				} catch {
					display.textContent = "Error"
				}
				break;
			case 'delete':
				if (display.textContent) {
					display.textContent = display.textContent.slice(0, -1);
				}
				break;
			default:
				display.textContent += e.target.textContent;
		}
		});
});




