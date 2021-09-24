
using Paymentsense.Coding.Challenge.Api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        private readonly IRegionService _regionService;
        public RegionController(IRegionService regionService)
        {
            _regionService = regionService;
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetCountryDetailsAsync(string name)
        {

            var courtryDetails = await _regionService.GetAllCountryDetailsAsync(name);

            return Ok(courtryDetails);
        }


    }
}
