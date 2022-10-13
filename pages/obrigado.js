import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function obrigado() {
    return (
        <div className='bg-slate-100 min-h-screen w-full gap-5 flex flex-col text-white items-center justify-center'>
            <Image
                src="/images/logo.png"
                width="120px"
                height="120px"
            />
            <h1 className='text-3xl text-center lg:text-5xl font-bold text-slate-700'>Recebemos a sua inscrição!</h1>
            <h2 className='mb-10 text-2xl text-center font-semibold text-slate-600'>Fique atento ao seu e-mail que em breve enviaremos seus dados de acesso</h2>
            <button className="bg-[#f26321] hover:bg-white hover:text-[#f26321] hover:shadow-md px-10 lg:px-24 pb-4 pt-3 rounded-md text-white font-semibold text-xl lg:text-2xl transition-all" >
                <Link href="/">
                    <a>
                        Voltar à Página Inicial
                    </a>
                </Link>
            </button>
        </div>
    )
}
