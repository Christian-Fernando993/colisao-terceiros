"use client";
import React, { useState } from "react";
export function RemoveImage(file) {

    const [files, setFiles] = useState([]);

    function removeFile(file) {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }
    return(
        <>
            <div key={file.path} className="flex items-center justify-center mt-4">
                <button className="w-32 h-12 px-2 bg-red-600 hover:bg-red-700 font-bromny rounded-full text-base text-white" 
                    onClick={removeFile(file)}>Remover
                </button>
            </div>   
        </>
    )
}