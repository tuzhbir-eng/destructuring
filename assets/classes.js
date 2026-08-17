// class Post {
// 	constructor(
// 		id,
// 		title,
// 		author,
// 		text,
// 		addDate,
// 		likeCount,
// 	) {
// 		this._id = id;
// 		this._title = title;
// 		this._author = author;
// 		this._text = text;
// 		this._addDate = addDate;
// 		this._likeCount = likeCount;
// 	}
// 	set id(value) {
// 		this._id = value;
// 	}

// 	get addDate() {
// 		return this._addDate;
// 	}
// }
// const post1 = new Post(
// 	"12",
// 	"Book",
// 	"Shevchenko",
// 	"qwerty qwerty",
// 	2020,
// 	89,
// );
function someData({
	age,
	education: { university },
	adress: {
		city,
		coordinates: { latitude },
	},
	contacts: { email: userEmail },
	hobbies: [, secondHobbie],
	family: {
		children: [{ name: firstChildName }, ,],
	},
}) {
	console.log(
		"Age: ",
		age,
		"\n university: ",
		university,
		"\ncity: ",
		city,
		"\nlatitude: ",
		latitude,
		"\nuser email: ",
		userEmail,
		"\nsecond Hobbie: ",
		secondHobbie,
		"\nfirstChildName: ",
		firstChildName,
	);
}

const user = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	adress: {
		street: "123 Main Street",
		city: "Anytown",
		country: "USA",
		postalCode: "12345",
		state: "California",
		coordinates: {
			latitude: 37.7749,
			longitude: -122.4194,
		},
	},
	contacts: {
		email: "john.doe@example.com",
		phone: "123-456-7890",
		social: {
			facebook: "john.doe.123",
			twitter: "@johndoe",
			instagram: "@johndoe123",
		},
	},
	hobbies: ["reading", "traveling", "hiking"],
	education: {
		degree: "Bachelor's",
		field: "Computer Science",
		university: "University of California, Berkeley",
	},
	work: {
		company: "ABC Corp",
		position: "Software Engineer",
		experience: "5 years",
	},
	family: {
		spouse: {
			firstName: "Jane",
			lastName: "Doe",
			age: 28,
		},
		children: [
			{ name: "Emily", age: 5 },
			{ name: "Michael", age: 3 },
		],
	},
};

someData(user);
