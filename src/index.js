const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['FullStack Master', 'Java Backend', 'React', 'Gestão de Negócios'];

server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});


server.get('/cursos', (req, res) =>{
  return res.json(cursos);
});

server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});


server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json(cursos);
});


server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
})