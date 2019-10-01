# MEAN_Final_Project: Server for the Capstone Project - Heroes League!
Server for Capstone - Node/Express/PostgreSQL/Sequelize

## Site Author
* **Adam Jacobs** - HartCode Academy 2019

## Data Rendered:

- **Users Data from ProsgreSQL file users**

- GET all users.
GET: http://localhost:3000/users/

- POST for Login.
POST http://localhost:3000/users/login

- POST for Register.
POST http://localhost:3000/users/register

- PUT users for editing user email.
PUT http://localhost:3000/users/:id

- DELETE user.
DELETE http://localhost:3000/users/:id

- **Leagues Data from JSON file leagues**

- GET leagues data.
GET http://localhost:3000/leagues/data

- **Teams Data from JSON file teams**

- GET Teams data.
GET http://localhost:3000/teams/data

- GET teams data by team id.
GET http://localhost:3000/teams/data/:id 

- GET Teams data by league.
GET http://localhost:3000/leagues/data/:id


## Technologies
- HTML5/CSS3/Bootstrap4
- Node.js
- ProgreSQL

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA


## Server and app setup and start
- This assumes that the user has Node.js installed globally on their machine.
```
$ mkdir server
$ cd server
$ npm init
$ npm install 
```

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:54388/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Test
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
+ Test using Postman Collection:
    + MEAN_Final_Project.postman_collection

### Input and Outputs for Testing:
**POST Login**
http://localhost:3000/users/login

Input:
```
username: req.body.user_name
password: req.body.password
```
Output (Positive):
```
{
    "ID": 2,
    "USER_NAME": "Adam",
    "PASSWORD": "password456",
    "EMAIL": "adam456@aol.com",
    "IS_ADMIN": 1,
    "createdAt": "2019-09-27T13:50:44.185Z",
    "updatedAt": "2019-10-01T12:21:59.659Z"
}
```

Output (Negative):
```
{
    "error": "Login User error."
}
```

**POST Register**
http://localhost:3000/users/register

Input:
```
username: req.body.user_name
email: req.body.email
password: req.body.password
```
Output (Positive):
```
{
    "IS_ADMIN": 0,
    "ID": 30,
    "USER_NAME": "Foobar",
    "PASSWORD": "password789",
    "EMAIL": "foobar@test.com",
    "updatedAt": "2019-10-01T13:37:30.122Z",
    "createdAt": "2019-10-01T13:37:30.122Z"
}
```
Output (Negative):
```
{
    "error": "Creating User error."
}
```

**EDIT user**
http://localhost:3000/users/30

Input:
```
email: req.body.email
```
Output (Positive):
```
[
    1,
    [
        {
            "ID": 30,
            "USER_NAME": "Foobar",
            "PASSWORD": "password789",
            "EMAIL": "foobar123@test.com",
            "IS_ADMIN": 0,
            "createdAt": "2019-10-01T13:37:30.122Z",
            "updatedAt": "2019-10-01T13:42:16.553Z"
        }
    ]
]
```
Output (Negative):
```
[
    0
]
```

**DELETE user**
http://localhost:3000/users/20

Output (Positive):
```
1
```
Output (Negative):
```
0
```

**GET User Data**
http://localhost:3000/users/

Output (Positive):
```
    {
        "ID": 1,
        "USER_NAME": "admin",
        "PASSWORD": "password",
        "EMAIL": "admin@aol.com",
        "IS_ADMIN": 1,
        "createdAt": "2019-09-27T13:50:44.185Z",
        "updatedAt": "2019-09-27T13:50:44.185Z"
    },
    {
        "ID": 2,
        "USER_NAME": "Adam",
        "PASSWORD": "password456",
        "EMAIL": "adam456@aol.com",
        "IS_ADMIN": 1,
        "createdAt": "2019-09-27T13:50:44.185Z",
        "updatedAt": "2019-10-01T12:21:59.659Z"
    },
    {
        "ID": 29,
        "USER_NAME": "Bizbaz",
        "PASSWORD": "password",
        "EMAIL": "bizbaz@test.com",
        "IS_ADMIN": 0,
        "createdAt": "2019-10-01T12:40:01.793Z",
        "updatedAt": "2019-10-01T12:40:01.793Z"
    }

Etc.
```
Output (Negative):
```
No Users found
```

