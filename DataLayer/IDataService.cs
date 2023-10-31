using System.Collections.Generic;

namespace DataLayer
{
    public interface IDataService
    {

        IList<Genres> GetGenre();
        Genres? GetGenre(int id);
        Genres? CreateGenre(string name);
        bool DeleteGenre(Genres genre);
        bool DeleteGenre(int id);
        bool UpdateGenre(int id, string name);
       
    }
}