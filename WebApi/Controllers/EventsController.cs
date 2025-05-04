using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public EventsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetEvents()
        {
            return Ok(await context.Events
              .OrderByDescending(e => e.Id)
              .ToListAsync());           
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Event>> GetEventById(int Id)
        {
            var evt = await context.Events.FindAsync(Id);

            if (evt == null)
              return NotFound();

            return Ok(evt);
        }

        [HttpPost]
        public async Task<ActionResult> CreateEvent(EventDto eventDto)
        {
            var evt = new Event
            {
              Date_of_event = eventDto.Date_of_event,
              Entry_fee = eventDto.Entry_fee,
              Event_location = eventDto.Event_location,
              Event_name = eventDto.Event_name,
              CreatedAt = DateTime.Now,              
            };

            context.Events.Add(evt);
            await context.SaveChangesAsync();

            return Ok(evt);
        }

        [HttpPut("{id}")]
        public async Task <ActionResult> EditEvent(int id, EventDto eventDto)
        {
            var evt = await context.Events.FindAsync(id);
            if (evt == null)
                return NotFound();

            evt.Event_location = eventDto.Event_location;
            evt.Event_name = eventDto.Event_name;
            evt.Entry_fee = eventDto.Entry_fee;
            evt.CreatedAt = eventDto.CreatedAt;
            evt.Date_of_event = eventDto.Date_of_event;
     
            await context.SaveChangesAsync();

            return Ok(evt);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var evt = await context.Events.FindAsync(id);
            if (evt == null)
              return NotFound();

            context.Events.Remove(evt);
            await context.SaveChangesAsync();

            return Ok(evt);
        }
    }
}
