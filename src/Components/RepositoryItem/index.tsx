import {Box, Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";

export const RepositoryItem = (props: { onClick: () => Promise<boolean>, name: any, description: any, language: any, stars: any }) =>
    <Grid item xs={4}>
        <Card>
            <CardActionArea onClick={props.onClick}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                        {props.description}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="caption" color="text.secondary">
                            {props.language}
                        </Typography>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{display: "flex", alignItems: "center"}}
                        >
                            <StarBorderIcon width={10} height={10} fontSize="small"/>
                            {props.stars}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>