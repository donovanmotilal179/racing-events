using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
  public class EventDto
  {
    [Required]
    [MaxLength(500)]
    public string Event_name { get; set; } = "";
    [Required]    
    public string Date_of_event { get; set; } = "";
    [Required]
    [MaxLength(300)]
    public string Event_location { get; set; } = "";
    [Required]
    public decimal Entry_fee { get; set; }
    [Required]
    public DateTime CreatedAt { get; set; }
    public ICollection<EventDetails>? EventDetails { get; }
  }
}
