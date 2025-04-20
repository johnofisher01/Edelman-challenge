const { Pool } = require("pg"); 

async function connectToRDS() {
  try {
    const pool = new Pool({
      host: "articles-dashboard.cr8eeq2k4s4r.eu-west-2.rds.amazonaws.com", 
      user: "postgres", 
      password: "123PostGres!", 
      database: "articles-dashboard", 
      port: 5432, 
    });

    console.log("Connected to RDS successfully!");

    
    const result = await pool.query("SELECT NOW()");
    console.log("Current time from database:", result.rows[0].now);

  
    await pool.end();
    console.log("Connection closed successfully!");
  } catch (error) {
    console.error("Error connecting to RDS:", error.message);
    throw error;
  }
}


(async () => {
  try {
    await connectToRDS();
  } catch (error) {
    console.error("Failed to connect to RDS:", error.message);
  }
})();