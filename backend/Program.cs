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
            using (var context = new MovieContext())
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
                                int grade = int.Parse(Console.ReadLine());

                                Console.Write("Enter Review: ");
                                string review = Console.ReadLine();

                                String rateDate = DateTime.UtcNow.ToString();

                                ratingService.CreateRating(titleId, userId, grade, review, rateDate);
                                var ratinghistory = ratingService.GetRatingHistory();

                                var result = from s in ratinghistory where s.UserID == userId select s;

                                foreach (var ratinghistoryitem in result)
                                {

                                    Console.WriteLine(ratinghistoryitem.TitleID, " Date: ", ratinghistoryitem.RateDate);
                                }

                                Console.WriteLine(titleId);
                                break;

                            case 4:
                                Console.Write("Enter title and user ID to delete rating: ");
                                String titleIdToDel = Console.ReadLine();
                                Console.Write("Enter title and user ID to delete rating: ");
                                int userIdToDel = int.Parse(Console.ReadLine());
                                ratingService.DeleteRating(titleIdToDel, userIdToDel);
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
    }
}