**GET Leagues Data**
http://localhost:3000/leagues/data

Output (Positive):
```
[
	{
		"Name": "Superheroes",
		"Code": "Superheroes",
		"Description": "This league consists of Superheroes"
	},
	{
		"Name": "Villains",
		"Code": "Villains",
		"Description": "This league consists of Villains"
	},
	{
		"Name": "Heroes",
		"Code": "Non-Supers",
		"Description": "This league consists Heroes who do not have any superpowers"
    },
    {
		"Name": "Young Heroes",
		"Code": "Lil-Supers",
		"Description": "This league consists young Heroes who are under 20 years old"
	}
]
```
Output (Negative):
```
[]
```

**GET Teams Data**
http://localhost:3000/teams/data

Output (Positive):
```
[
    {
        "TeamId": 1,
        "TeamName": "Justice League",
        "League": "Superheroes",
        "ManagerName": "Superman",
        "ManagerPhone": "REDACTED",
        "ManagerEmail": "superman@aol.com",
        "Image": "justice_league.png",
        "MaxTeamMembers": 7,
        "MinMemberAge": 15,
        "MaxMemberAge": 999,
        "TeamGender": "Any",
        "SuperStatus": "Any",
        "Members": [
            {
                "MemberId": 1,
                "Email": "superman@aol.com",
                "MemberName": "Superman",
                "ContactName": "Lois Lane",
                "SecretIdentity": "Clark Kent",
                "Age": 40,
                "Gender": "Male",
                "Phone": "REDACTED",
                "Image": "supermanflying.png",
                "Description": "Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. To protect his privacy, he changes into a colorful costume and uses the alias \"Superman\" when fighting crime.",
                "SuperStatus": "Superpowers",
                "SuperPowers": [
                    "Superhuman Strength",
                    "Superhuman Endurance",
                    "Superhuman Vision",
                    "Superhuman Breath",
                    "Superhuman Speed",
                    "Invulnerability",
                    "Regenerative Healing",
                    "Flight"
                ],
                "Abilities": [
                    "None"
                ],
                "Gear": [
                    "Superman's Suit"
                ]
            },
Etc.
```
Output (Negative):
```
[]
```

**GET Teams Data by Team Id**
http://localhost:3000/teams/data/2

Output (Positive):
```
{
    "TeamId": 2,
    "TeamName": "X-Men",
    "League": "Superheroes",
    "ManagerName": "Professor Charles Francis Xavier",
    "ManagerPhone": "817-555-5454",
    "ManagerEmail": "Natalie214@aol.com",
    "MinMemberAge": 1,
    "MaxMemberAge": 99,
    "MaxTeamMembers": 6,
    "TeamGender": "Any",
    "SuperStatus": "Any",
    "Members": [
        {
            "MemberId": 8,
            "Email": "Natalie214@aol.com",
            "MemberName": "Wolverine",
            "ContactName": "James \"Logan\" Howlett",
            "SecretIdentity": "James \"Logan\" Howlett",
            "Age": 10,
            "Gender": "Male",
            "Phone": "680-555-5454",
            "Image": "wolverine.jpg",
            "Description": "Cyclops is a member of a subspecies of humans known as mutants, who are born with superhuman abilities. Cyclops can emit powerful beams of energy from his eyes. He cannot control the beams without the aid of special eyewear which he must wear at all times.",
            "SuperStatus": "Superpowers",
            "SuperPowers": [
                "Superhuman Senses",
                "Regenerative Healing",
                "Adamantium-infused Skeleton",
                "Retractable Adamantium Claws"
            ],
            "Abilities": [
                "Animal-like Attributes",
                "Skilled Hand-to-Hand Combatant"
            ],
            "Gear": [
                "None"
            ]
        },
```
Output (Negative):
```
Not Found
```