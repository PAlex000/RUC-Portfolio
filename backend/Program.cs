using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Movie> movies = new List<Movie>();
            // Initialize some sample movies.
            movies.Add(new Movie { TitleID = 1, AverageRating = 1.2 });
            movies.Add(new Movie { TitleID = 2, AverageRating = 3.4 });
            movies.Add(new Movie { TitleID = 3, AverageRating = 2.3 });

            Console.WriteLine("Welcome to the Movie/TV Show Rating System!");
            while (true)
            {
                Console.WriteLine("\nChoose an option:");
                Console.WriteLine("1. List Movies/TV Shows");
                Console.WriteLine("2. Rate a Movie/TV Show");
                Console.WriteLine("3. Exit");
                Console.Write("Enter your choice: ");

                if (int.TryParse(Console.ReadLine(), out int choice))
                {
                    switch (choice)
                    {
                        case 1:
                            //getRatings();
                            Console.WriteLine("You chose 1");
                            break;
                        case 2:
                            //RatingService.RateMovie(choice);
                            Console.WriteLine("You chose", choice);
                            break;
                        case 3:
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
