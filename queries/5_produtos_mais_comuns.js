// Retorna uma lista em ordem descrescente dos 5 produtos mais comuns no marketplace
db.products.aggregate([
    {
        $group: {
            _id: "$productType",
            total: {
                    $sum: 1
                }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $limit: 5
    }
])