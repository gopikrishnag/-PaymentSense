using Newtonsoft.Json;
using Paymentsense.Coding.Challenge.Api.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public class RegionService : IRegionService
    {
        //TODO: Move to app.settings
        private const string BaseUrl = "https://restcountries.com/v2/continent/";
        private readonly HttpClient _client;

        public RegionService(HttpClient client)
        {
            _client = client;
        }


        public async Task<List<CountryDetails>> GetAllCountryDetailsAsync(string regionName)
        {
            var httpResponse = await _client.GetAsync($"{BaseUrl}{regionName}");

            if (!httpResponse.IsSuccessStatusCode)
            {
                throw new Exception("Cannot retrieve countryDetails");
            }

            var content = await httpResponse.Content.ReadAsStringAsync();
            var countryDetails = JsonConvert.DeserializeObject<List<CountryDetails>>(content);

            return countryDetails;
        }
    }
}
