db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      ultimaModificacao: {
        $currentDate: {
          field: true,
        },
      },
    },
  },
);

db.produtos.find(
  {
    ultimaModificacao: {
      $exists: true,
    },
  },
  {
    nome: 1,
    _id: 0,
  },
);
