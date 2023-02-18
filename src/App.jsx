import React from "react"
import { Button, Typography, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"
import { ContainerStyles } from "./style"

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={ContainerStyles}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello This is a long paragraph for seeing the material UI. I am trying Material UI first time, and I am really liking it. I am planning to do a project in Next.js with material UI with Serverless functions.
                        </Typography>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(() => (
                            <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                    style={{paddingTop: "56.25%", marginTop: "2%"}}
                                    >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a section to describe description.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                        
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Copywrite 2023, something to write here
                </Typography>
            </footer>
        </>
    )
}
