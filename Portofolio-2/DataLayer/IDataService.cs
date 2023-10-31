using System.Collections.Generic;

namespace DataLayer
{
    public interface IDataService
    {
<<<<<<< Updated upstream
        IList<Category> GetCategories();
        Category? GetCategory(int categoryId);
        ProductWithCategoryName GetProduct(int productId);

        Order GetOrder(int orderId);
        Category CreateCategory(string name, string description);
        bool UpdateCategory(int id, string name, string description);
        bool DeleteCategory(Category category);
        bool DeleteCategory(int categoryId);


        List<ProductWithCategoryName> GetProductByCategory(int categoryId);
        List<ProductAndCategoryNames> GetProductByName(string productName);
        List<Order> GetOrders();
        List<OrderDetails> GetOrderDetailsByOrderId(int orderId);
        List<OrderDetails> GetOrderDetailsByProductId(int productId);



=======
        IList<Genres> GetGenre();
        Genres? GetGenre(int id);
        Genres? CreateGenre(string name);
        bool DeleteGenre(Genres genre);
        bool DeleteGenre(int id);
        bool UpdateGenre(int id, string name);
       
>>>>>>> Stashed changes
    }
}