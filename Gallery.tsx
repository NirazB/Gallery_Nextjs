"use client";
import React, { useEffect, useState } from 'react';
import cloudinary from 'cloudinary';
import { CldImage } from 'next-cloudinary';

type SearchResult = {
    public_id: string;
}

const MAX_COLUMS = 4;


const Gallery = async () => {
    
    const results= await cloudinary.v2.search
    .expression("resource_type: image")
    .sort_by("public_id", "desc")
    .max_results(50)
    .execute() as {resources: SearchResult[]};
    
    function getColumns(colIndex: number)
    {
        return results.resources.filter(
            (resource,idx)=> idx % MAX_COLUMS == colIndex
        )
    }

    return (
        <section className="w-screen h-full bg-blue-200">
            <div className="h-1/3 bg-slate-900 flex justify-center text-center">
            <h1 className="text-3xl font-extrabold text-white p-3">Gallery</h1>
            </div>
            <div className="mt-10 grid grid-cols-4  gap-2">

                {[
                    getColumns(0),getColumns(1),getColumns(2), getColumns(3),].map(column=> 
                <div className="flex flex-col gap-4">
                    {column.map((result)=>(
                        <CldImage
                            key={result.public_id}
                            width="400"
                            src={result.public_id}
                            height="300"
                            sizes="100vw"
                            alt="picture"
                            className="cursor-pointer hover:opacity-70 "
                        />
                    ))}

                </div>
                
                )}


            </div>
        </section>
    );
};

export default Gallery;
