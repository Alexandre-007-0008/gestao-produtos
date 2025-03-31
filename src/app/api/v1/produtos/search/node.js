app.get('/api/v1/produtos/search', async (req, res) => {
    const { name } = req.query;
    try {
      const produtos = await Produto.find({ name: { $regex: name, $options: 'i' } });
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
  });



  //provavelmente está errado isso