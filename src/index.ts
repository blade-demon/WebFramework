import { User } from "./models/User";

const user = User.buildUser({ name: "One New name", age: 0 });
user.on("save", () => {
	console.log(user);
});

user.save();
