using AutoMapper.Configuration;
using capstone.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Data
{

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public IConfiguration Configuration { get; }
        public DbSet<Book> Books { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public ApplicationDbContext() : base(new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlite("Data Source=app.db").Options, null)
        {

        }

        //Seeded data table
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Book>().HasData(
            new Book
            {
                Id = 1,
                Title = "BookTitle",
                Author = "BookAuthor",
                SeriesName = "BookSeriesName",
                SeriesNumber = 1,
                UserId = " "
            },
            new Book
            {
                Id = 2,
                Title = "BookTitle2",
                Author = "BookAuthor",
                SeriesName = "BookSeriesName",
                SeriesNumber = 2,
                UserId = " ",
            },
            new Book
            {
                Id = 3,
                Title = "BookTitle3",
                Author = "BookAuthor",
                SeriesName = "BookSeriesName",
                SeriesNumber = 3,
                UserId = " ",
            }
            );
            base.OnModelCreating(builder);
        }
    }
}
