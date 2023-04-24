db.produtos.find(
  {
    curtidas: {
      $gt: 50,
    },
  },
  {
    nome: 1,
    _id: 0,
  },
);
