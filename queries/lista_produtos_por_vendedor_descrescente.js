// Retorna quantidade de produtos disponiveis por vendedor em ordem descrecente
db.products.aggregate(
    [
        {
            $match: {
                status: "Actived"
            }
        },
        {
            $group: {
                _id: "$seller",
                totalItems: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                totalItems: -1
            }
        }
    ]
)
