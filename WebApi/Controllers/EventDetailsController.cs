using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventDetailsController : ControllerBase
    {
    private readonly ApplicationDbContext context;
    public EventDetailsController(ApplicationDbContext context)
    {
      this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<EventDetails>>> GetEventDetails()
    {
      return Ok(await context.EventDetails
              .OrderByDescending(e => e.Id)
              .ToListAsync());
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<EventDetails>> GetEventDetailsById(int Id)
    {
      var evt_det = await context.EventDetails.FindAsync(Id);

      if (evt_det == null)
        return NotFound();

      return Ok(evt_det);
    }   

    [HttpPost]
    public async Task<ActionResult> CreateEventDetails(EventDetailsDto eventDetailsDto)
    {
      var evt_det = new EventDetails
      {
          Distance_of_race = eventDetailsDto.Distance_of_race,
          Num_of_particpating_horses = eventDetailsDto.Num_of_particpating_horses,
          Num_of_particpating_jockeys = eventDetailsDto.Num_of_particpating_jockeys,
          Race_name = eventDetailsDto.Race_name,
          Time_of_race = eventDetailsDto.Time_of_race,
          CreatedAt = DateTime.Now,          
          EventId = eventDetailsDto.EventId
         
      };

      context.EventDetails.Add(evt_det);
      await context.SaveChangesAsync();

      return Ok(evt_det);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> EditEventDetails(int id, EventDetailsDto eventDetailsDto)
    {
      var evt_det = await context.EventDetails.FindAsync(id);
      if (evt_det == null)
        return NotFound();

      evt_det.Distance_of_race = eventDetailsDto.Distance_of_race;
      evt_det.Time_of_race = eventDetailsDto.Time_of_race;
      evt_det.Num_of_particpating_jockeys = eventDetailsDto.Num_of_particpating_jockeys;
      evt_det.Num_of_particpating_horses = eventDetailsDto.Num_of_particpating_horses;
      evt_det.Race_name = eventDetailsDto.Race_name;
      evt_det.EventId = eventDetailsDto.EventId;

      await context.SaveChangesAsync();

      return Ok(evt_det);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteEvent(int id)
    {
      var evt_det = await context.EventDetails.FindAsync(id);
      if (evt_det == null)
        return NotFound();

      context.EventDetails.Remove(evt_det);
      await context.SaveChangesAsync();

      return Ok(evt_det);
    }
  }
}
