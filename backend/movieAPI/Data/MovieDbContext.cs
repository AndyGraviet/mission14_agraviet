using System;
using Microsoft.EntityFrameworkCore;

namespace movieAPI.Data
{
	public class MovieDbContext : DbContext
	{
		public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
		public DbSet<MovieList> Movies { get; set; }
	}
}

