using Newtonsoft.Json;
using System.Collections.Generic;

namespace Paymentsense.Coding.Challenge.Api.Models
{
    public class CountryDetails
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("alpha3Code")]
        public string CountryCode { get; set; }

        [JsonProperty("continent")]
        public string Continent { get; set; }

        [JsonProperty("capital")]
        public string Capital { get; set; }

        [JsonProperty("population")]
        public int Population { get; set; }


        [JsonProperty("currencies")]
        public List<Currency> Currencies { get; set; }


        [JsonProperty("flags")]
        public List<string> Flags { get; set; }
    }
}
