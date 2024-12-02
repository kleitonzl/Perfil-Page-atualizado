
import connection from '../config/conn.js';

const saveComment = (req, res) => {
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: 'Por favor, forneça um comentário.' });
  }

  
  const query = `
    INSERT INTO comentarios (comentario)
    VALUES (?)
  `;

  connection.query(query, [comment], (err, result) => {
    if (err) {
      console.error('Erro ao salvar comentário:', err);
      return res.status(500).json({ message: 'Erro ao salvar comentário no banco.' });
    }
    res.status(201).json({ message: 'Comentário salvo com sucesso!' });
  });
};

export { saveComment };
