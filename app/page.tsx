"use client";

import { libraryAPI } from "@/utils/libraryAPI";
import { Suspense, useState } from "react";
import { List, ListItemButton, ListItemText, TableRow } from '@mui/material';
import Link from "next/link";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default async function Home() {
  const lib = new libraryAPI();
  const genres = await lib.getGenres();
  return (
    <>
      <section>
        <div>
          <div className="container mt-5">
            <h1>Benvenuto alla Libreria Online!</h1>
            <p>
              Scopri una vasta selezione di libri di ogni genere. Che tu sia un appassionato di
              fantasia, un amante del giallo o un seguace della scienza fiction, troverai ciò che fa
              per te.
            </p>
            <div className="row row-cols-2 pt-5 row-cols-md-3 g-3">
              <TableRow>
                {genres.map((data: any) => (
                  <Link key={data.genreId} href={`/genre/${data.description}`}>
                    <ListItemButton component="button">
                      <LibraryBooksIcon/> <ListItemText primary={` ${data.description}`}/>
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
