using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDTO
{
    [Required] 
    public string UserName { get; set; } = "";
    
    [Required] 
    public string Email { get; set; } = "";
    
    [Required] 
    [MinLength(4)] 
    public string Password { get; set; } = "";
}