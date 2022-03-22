let express = require("express");
let app = express();

app.get("/api/sample-list", (req, res, next) => {
    res.json([
        {
          id: 1,
          text: 'Sample List 1'
        },
        {
          id: 2,
          text: 'Sample List 2'
        },
        {
          id: 3,
          text: 'Sample List 3'
        }
  ]
  );
});

const todoLangMap= [
    {
      lang: 'es',
      todos: [
        {
          id: 1,
          text: 'Estudiar Vue'
        },
        {
          id: 2,
          text: 'Probar vite'
        },
        {
          id: 3,
          text: 'Dormir'
        }
      ]
    },
    {
      lang: 'en',
      todos: [
        {
          id: 1,
          text: 'Study SolidJS'
        },
        {
          id: 2,
          text: 'Test vite'
        },
        {
          id: 3,
          text: 'Sleep'
        }
      ]
    }
  ]

app.get("/api/todo", (req, res, next) => {
    res.json(todoLangMap.find(todoMap => todoMap.lang === req.query.lang)?.todos);
});

const users = [
    {
        id: 1,
        name: 'Manuel',
        age: 25
    },
    {
        id: 2,
        name: 'Paco',
        age: 50
    }
];

app.get("/api/users", (req, res, next) => {
  const foundUser = users.find((user) => user.id === +req.params.id)
  res.status(200).send(users);
});

app.get("/api/user/:id", (req, res, next) => {
    const foundUser = users.find((user) => user.id === +req.params.id)
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).json({message: 'User not found'})
    }   
});

app.listen(process.env.PORT || 5000, () => {
 console.log("Server running on port 3000");
});

