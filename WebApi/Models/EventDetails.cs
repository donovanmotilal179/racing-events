namespace WebApi.Models
{
  public class EventDetails
  {
    public int Id { get; set; }
    public string Race_name { get; set; } = "";
    public string Time_of_race { get; set; } = "";
    public string Distance_of_race { get; set; } = "";
    public int Num_of_particpating_horses { get; set; }
    public int Num_of_particpating_jockeys { get; set; }
    public DateTime CreatedAt { get; set; }
    public int EventId { get; set; }
    public Event? Event { get; set; }
  }
}
