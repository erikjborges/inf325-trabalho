// Retorna uma lista em ordem descrescente dos 5 produtos mais comuns entre diferentes vendedores (ou seja, produtos que aparecem em mais vendedores diferentes)
db.products.aggregate([
    {
        $group: {
            _id: "$productType",
            sellers: {
                    $addToSet: "$seller.cpfCnpj"
                }
        }
    },
    {
        $project: {
            _id: 1,
            qtySellers: { $size: "$sellers" }
        }
    },
    {
        $sort: {
            qtySellers: -1
        }
    },
    {
        $limit: 5
    }
])