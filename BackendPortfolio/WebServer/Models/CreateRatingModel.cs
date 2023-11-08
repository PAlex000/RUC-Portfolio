using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Webserver.Models
{
	internal class RatingModel
	{
		public string Url { get; set; }
		public string? titleID { get; set; }
		public int userID { get; set; }
	}
}