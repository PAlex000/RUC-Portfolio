using backend;
using System;

namespace RatingServiceTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a MovieRatingContext (or MovieContext) instance here
            // Replace 'yourConnectionString' with your PostgreSQL connection string
            using (var context = GetContext())
            {
                var ratingService = new RatingService(context);

                Console.WriteLine("Movie/TV Show Rating System Test");

                while (true)
                {
                    Console.WriteLine("\nChoose an option:");
                    Console.WriteLine("1. Rate a Movie/TV Show");
                    Console.WriteLine("2. List Ratings for a Movie/TV Show");
                    Console.WriteLine("3. Update a Rating");
                    Console.WriteLine("4. Delete a Rating");
                    Console.WriteLine("5. Exit");
                    Console.Write("Enter your choice: ");

                    if (int.TryParse(Console.ReadLine(), out int choice))
                    {
                        switch (choice)
                        {
                            case 1:
                                Console.Write("Enter Title ID: ");
                                string titleId = Console.ReadLine();

                                Console.Write("Enter User ID: ");
                                int userId = int.Parse(Console.ReadLine());

                                Console.Write("Enter Rating Value: ");
                                int ratingValue = int.Parse(Console.ReadLine());

                                Console.Write("Enter Review: ");
                                string review = Console.ReadLine();

                                DateTime createdTime = DateTime.UtcNow;

                                ratingService.CreateRating(titleId, userId, ratingValue, review, createdTime);

                                DateTime rateDate = DateTime.UtcNow;

                                ratingService.CreateRating(titleId, userId, ratingValue, review, rateDate);
                                Console.WriteLine("Rating created successfully.");
                                break;

                            case 2:
                                Console.Write("Enter Movie/TV Show ID: ");
                                String titleIdForList = Console.ReadLine();
                                var ratings = ratingService.ReadRatingsForMovie(titleIdForList);
                                foreach (var rating in ratings)
                                {
                                    Console.WriteLine($"Rating ID: {rating.TitleID}, User ID: {rating.UserID}, Rating Value: {rating.Grade}, Review: {rating.ReviewText}");
                                }
                                break;

                            case 3:
                                Console.Write("Enter Rating ID to update: ");
                                String ratingIdToUpdate = Console.ReadLine();
                                Console.Write("Enter New Rating Value: ");
                                int newRatingValue = int.Parse(Console.ReadLine());
                                Console.Write("Enter New Review: ");
                                string newReview = Console.ReadLine();

                                ratingService.UpdateRating(ratingIdToUpdate, newRatingValue, newReview);
                                Console.WriteLine("Rating updated successfully.");
                                break;

                            case 4:
                                Console.Write("Enter Rating ID to delete: ");
                                String ratingIdToDelete = Console.ReadLine();
                                ratingService.DeleteRating(ratingIdToDelete);
                                Console.WriteLine("Rating deleted successfully.");
                                break;

                            case 5:
                                Environment.Exit(0);
                                break;

                            default:
                                Console.WriteLine("Invalid choice. Please try again.");
                                break;
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid input. Please enter a number.");
                    }
                }
            }
        }

        private static MovieContext GetContext() => new MovieContext("host=localhost;db=movie;uid=postgres;pwd=Ronja");
    }
}
