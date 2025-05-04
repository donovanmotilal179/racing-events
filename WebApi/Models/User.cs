namespace WebApi.Models
{
  public class User
  {
    public int Id { get; set; }
    public string User_name { get; set; } = "";
    public string Password { get; set; } = "";
    public string User_Type { get; set; } = "Admin";
    public bool Event_Access { get; set; } = false;
    public bool EventDetail_Access { get; set; } = false;
  }
}
