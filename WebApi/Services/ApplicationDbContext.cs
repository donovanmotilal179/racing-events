using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Services
{
  public class ApplicationDbContext : DbContext
  {
      public ApplicationDbContext(DbContextOptions options) : base(options)
      {

      }

      public DbSet<Event> Events { get; set; }
      public DbSet<EventDetails> EventDetails { get; set; }
      public DbSet<User> Users { get; set; }
  }
}
