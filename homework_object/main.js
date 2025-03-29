const user = {
    nika: {
        age: 17,
        isStudent: true,
        sayHello(name) {
            console.log(`Hello, ${name}!`)
        }
    }
}

user.nika.sayHello('you')


const users = [
    {
        name: 'jo',
        age: 21,
        isAnAdmin: true
    },
    {
        name: 'anne',
        age: 25,
        isAnAdmin: true
    },
    {
        name: 'ruby',
        age: 25,
        isAnAdmin: false
    },
    {
        name: 'jack',
        age: 27,
        isAnAdmin: false
    }
]

let regularUsersCount = 0;
function WhoIsAnAdmin(users) {
    for (let i = 0; i < users.length; i++) {
        if (!users[i].isAnAdmin) {
            regularUsersCount++;
        }
    }
}

WhoIsAnAdmin(users)
console.log("количество проcтых ползователей: ", regularUsersCount)
console.log(users)


