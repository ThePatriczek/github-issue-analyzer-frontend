import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { FC } from "react";
import { useOwnerPage } from "./useOwnerPage";

export const OwnerPageView: FC<ReturnType<typeof useOwnerPage>> = ({
  repositories,
  onCardClick,
}) => (
  <Grid container spacing={1}>
    {repositories?.map(({ name, description, language, stars }) => (
      <Grid item xs={4}>
        <Card>
          <CardActionArea onClick={onCardClick(name)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {language}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <StarBorderIcon width={10} height={10} fontSize="small" />
                  {stars}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
);
