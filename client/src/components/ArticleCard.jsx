import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ArticleCard = ({ article, onSummarize }) => {
  return (
    <Card className="article-card" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Author: {article.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content.substring(0, 100)}... {/* Show a preview of the content */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Views: {article.views} | Shares: {article.shares}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSummarize(article.id)}
          sx={{ marginTop: 1 }}
        >
          Summarize
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;