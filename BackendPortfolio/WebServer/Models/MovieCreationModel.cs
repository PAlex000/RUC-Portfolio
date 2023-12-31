﻿using WebServer.Controllers;

namespace WebServer.Models;
public class MovieCreationModel
{
    public string Id { get; set; }
    public string type { get; set; }
    public bool isAdult { get; set; }
    public string startYear { get; set; }
    public string endYear { get; set; }
    public string poster { get; set; }
    public string description { get; set; }
    public int? rating { get; set; }
    public List<AkasCreationModel> akas { get; set; }
}
