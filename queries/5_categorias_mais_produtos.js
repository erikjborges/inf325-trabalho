// Retorna as 5 categorias com mais produtos disponiveis em ordem descrecente
db.products.aggregate(
    [
        {
            $match: {
                status: "Actived"
            }
        },
        {
            $unwind: "$categories"
        },
        {
            $group: {
                _id: "$categories",
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
