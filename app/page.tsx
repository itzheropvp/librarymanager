"use client";

import { libraryAPI } from "@/utils/libraryAPI";
import { Suspense, useState } from "react";
import { List, ListItemButton, ListItemText, TableRow, Typography, Box } from '@mui/material';
import Link from "next/link";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default async function Home() {
  const lib = new libraryAPI();
  const genres = await lib.getGenres();
  return (
    <>
      <section>
        <div>
          <Box>
            <Typography variant="h4" sx={{ textAlign: 'left' }}>Benvenuto alla Libreria Online!!</Typography>
            <Typography variant="subtitle1" style={{color: 'gray'}}>Scopri una vasta selezione di libri di ogni genere. Che tu sia un appassionato di
              fantasia, un amante del giallo o un seguace della scienza fiction, troverai ciò che fa
              per te.</Typography>
          </Box>
          <div className="container">
            <div className="row row-cols-2 pt-5 row-cols-md-3 g-3">
              <TableRow>
                {genres.map((data: any) => (
                  <Link key={data.genreId} href={`/genre/${data.description}`}>
                    <ListItemButton component="button">
                      <ListItemText primary={`${data.description}`} secondary={<Typography variant="body2" style={{ color: 'gray' }}>Ti piace <b style={{ color: '#FFFFFF' }}>{data.description}</b>? Questo è il posto perfetto!</Typography>} />
                    </ListItemButton>
                  </Link>
                ))}
              </TableRow>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
