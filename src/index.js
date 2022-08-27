const express = require('express');

const server = express();

server.use(express.json());

const cursos = [
  {
    id: 1,
    name: 'FullStack Master'
  },
  {
    id: 2,
    name: 'Mergulhador Spring Boot'
  },
  {
    id: 3,
    name: 'Especialista Frontend'
  }
];

server.get('/cursos/:id', (req, res) => {
  const { id } = req.params;
  return res.json(cursos[id]);
});


server.get('/cursos', (req, res) =>{
  return res.json(cursos);
});

server.post('/cursos', (req, res) => {
  const { id, name } = req.body;

  const curso = {
    id: id,
    name: name
  }

  cursos.push(curso);

  return res.json(cursos);
});


server.put('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const curso = {
    id: id,
    name: name
  }

  const index = cursos.findIndex(curso => curso.id === 1);

  cursos[index].name = name;

  return res.json(cursos);
});

server.delete('/cursos/:id', (req, res) => {
  const { id } = req.params;

  cursos.splice(id, 1);

  return res.json(cursos);
});


server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
})