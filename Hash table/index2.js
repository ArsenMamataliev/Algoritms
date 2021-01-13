const contacts = [
    {name: "Mike", phoneNumber: +996772294936}, 
    {name: "Jordan", phoneNumber: +996779295933},
    {name: "Anton", phoneNumber: +99670559485922}, 
    {name: "Steve", phoneNumber: +9960552364525}, 
    {name: "Akmat", phoneNumber: +996702295933}, 
    {name: "Anna", phoneNumber: +996708554785}, 
    {name: "Janna", phoneNumber: +996553364536}, 
    {name: "Mariya", phoneNumber: +996703252599}, 
];

const createHashTable = (arr, key) => {
	let obj = {}; 
	arr.map((item) => {
		obj[item[key]] = item;
	});

	return obj;
}

const usersHashTable = createHashTable(contacts, 'name');

console.log(usersHashTable['Jordan']);
