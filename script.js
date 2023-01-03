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