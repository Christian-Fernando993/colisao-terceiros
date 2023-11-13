"use client";
import Image from "next/image";

import { ContainerGrid } from "../container";
import { UploadIcon } from "@/assets/icons/UploadIcon";
import CNH_Aberta from '@/assets/cnh/cnh.png';

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function Teste() {

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log("A leitura do arquivo foi abortada");
            reader.onerror = () => console.log("A leitura do arquivo falhou");
            reader.onload = () => {
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        });
    },  [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'application/pdf': ['.pdf'],
        },
        onDrop 
    });

    return(
        <ContainerGrid>
            <div className="py-8">
                <div className="items-center @laptop:flex @laptop:justify-between mb-7">
                    <div className="mb-3">
                        <h3 className="text-2xl text-type-blue font-bromny font-semibold mb-3">CNH aberta</h3>
                    </div>
                    <Image className="w-64 flex m-auto @laptop:m-0" src={CNH_Aberta} alt='Foto da CNH' />
                </div>
                <div {...getRootProps()} 
                        className={`m-auto aspect-video flex items-center justify-center border-dashed border-2 cursor-pointer border-gray-600 rounded-xl transition-text easy-in-out duration-500 p-5 @laptop:max-w-2xl
                        ${isDragActive ? 'border-loovi-blue' : 'border-gray-400'} `}>
                        <label htmlFor="dropzone-file">
                            <input {...getInputProps()} className="hidden" type="file" accept=".jpg .jpeg .pdf" placeholder="Clique para selecionar imagem do veiculo" />
                            <UploadIcon className={`w-10 h-10 mb-3 m-auto ${isDragActive ? 'text-loovi-blue' : 'text-type-blue'}`} /> 
                            {
                                isDragActive ? 
                                (
                                    <p className="font-bromny text-loovi-blue ">
                                       <span className="font-bold">Solte </span> 
                                       para adicionar
                                    </p>
                                ) 
                                : 
                                (
                                    <p className="font-bromny text-center text-type-blue cursor-pointer">
                                        <span className="font-bold">Clique aqui para enviar a foto </span>
                                        ou arraste até aqui
                                    </p>
                                )
                            }
                        </label>
                        <input className="hidden"></input>
                    </div>
            </div>
        </ContainerGrid>
    )
}