import Image from 'next/image'

import { ContainerGrid } from '@/components/container'
import Logo from '@/assets/logo_loovi_branco.svg'

export function Header() {
    return(
        <header className='sticky top-0 left-0 w-full py-10 @desktop:py-10 bg-loovi-blue z-50'>
            <ContainerGrid className="flex items-center justify-between">
                <Image  src={Logo} alt='Logo da Loovi'/>
                <h2 className='text-branco font-bromny font-light text-base @tablet:text-2xl '>
                    Olá, Seja bem-vindo
                </h2>
            </ContainerGrid>
        </header>
    )
}