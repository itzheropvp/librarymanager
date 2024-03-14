"use client";
import { libraryAPI } from "@/utils/libraryAPI";
import { useParams } from "next/navigation";
import { useState } from "react";

export default async function Page() {
    const [error, setError] = useState(false);
    const params = useParams();
    const genreId = params.id[0];
    const lib = new libraryAPI();
    const response = await lib.getGenreByName(null, genreId);

    console.log(response);
    return (
        <>
            <div className="pb-5">
                <a href="/">{'<--'} Torna indietro</a>
            </div>
            <h1>Lista titoli <b>{response.description}</b></h1>
        </>
    )
}