// Retorna 5 vendedores com mais produtos disponiveis em ordem descrecente
db.products.aggregate(
    [
        {
            $match: {
                status: "Actived"
            }
        },
        {
            $group: {
                _id: "$seller.cpfCnpj",
                totalItems: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                totalItems: -1
            }
        },
        {
            $limit: 5
        }
    ]
)