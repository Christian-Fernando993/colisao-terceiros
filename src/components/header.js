import Image from 'next/image'

import { ContainerGrid } from '@/components/container'
import Logo from '@/assets/logo_loovi_branco.svg'

export function Header() {
    return(
        <header className='sticky top-0 left-0 w-full @desktop:py-10 @laptop:py-5 bg-loovi-blue'>
            <ContainerGrid className="flex items-center justify-between">
                <Image  src={Logo} alt='Logo da Loovi'/>
                <h2 className='text-branco font-bromny text-2xl font-semibold'>
                    Olá Cristiano, 
                    <span className='font-light'> Seja bem-vindo</span>
                </h2>
            </ContainerGrid>
        </header>
    )
}