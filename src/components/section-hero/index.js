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

export function SectionHero() {
    return(
        <section className="pt-24">
            <ContainerGrid className='flex flex-col'>
                <h2 className="text-3xl text-type-blue font-bromny font-semibold pb-3">EVIDÊNCIA DO SINISTRO</h2>
                <p className="font-bromny text-type-blue pb-10">Faça o upload das fotos do veículo.</p>
                
                {/* Foto da CNH Aberta */}
                <div className="py-5">
                    <div className="flex items-center justify-around">
                        <h3 className="text-2xl text-type-blue font-bromny font-semibold">CNH aberta</h3>
                        <span>Foto enviada reprovada, favor enviar nova foto.</span>
                        <Image className="w-64" src={CNH_Aberta} alt='Foto da CNH'/>
                    </div>

                    <form class="flex items-center space-x-6 justify-center">
                        <label class="block">
                            <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                            <input type="file" 
                                class="block w-full text-sm text-gray-900 
                                file:mr-4 file:py-2 file:px-4 
                                file:rounded-full file:border-0 file:text-sm 
                                file:font-semibold file:bg-violet-500 file:text-violet-900 
                                hover:file:bg-turquooise"/>
                        </label>
                    </form>
                </div>

                {/* Foto da CLRV ou Nota Fiscal */}
                <div className="py-5">
                    <div className="flex items-center justify-around pb-10">
                        <h3 className="text-2xl text-type-blue font-bromny font-semibold">CLRV ou nota fiscal</h3>
                        <Image className="w-64" src={CRLV} alt='Foto da CNH'/>
                    </div>

                    <form class="flex items-center space-x-6 justify-center">
                        <label class="block">
                            <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                            <input type="file" 
                                class="block w-full text-sm text-gray-900 
                                file:mr-4 file:py-2 file:px-4 
                                file:rounded-full file:border-0 file:text-sm 
                                file:font-semibold file:bg-violet-500 file:text-violet-900 
                                hover:file:bg-turquooise"/>
                        </label>
                    </form>
                </div>

                {/* Foto Boletim de Ocorrencia */}
                <div className="py-5">
                    <div className="flex items-center justify-around pb-10">
                        <h3 className="text-2xl text-type-blue font-bromny font-semibold">Boletim de ocorrência</h3>
                        <Image className="w-64" src={Boletim} alt='Foto da CNH'/>
                    </div>

                    <form class="flex items-center space-x-6 justify-center">
                        <label class="block">
                            <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                            <input type="file" 
                                class="block w-full text-sm text-gray-900 
                                file:mr-4 file:py-2 file:px-4 
                                file:rounded-full file:border-0 file:text-sm 
                                file:font-semibold file:bg-violet-500 file:text-violet-900 
                                hover:file:bg-turquooise"/>
                        </label>
                    </form>
                </div>

                {/* Fotos dos danos do veiculo */}
                <div >
                    {/* Dano 1 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 1</h3>
                            <Image className="w-64" src={Danos_01} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 2 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 2</h3>
                            <Image className="w-64" src={Danos_02} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 3 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 3</h3>
                            <Image className="w-64" src={Danos_03} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 4 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 4</h3>
                            <Image className="w-64" src={Danos_04} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 5 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 5</h3>
                            <Image className="w-64" src={Danos_05} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 6 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 6</h3>
                            <Image className="w-64" src={Danos_06} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>

                    {/* Danos 7 */}
                    <div className="py-5">
                        <div className="flex items-center justify-around pb-10">
                            <h3 className="text-2xl text-type-blue font-bromny font-semibold">Dano 7</h3>
                            <Image className="w-64" src={Danos_07} alt='Foto da CNH'/>
                        </div>

                        <form class="flex items-center space-x-6 justify-center">
                            <label class="block">
                                <span class="sr-only ">Clique para selecionar imagem da CNH</span>
                                <input type="file" 
                                    class="block w-full text-sm text-gray-900 
                                    file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm 
                                    file:font-semibold file:bg-violet-500 file:text-violet-900 
                                    hover:file:bg-turquooise"/>
                            </label>
                        </form>
                    </div>
                </div>

            </ContainerGrid>
        </section>
    ) 
}