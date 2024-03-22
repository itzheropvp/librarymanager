"use client";
import { libraryAPI } from "@/utils/libraryAPI";
import { useParams } from "next/navigation";
import { useState } from "react";
import BookCard from '@/components/BookCard';
import { Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alert from '@mui/material/Alert';

export default async function Page() {
    const params = useParams();
    const genreId = params.id[0];
    const lib = new libraryAPI();
    const response = await lib.getGenreByName(null, genreId);
    return (response != undefined) ? (
        <>
            <Box>
                <Button variant="contained" href="/"><ArrowBackIcon /> Torna Indietro</Button>
            </Box>
            <Box sx={{paddingTop: '2%'}}>
                <Typography variant="h4" sx={{textAlign: 'left'}}>{response.description}</Typography>
            </Box>

            <Grid container spacing={4} style={{padding:24}}>
                <Grid item xs={16} sm={6} lg={4} xl={3}>
                    <BookCard name="Five Nights at Freddy's - Into The Pit" description="In this volume, horror master Scott Cawthon spins three sinister novella-length stories from different corners of his series' canon. Each story comes complete with accompanying artwork from fan-favorite game artist LadyFiszi, who brings the horror to life in startling new ways"/>
                </Grid>
            </Grid>
        </>
    ) : (
        <>
            <Alert severity="error">Questo genere non è stato trovato nel nostro database. <a className="text-blue-500" href="/">Torna indietro</a> e controlla</Alert>
        </>
    )
}