using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public BookController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            if (userId == null)
            {
                return _context.Books;
            }
            return _context.Books.Where(b => b.UserId == userId);
        }
        
        [HttpPost]
        public Book Post([FromBody] Book book)
        {
            book.UserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _context.Add(book);
            _context.SaveChanges();

            return book;
        }
    }
}
