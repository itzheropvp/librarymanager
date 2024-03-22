"use client";
import { libraryAPI } from "@/utils/libraryAPI";
import { useParams } from "next/navigation";
import { useState } from "react";
import BookCard from '@/components/BookCard';
import { Box, Button, Grid, Snackbar, Typography } from "@mui/material";

// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// TESTING ONLY (TO REMOVE)
const books = [
    { id: 1, rating: 4.5, title: "Five Nights at Freddy's Fazbear Frights Collection 1", author: ' di Scott Cawthon (Autore), Elley Cooper (Autore), Carly Anne West (Autore), Didi Esmeralda (Illustratore), & 1 altro', cover: 'https://m.media-amazon.com/images/I/91In1Ona67L._SY466_.jpg', description: "What do you wish for most? It's a question that Oswald, Sarah, and Oscar think they know the answer to. Oswald wishes his summer wasn't so boring, Sarah wishes to be beautiful, and Oscar wishes to get his hands on the mechanical toy that's out of stock all over town. But in the twisted world of Five Nights at Freddy's, their hearts' deepest desires have an unexpected cost. In this volume, three stories from the New York Times bestselling series Five Nights at Freddy's: Fazbear Frights come to life in delightfully horrifying comics. Readers beware: This collection of terrifying tales is enough to unsettle even the most hardened Five Nights at Freddy's fans." },
    { id: 2, rating: 4.6, title: "Five Nights at Freddy's. The silver eyes. Il graphic novel", author: 'di Scott Cawthon (Autore), Kira Breed-Wrisley (Autore), Claudia Schröder (Illustratore), Maria Bastanzetti (Traduttore)', cover: 'https://m.media-amazon.com/images/I/51Wgs9az-7L._SY445_SX342_.jpg', description: "Sono passati dieci anni dai terribili rapimenti avvenuti al Freddy Fazbear, il ristorante del padre di Charlie. Eppure lei e i suoi amici – John, Carlton, Jessica, Marla e Lamar – non sono mai riusciti a superare veramente la scomparsa di Michael. Ora che sono di nuovo tutti riuniti in citta per commemorare l’anniversario della tragedia, decidono di tornare a vedere che fine ha fatto il vecchio ristorante, chiuso e abbandonato da anni. Quando i ragazzi trovano un modo per entrare, si rendono conto che le cose non sono rimaste quelle di un tempo. I quattro animatroni che una volta intrattenevano i clienti, ora sono programmati per uccidere." },
];

export default async function Page() {
    const params = useParams();
    const genreId = params.id[0];
    const lib = new libraryAPI();
    const response = await lib.getGenreByName(null, genreId);
    return (response != undefined) ? (
        <>
            <Box style={{ marginBottom: '2%' }}>
                <Grid container spacing={1}>
                    <Grid item spacing={3}>
                        <Button variant="contained" href="/"><ArrowBackIcon /> Torna Indietro</Button>
                    </Grid>
                    <Grid item spacing={3}>
                        <Button variant="contained" color="success" href="/"><AddIcon /> Aggiungi Libro</Button>
                    </Grid>
                    <Grid item spacing={3}>
                        <Button variant="contained" color="error" href="/"><DeleteForeverIcon /> Rimuovi Libro</Button>
                    </Grid>
                    <Grid item spacing={3}>
                        <Button variant="contained" color="warning" href="/"><AutoFixHighIcon /> Modifica Libro</Button>
                    </Grid>
                </Grid>
                <Typography variant="h4" sx={{ textAlign: 'left', paddingTop: '1%' }}>{response.description}</Typography>
            </Box>
            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item key={book.id} xs={12} sm={6} md={4}>
                        <BookCard title={book.title} author={book.author} cover={book.cover} description={book.description} rating={book.rating} />
                    </Grid>
                ))}
            </Grid>
        </>
    ) : (
        <>
            <Alert severity="error">Questo genere non è stato trovato nel nostro database. <a className="text-blue-500" href="/">Torna indietro</a> e controlla</Alert>
        </>
    )
}