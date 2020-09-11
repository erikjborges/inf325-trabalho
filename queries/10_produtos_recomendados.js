// Retorna a lista dos 10 produtos mais recomendados de acordo com o "rating" do fornecedor e do produto
db.products.find()
            .sort({"seller.rating": -1, "rating": -1})
            .limit(10)