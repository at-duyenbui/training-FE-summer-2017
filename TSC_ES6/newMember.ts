var $name = document.getElementById('js-name');
var $main = document.getElementById('js-main');
var $bt = document.getElementById('js-btSubmit');

class Member {
	private username: string;
	private elm: any;

	constructor(private name: string) {
		this.username = name;
		this.elm = document.createElement('li'); 
		this.elm.className = 'list-group-item';
		this.addNewMember();
		this.deleteMember();
	}

	addNewMember(){
		this.elm.innerHTML = `<span>${$name.value}</span>`;
		$main.appendChild(this.elm);
		$name.value = '';
	}

	deleteMember(){
		let $btDel = document.createElement('button');
		$btDel.className = 'btn btn-primary btn-xs pull-right';
		$btDel.innerHTML = 'Delete';
		this.elm.appendChild($btDel);

		$btDel.addEventListener('click', (f) => {
			let $parentElm = f.target.parentNode;
			$main.removeChild($parentElm);
		});
	}

}

$bt.addEventListener('click', function(){
	let newMember = new Member($name.value);
});



// class Car {
// 	wheel: number;
// 	constructor(private name: string) {
// 		this.wheel = 4;
// 	}

// 	getName(){
// 		document.write(`I am ${this.name} and I have ${this.wheel} wheels`);
// 	}
// }

// class LittleCar extends Car {
// 	constructor(name: string){
// 		super(name);
// 		this.wheel = 7;
// 	}
// }