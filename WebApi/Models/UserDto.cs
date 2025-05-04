using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
  public class UserDto
  {
    [Required]
    [MaxLength(500)]
    public string User_name { get; set; } = "";
    [Required]
    public string Password { get; set; } = "";
    [Required]
    [MaxLength(100)]
    public string User_Type { get; set; } = "Admin";
    [Required]
    public bool Event_Access { get; set; } = false;
    [Required]
    public bool EventDetail_Access { get; set; } = false;
  }
}
