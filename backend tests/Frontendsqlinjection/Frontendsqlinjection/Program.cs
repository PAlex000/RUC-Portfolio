using Npgsql;

string departmentId = "Biology"; // Replace this with the actual department name
string connString = "Host=localhost;Username=postgres;Password=Ronja;Database=unismall";

try
{
    using (var conn = new NpgsqlConnection(connString))
    {
        conn.Open();
        using (var cmd = new NpgsqlCommand("SELECT * FROM safe_course(@DepartmentID)", conn))
        {
            cmd.Parameters.AddWithValue("DepartmentID", departmentId);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Console.WriteLine($"{reader.GetString(0)}, {reader.GetString(1)}, {reader.GetString(2)}, {reader.GetInt32(3)}");
                    // Adjust the Get methods based on the actual data types of your columns
                }
            }
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine("Error: " + ex.Message);
}
