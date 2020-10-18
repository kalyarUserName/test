function sortMass(mass) {
	mass.sort((prev, next) => prev.id - next.id);
	let res = "";
	for(let i = 0; i < mass.length - 1; i++) {
		res = res + mass[i].id + " "+ mass[i].name + "\n";
	}
	return res;
}