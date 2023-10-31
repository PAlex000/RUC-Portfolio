using Microsoft.EntityFrameworkCore;
<<<<<<< Updated upstream
using DataLayer.Models;
using System.Collections.Generic;
using System.Linq;
=======
>>>>>>> Stashed changes

namespace DataLayer
{

    public class DataService : IDataService
    {
        private readonly MovieContex db = new MovieContex();

        public IList<Genres> GetGenre()
        {
            return db.Genres.ToList();
        }


        public Genres? GetGenre(int genresId)
        {
            return db.Genres.FirstOrDefault(x => x.Id == genresId);
        }


        public Genres? CreateGenre(string name)
        {
            var id = db.Genres.Max(x => x.Id) + 1;
            var genre = new Genres
            {
                Id = id,
                Name = name,
            };
            db.Add(genre);
            db.SaveChanges();
            return genre;

        }


        public bool DeleteGenre(Genres genre)
        {
            return DeleteGenre(genre.Id);
        }

        public bool DeleteGenre(int genreId)
        {
            var genre = db.Genres.FirstOrDefault(x => x.Id == genreId);
            if (genre != null)
            {
                db.Genres.Remove(genre);
                return db.SaveChanges() > 0;
            }
            return false;
        }
        public bool UpdateGenre(int id, string name)
        {
<<<<<<< Updated upstream
            var category = db.Categories.FirstOrDefault(x => x.Id == id);
            if (category != null)
=======
            var genre = GetGenre(id);
            if (genre != null)
>>>>>>> Stashed changes
            {
                genre.Name = name;
                db.Update(genre);
                return db.SaveChanges() > 0;
            }
            return false;
        }
<<<<<<< Updated upstream
        public ProductWithCategoryName GetProduct(int productId)
        {
            Product product = db.Products.FirstOrDefault(x => x.Id == productId);
            Category category = db.Categories.FirstOrDefault(x => x.Id == product.CategoryId);
            ProductWithCategoryName result = new ProductWithCategoryName
            {
                Id = product.Id,
                Name = product.Name,
                UnitPrice = product.UnitPrice,
                QuantityPerUnit = product.QuantityPerUnit,
                UnitsInStock = product.UnitsInStock,
                CategoryName = category.Name
            };
            return result;
        }
        public List<ProductWithCategoryName> GetProductByCategory(int categoryId)
        {
            return db.Products
                .Where(x => x.CategoryId == categoryId)
                .Select(x => new ProductWithCategoryName
                {
                    Id = x.Id,
                    Name = x.Name,
                    UnitPrice = x.UnitPrice,
                    QuantityPerUnit = x.QuantityPerUnit,
                    UnitsInStock = x.UnitsInStock,
                    CategoryName = x.Category.Name
                })
                .ToList();
        }
        public List<ProductAndCategoryNames> GetProductByName(string productName)
        {
            return db.Products
                .Where(x => x.Name.ToLower().Contains(productName.ToLower()))
                .Select(x => new ProductAndCategoryNames { ProductName = x.Name, CategoryName = x.Category.Name })
                .ToList();
        }
=======
>>>>>>> Stashed changes


<<<<<<< Updated upstream
        public List<Order> GetOrders()
        {
            return db.Orders.ToList();
        }

        public List<OrderDetails> GetOrderDetailsByOrderId(int orderId)
        {
            return db.OrderDetails
                .Include(x => x.Product)
                .Where(x => x.OrderId == orderId)
                .ToList();
        }
        public List<OrderDetails> GetOrderDetailsByProductId(int productId)
        {
            return db.OrderDetails
                .Include(x => x.Order)
                .Where(x => x.ProductId == productId)
                .OrderBy(x => x.OrderId)
                .ToList();
        }


=======
>>>>>>> Stashed changes
    }

}