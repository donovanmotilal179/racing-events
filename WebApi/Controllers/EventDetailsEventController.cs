using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventDetailsEventController : ControllerBase
    {
      private readonly ApplicationDbContext context;
      public EventDetailsEventController(ApplicationDbContext context)
      {
        this.context = context;
      }

      [HttpGet("{Id}")]
      public async Task<ActionResult<EventDetails>> GetEventDetailsByEventId(int Id)
      {
        var evt_det = await context.EventDetails
                    .Where(e => e.EventId == Id)
                    .ToListAsync();

        if (evt_det == null)
          return NotFound();

        return Ok(evt_det);
      }
    }
}
