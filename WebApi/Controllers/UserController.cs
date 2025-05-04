using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    //[Route("api/[controller]")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
    private readonly ApplicationDbContext context;
    public UserController(ApplicationDbContext context)
    {
      this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<User>>> GetUsers()
    {
      return Ok(await context.Users
              .OrderByDescending(e => e.Id)
              .ToListAsync());
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<User>> GetUserById(int Id)
    {
      var usr = await context.Users.FindAsync(Id);

      if (usr == null)
        return NotFound();

      return Ok(usr);
    }

    [HttpPost]
    public async Task<ActionResult<User>> UserLogin(UserDto userDto)
    {
      var usr = await context.Users
                      .Where(e => e.User_name == userDto.User_name
                      && e.Password == userDto.Password)
                      .ToListAsync();
                      

      if (usr == null)
        return NotFound();

      return Ok(usr);
    }


    [HttpPost]
    public async Task<ActionResult> CreateUser(UserDto userDto)
    {
      var usr = new User
      {
          EventDetail_Access = userDto.EventDetail_Access,
          Event_Access = userDto.Event_Access,
          Password = userDto.Password,
          User_name = userDto.User_name,
          User_Type = userDto.User_Type,
      };

      context.Users.Add(usr);
      await context.SaveChangesAsync();

      return Ok(usr);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> EditUser(int id, UserDto userDto)
    {
      var usr = await context.Users.FindAsync(id);
      if (usr == null)
        return NotFound();

      usr.EventDetail_Access = userDto.EventDetail_Access;
      usr.Event_Access = userDto.Event_Access;
      usr.User_Type = userDto.User_Type;
      usr.User_name = userDto.User_name;
      usr.Password = userDto.Password;

      await context.SaveChangesAsync();

      return Ok(usr);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteUser(int id)
    {
      var usr = await context.Users.FindAsync(id);
      if (usr == null)
        return NotFound();

      context.Users.Remove(usr);
      await context.SaveChangesAsync();

      return Ok(usr);
    }
  }
}
