using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
  public class EventDetailsDto
  {
    [Required]
    [MaxLength(300)]
    public string Race_name { get; set; } = "";
    [Required]
    public string Time_of_race { get; set; } = "";
    [Required]
    public string Distance_of_race { get; set; } = "";
    [Required]
    public int Num_of_particpating_horses { get; set; }
    [Required]
    public int Num_of_particpating_jockeys { get; set; }
    [Required]
    public DateTime CreatedAt { get; set; }
    [Required]
    public int EventId { get; set; }    
    public Event? Event { get; set; }
  }
}
