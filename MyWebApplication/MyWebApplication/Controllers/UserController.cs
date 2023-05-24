using Microsoft.AspNetCore.Mvc;
using MyWebApplication.Dto;
using MyWebApplication.Model;

namespace MyWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public List<User> mockUsers = new List<User>
        {
            new User
            {
                Name= "Test",
                Email= "adresse@example.fr",
                Password = "mdp",
            }, 
            new User
            {
                Name= "TestB",
                Email = "adresseB@example.fr",
                Password = "mdpAdmin"
            }
        };

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> LoginAttempt([FromBody] LoginAttemptDtoInput loginAttempt)
        {
            bool success = mockUsers.Any(x => x.Email == loginAttempt.Email && x.Password == loginAttempt.Password);

            if(success)
            {
                return Ok();
            }
            else
            {
                return BadRequest("Invalid credentials");
            }
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult> RegistrationAttempt([FromBody] RegistrationAttemptDtoInput registrationAttempt)
        {
            if(registrationAttempt.Email.Length < 1)
            {
                throw new NotSupportedException();
            }

            return Ok("Ok '" + registrationAttempt.Email + "' , you are now registered. ");
        }



    }
}
