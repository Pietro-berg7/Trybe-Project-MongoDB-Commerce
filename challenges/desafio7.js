db.produtos.find(
  {
    tags: {
      $exists: false,
    },
    quantidade: {
      $ne: 50,
    },
  },
  {
    nome: 1,
    vendidos: 1,
    _id: 0,
  },
);
