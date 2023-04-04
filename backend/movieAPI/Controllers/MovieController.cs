using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movieAPI.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace movieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;
        // GET: /<controller>/
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<MovieList> Get()
        {
            var x = context.Movies.Where(e => e.Edited == "Yes").OrderBy(e => e.Title).ToArray();
            return x;
        }
    }
}

