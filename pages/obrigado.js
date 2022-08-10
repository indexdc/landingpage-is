import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function obrigado() {
    return (
        <div className='bg-[#00d9d8] min-h-screen w-full gap-5 flex flex-col text-white items-center justify-center'>
            <Image
                src="/images/logo2.png"
                width="120px"
                height="120px"
            />
            <h1 className=' text-3xl text-center lg:text-5xl font-bold'>Recebemos a sua inscrição!</h1>
            <h2 className='text-3xl text-center font-semibold'>Fique atento ao seu e-mail que em breve enviaremos seus dados de acesso</h2>
            <button className="bg-[#f26321] px-10 lg:px-24 pb-4 pt-3 rounded-[39px] text-white font-semibold text-xl lg:text-2xl" >
                <Link href="/">
                    <a>
                        Voltar à Home
                    </a>
                </Link>
            </button>
        </div>
    )
}
