// "use client";

// import React, { useCallback, useState, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import Image from "next/image";


// export function fotos(){
//     const [files, setFiles] = useState([]);

//     const onDrop = useCallback((acceptedFiles) => {
//         acceptedFiles.forEach((file) => {
//             const reader = new FileReader()

//             reader.onabort = () => console.log("A leitura do arquivo foi abortada");
//             reader.onerror = () => console.log("A leitura do arquivo falhou");
//             reader.onload = () => {
//                 const binaryStr = reader.result
//                 console.log(binaryStr)
//             }
//             reader.readAsArrayBuffer(file)
//         });
//     },  [])

//     const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ 
//         accept: {
//             'image/png': ['.png'],
//             'image/jpg': ['.jpg'],
//             'image/jpeg': ['.jpeg'],
//             'application/pdf': ['.pdf'],
//         },
//         onDrop: acceptedFiles => {
//             setFiles(acceptedFiles.map(file => Object.assign(file, {
//                 preview: URL.createObjectURL(file)
//             })))
//         }
//     });

//     const thumbs = files.map(file => (
//         <div className="inline-flex rounded-lg my-4 w-full h-full box-border justify-center" key={file.name}>
//             <div className="flex min-w-0 overflow-hidden">
//                 <Image className="block w-auto h-full rounded-lg" alt="Foto da CNH" width={500} height={500} src={file.preview} onLoad={() => { URL.revokeObjectURL(file.preview) }}/>
//             </div>
//         </div>
//     ));

//     useEffect(() => {
//         return () => files.forEach(file => URL.revokeObjectURL(file.preview))
//     });

//     const removeFile = (file) => () => {
//         const newFiles = [...files]
//         newFiles.splice(newFiles.indexOf(file), 1)
//         setFiles(newFiles)
//     }

//     const myFiles = acceptedFiles.map(file => (
//         <li key={file.path} className="flex justify-center ">
//             <button 
//                 className="w-32 h-14 bg-red-600 font-bromny rounded-lg text-base text-white mt-4" 
//                 onClick={removeFile(file)}>Remover image</button>
//         </li>
//     ))
// } 


