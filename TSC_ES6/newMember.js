var $name = document.getElementById('js-name');
var $main = document.getElementById('js-main');
var $bt = document.getElementById('js-btSubmit');
var Member = (function () {
    function Member(name) {
        this.name = name;
        this.username = name;
        this.elm = document.createElement('li');
        this.elm.className = 'list-group-item';
        this.addNewMember();
        this.deleteMember();
    }
    Member.prototype.addNewMember = function () {
        this.elm.innerHTML = "<span>" + $name.value + "</span>";
        $main.appendChild(this.elm);
        $name.value = '';
    };
    Member.prototype.deleteMember = function () {
        var $btDel = document.createElement('button');
        $btDel.className = 'btn btn-primary btn-xs pull-right';
        $btDel.innerHTML = 'Delete';
        this.elm.appendChild($btDel);
        $btDel.addEventListener('click', function (f) {
            var $parentElm = f.target.parentNode;
            $main.removeChild($parentElm);
        });
    };
    return Member;
}());
$bt.addEventListener('click', function () {
    var newMember = new Member($name.value);
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
