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
                _id: "$seller.cpfCnpj",
                totalItems: {
                    $sum: 1
                }
            }
        },
        {
            $lookup: {
                from: "sellers",
                localField: "_id",
                foreignField: "cpfCnpj",
                as: "seller"
            }
        },
        {
            $sort: {
                totalItems: -1
            }
        }
    ]
)
