// const user = { name: "simran", id: "simsim@gmail.com" };

// const updatedUser = { ...user, city: "Chandigarh" };

// console.log(updatedUser);

// forEach, map, filter

const users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

const mapFirstName = users.map((user) => user.first_name);

const forEachFirstName = users.forEach((user) => {
  return user.id === 5 && (user.first_name = "Lovedeep");
});

const filterFirstName = users.filter((user) => user.first_name === "Tracey");

// console.log("map", mapFirstName);
// console.log("ForEach", forEachFirstName);
// console.log("Filter", filterFirstName);
console.log(users);

if (1 === 3) {
  console.log("This is equal");
} else {
  console.log("Not Equal");
}

1 === 3 ? console.log("This is equal") : console.log("Not Equal");

if (1 === 3) {
  console.log("This is equal");
}

1 === 3 && console.log("This is equal");
