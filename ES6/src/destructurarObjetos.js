const users = {
    name: 'Angie',
    email: 'angie@gmail.com',
    age: 30,
    country: 'Colombia'
}

const {name, email, country} = users;
const showInfo = ({name, email,  country}) => console.log(`${name} is from ${country}`);
showInfo(users);