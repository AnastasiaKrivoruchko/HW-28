// Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.
// Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.
// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если - да, сделать математическое действие znak(которое описано в классе), иначе - запросить ввод новых данных через метод input() с класса SuperMath.

const OPERATIONS = {
	"+": function(x, y) { return x + y },
	"-": function(x, y) { return x - y },
	"*": function(x, y) { return x * y },
	"/": function(x, y) { return x / y },
};

class SuperMath {
	constructor() {
		this.input();
	}

	input() {
		do {
			this.x = +prompt(`Enter x`)
		} while(isNaN(this.x));

		do {
			this.y = +prompt(`Enter y`)
		} while(isNaN(this.y));

		do {
			this.znak = prompt(`Enter znak: ${this.getOperations()}`)
		} while(!OPERATIONS[this.znak]);
	}

	check() {
		let userApproved = confirm(`Do you want make operation ${this.x} ${this.znak} ${this.y}`);

		return userApproved ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
	}

	getOperations() {
		let operands = [];
		for(let key in OPERATIONS) {
			operands.push(key);
		}

		return operands.join(", ")
	}
}

const obj = new SuperMath();

console.log(obj.check());