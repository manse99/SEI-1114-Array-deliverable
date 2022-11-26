

const minions = [
	'bob',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];
minions.forEach(function(minion){
console.log(minion + ' ' +`here`)
});

//newminions = minions.splice(minions.indexOf("kevin"), 1);
//console.log(newminions);
//console.log(minions);

const nokev = minions.slice(0, 4).concat(minions.slice(5 + 1, minions.length))
console.log(nokev);

const isCapitilized =  nokev.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
console.log(isCapitilized);

const capitilizedMinions = minions.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
	console.log(capitilizedMinions);

const actuallycapitilizedMinions = isCapitilized




