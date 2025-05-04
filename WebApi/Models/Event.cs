namespace WebApi.Models
{
  public class Event
  {
    public int Id { get; set; }
    public string Event_name { get; set; } = "";
    public string Date_of_event { get; set; } = "";
    public string Event_location { get; set; } = "";
    public decimal Entry_fee { get; set; }
    public DateTime CreatedAt { get; set; }
    public ICollection<EventDetails>? EventDetails { get; }
  }
}
