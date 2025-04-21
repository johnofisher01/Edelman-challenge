import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Highlights = ({ mostViewed, mostShared }) => {
  return (
    <div className="highlights">
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Most Viewed Article
          </Typography>
          <Typography variant="subtitle1">{mostViewed?.title || "N/A"}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Most Shared Article
          </Typography>
          <Typography variant="subtitle1">{mostShared?.title || "N/A"}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Highlights;