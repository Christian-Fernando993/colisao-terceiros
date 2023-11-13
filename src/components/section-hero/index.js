"use client";
// import useState from "react";
import React, { useCallback, useState, useEffect } from "react";

import { useDropzone } from "react-dropzone";

import Image from "next/image";

import { ContainerGrid } from "../container";

import CNH_Aberta from '@/assets/cnh/cnh.png';
import CRLV from '@/assets/crlv/clrv.png';
import Boletim from '@/assets/boletim-ocorrencia/boletim.png'

import Danos_01 from '@/assets/danos-veiculo/dano-primeira-foto.png'
import Danos_02 from '@/assets/danos-veiculo/dano-segunda-foto.png';
import Danos_03 from '@/assets/danos-veiculo/dano-terceira-foto.png';

import Danos_04 from '@/assets/danos-veiculo/veiculo-dianteira-direita.png';
import Danos_05 from '@/assets/danos-veiculo/veiculo-traseira-direita.png';
import Danos_06 from '@/assets/danos-veiculo/veiculo-dianteira-esquerda.png';
import Danos_07 from '@/assets/danos-veiculo/veiculo-traseira-esquerda.png';
import { UploadIcon } from "@/assets/icons/UploadIcon";
// import { FileIcon } from "@/assets/icons/FileIcon";


export function SectionHero() {

    const [files, setFiles] = useState([]);

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
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
        }
    });

    const thumbs = files.map(file => (
        <div className="inline-flex rounded-lg mr-2 mb-2 w-full h-full p-4 box-border justify-center" key={file.name}>
            <div className="flex min-w-0 overflow-hidden">
                <img className="block w-auto h-full" src={file.preview} onLoad={() => { URL.revokeObjectURL(file.preview) }}/>
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, []);


    return (
        <section className="pt-8 @tablet:pt-20">
            <ContainerGrid className='flex flex-col'>
                <h2 className="text-2xl @laptop:text-3xl text-type-blue font-bromny font-semibold @laptop:pb-3">EVIDÊNCIA DO SINISTRO</h2>
                <p className="font-bromny text-type-blue">Faça o upload das fotos do veículo.</p>

                {/* Foto da CNH Aberta */}
                <div className="py-8">
                    <div className="items-center @laptop:flex @laptop:justify-between mb-7">
                        <div className="mb-3">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold mb-3">CNH aberta</h3>
                        </div>
                        <Image className="w-64 flex m-auto @laptop:m-0" src={CNH_Aberta} alt='Foto da CNH' />
                    </div>

                    {/* Forma 01 de Enviar a foto */}
                    <div {...getRootProps()} 
                        className={`m-auto aspect-video flex items-center justify-center border-dashed border-2 cursor-pointer border-gray-600 rounded-xl transition-text easy-in-out duration-500 p-5 @laptop:max-w-2xl
                        ${isDragActive ? 'border-loovi-blue' : 'border-gray-400'} `}>
                        <label htmlFor="dropzone-file">
                            <input {...getInputProps()} className="hidden" type="file" accept=".jpg .jpeg .pdf" placeholder="Clique para selecionar imagem do veiculo" />
                            <UploadIcon className={`w-10 h-10 mb-3 m-auto cursor-pointer ${isDragActive ? 'text-loovi-blue' : 'text-gray-400'}`} /> 
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
                                        <p className="font-bold">Arquivos suportados</p>
                                        <span>PDF, JPG, PNG</span>
                                    </p>
                                )
                            }
                        </label>
                        <input className="hidden"></input>
                    </div>

                    {/* Mostra a imagem importada */}
                    <aside className="flex flex-row flex-wrap mb-4">
                        {thumbs}
                    </aside>
                </div>
            </ContainerGrid>
        </section>
    )
}