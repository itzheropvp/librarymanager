"use client";

import { libraryAPI } from "@/utils/libraryAPI";
import { Suspense, useState } from "react";

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
              {genres.map((data:any) => (
                <a className="hover:text-red-500 w-25" key={data.genreId} href={`/genre/${data.description}`}>{data.description}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
