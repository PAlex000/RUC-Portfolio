﻿namespace WebServer.Models
{
    public class CreatePersonModel
    {
        public string Id { get; set; }
        public string primaryName { get; set; }
        public string dateOfBirth { get; set; }

        public string? dateOfDeath { get; set; }
    }
}
