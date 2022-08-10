import Head from "next/head";
import Image from "next/image";
import Slide from "../components/Slide";
import Script from 'next/script';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>IS com Ciência | Assine</title>
        <meta description="Assine agora a plataforma IS Com Ciência e decole no mundo da Integração Sensorial"/>
      </Head>
      <div className="bg-[#00d9d8]">
        <div className="bg-bg1 bg-cover bg-top bg-no-repeat pb-10  lg:pb-20 lg:pb-32">
          <div className="bg-white lg:pb-0 flex justify-between items-center">
            <div className="max-w-[1100px] m-auto px-10 flex flex-1 justify-between">
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  width="80px"
                  height="80px"
                />
              </div>
              <div className="text-[#7570B3] lg:px-20 flex flex-1 justify-end lg:justify-end items-center gap-10 font-semibold">
                <button className="text-white flex-end font-semibold bg-[#6bc9c9] px-8 py-3 rounded-lg">
                  <Link href="#sale">
                    <a>
                      Faça sua Assinatura!
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 lg:pt-32 px-10">
            <p className="text-white font-bold text-[35px] lg:text-4xl mb-5">Próxima Parada:</p>
            <p className="text-white font-bold text-[45px] lg:text-[54px] mb-5">Conhecimento <mark className="text-white bg-[#f26321]">internacional</mark> em IS </p>
            <p className="text-white font-bold mb-10 text-4xl">O tão esperado momento chegou, TO!</p>
            <p className="text-white mb-10 font-medium text-xl">
              Assine agora a plataforma IS Com Ciência e decole no mundo da Integração Sensorial
            </p>
            <button className="bg-[#f26321] px-10 lg:px-24 pb-4 pt-3 rounded-[39px] text-white font-semibold text-xl lg:text-2xl" >
              <Link href="#sale">
                <a>
                  REALIZAR ASSINATURA
                </a>
              </Link>
            </button>
          </div>
        </div>


        <div className="max-w-[1100px] m-auto py-10 px-10">
          <div>
            <p className="text-white text-[2rem] font-semibold lg:text-5xl">Para você evoluir na</p>
            <p className="text-white text-[2rem] lg:text-5xl font-bold"><mark className="text-white bg-[#7570B3] lg:leading-snug">carreira de TO!</mark></p>
          </div>
          <div className="text-white text-xl lg:w-1/2 mt-5 mb-8">
            <p>
              Você terá acesso à resumo dos melhores livros em IS, artigos e pesquisas mais relevantes para você ficar por dentro do que há de mais novo!
            </p>
          </div>
          <div className="">

            <Slide />

          </div>
        </div>

        <div className="bg-bg2 bg-cover bg-center px-10 bg-no-repeat">
          <div className="max-w-[1100px] m-auto py-10">

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <p className="text-white text-[2rem] lg:text-[54px] leading-none lg:leading-[60px] font-bold">O que você está esperando?</p>
                <p className="text-white text-base lg:text-xl my-5">Dentro da nossa comunidade você encontrará os melhores conteúdos sobre o universo da IS, além de trocar experiências reais com profissionais da área.
                </p>
                <p className="text-white text-base lg:text-xl font-bold mb-5">
                  Nós TO&apos;s sabemos o quanto isso é poderoso
                </p>
                <button className="bg-[#f26321] px-5 lg:px-10 pb-4 pt-3 rounded-[39px] text-white font-semibold lg:text-2xl">
                  <Link href="#sale">
                    <a>
                      Quero participar agora!
                    </a>
                  </Link>
                </button>
              </div>
              <div className="lg:w-1/2 pt-10 lg:pt-0">
                <Image
                  src="/images/tablet.png"
                  width="756px"
                  height="756px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-[1100px] px-10 m-auto py-10 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <Image
              src="/images/pc.png"
              width="460px"
              height="220px"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-white text-[2rem] leading-none lg:leading-normal lg:text-4xl font-bold">Assista quando quiser.</p>
            <p className="text-white text-[2rem] leading-none lg:leading-normal lg:text-4xl font-bold">De qualquer dispositivo.</p>
            <p className="text-white text-base leading-tight lg:text-xl my-5">Baixe as aulas e assista offline no app. Assista no tablet, no computador, no celular ou em outros aparelhos, a qualquer hora, em qualquer lugar. Não existem mais desculpas para não começar agora.</p>
            <small className="text-white text-xs font-semibold">*A oferta de 15 dias grátis é válida somente para inscrições feitas nesta página.</small>
          </div>
        </div>
      </div> */}

        <div className="max-w-[1100px] m-auto px-10 lg:py-20 text-center">
          <p className="text-white text-3xl lg:text-5xl leading-[50px] lg:leading-[85px] font-bold">Descubra por que</p>
          <p className="text-white text-3xl lg:text-5xl font-bold leading-[50px] lg:leading-[85px]"><mark className="text-white bg-[#f26321]">a IS Com Ciência</mark> foi feita para você.</p>
          <p className="text-white text-base lg:text-xl leading-tight lg:px-10 mt-5">
            Assista a esse trecho de uma de nossas aulas!
            Conteúdo com embasamento teórico e acessível para você expandir seus conhecimentos.
          </p>
          <div className="lg:mt-10 py-5">
            <iframe className="mx-auto w-[100%] lg:min-h-[600px]" width="560" height="315" src="https://www.youtube.com/embed/kg5pa0qGL10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="w-full m-auto lg:px-10 pt-20 pb-8 text-center bg-white">
          <p className="text-[#00caca] text-3xl lg:text-5xl font-bold">Comece a aprender agora</p>
          <p className="text-[#00caca] text-xl leading-tight px-5 lg:px-10 mt-5">Tenha acesso imediato a conteúdos sobre Integração Sensorial, incluindo avaliação, tratamentos, pesquisas científicas e muito mais! </p>
        </div>
        <div id="sale" className="w-full bg-white py-8">
          <Script async src="https://js.stripe.com/v3/pricing-table.js" />
          <stripe-pricing-table pricing-table-id="prctbl_1LUtENHkgARQtT4YHOakHBT8"
            publishable-key="pk_live_51LT3HgHkgARQtT4Y4TqMcWip7g0PqrFLyfvFw5tY1OKmdjxROd2Y6YcTJ2Wsqbe0X7a9YV0VpqJ2oKXkHKwjk3gB00Fj1ptsfr">
          </stripe-pricing-table>
        </div>
        <footer className="bg-[#f26321]   px-10 lg:px-20 pt-5 pb-3">
          <div className="max-w-[1100px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto">


            <div>
              <Image
                src="/images/logo2.png"
                width="51px"
                height="51px"
              />
            </div>
            <div>
              <p className="text-white text-xs lg:text-sm">2022 © IS Com Ciência. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
