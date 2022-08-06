import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#00d9d8]">
      <div className="bg-bg1 bg-cover bg-top bg-no-repeat pb-32">
        <div className="bg-white flex justify-between items-center">
          <div className="max-w-[1100px] m-auto px-10 flex flex-1 justify-between">
            <div>
              <Image
                src="/images/logo.png"
                width="128px"
                height="128px"
              />
            </div>
            <div className="text-[#7570B3] flex justify-center items-center gap-10 font-semibold">
              <p>SABER MAIS</p>
              <button className="text-white font-semibold bg-[#6bc9c9] px-10 py-4 rounded-lg">
                REALIZAR INSCRIÇÃO
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-32">
          <p className="text-white font-bold pb-5 text-4xl">Próxima Parada:</p>
          <div className="flex gap-3 justify-center">
            <p className="text-white font-bold mb-5 text-[54px] bg-transparent">Conhecimento</p>
            <div className="flex">
              <p className="text-white font-bold bg-[#f26321] mb-5 text-[54px] bg-transparent">internacional </p>
            </div>
            <p className="text-white font-bold mb-5 text-[54px] bg-transparent">em IS </p>
          </div>
          <p className="text-white font-bold mb-10 text-4xl">O tão esperado momento chegou, TO!</p>
          <p className="text-white mb-10 font-medium text-xl">
            Você pode finalmente realizar a sua assinatura da IS <br></br>Com Ciência e começar a decolar no mundo da IS
          </p>
          <button className="bg-[#f26321] px-24 pb-4 pt-3 rounded-[39px] text-white font-semibold text-2xl" >REALIZAR ASSINATURA</button>
        </div>
      </div>


      <div className="max-w-[1100px] m-auto py-10">
        <div>
          <p className="text-white text-5xl">Para você evoluir na</p>
          <p className="text-white text-5xl leading-relaxed font-bold"><mark className="text-white bg-[#7570B3] p-0">carreira de TO!</mark></p>
        </div>
        <div className="text-white text-xl w-1/2 mt-5 mb-8">
          <p>
            Você terá acesso à resumo dos melhores livros em IS, artigos e pesquisas mais relevantes para você ficar por dentro do que há de mais novo!
          </p>
        </div>
        <div className="flex justify-evenly">
          <div>
            <Image
              src="/images/card.png"
              width="200px"
              height="296px"
            />
          </div>
          <div>
            <Image
              src="/images/card.png"
              width="200px"
              height="296px"
            />
          </div>
          <div>
            <Image
              src="/images/card.png"
              width="200px"
              height="296px"
            />
          </div>
          <div>
            <Image
              src="/images/card.png"
              width="200px"
              height="296px"
            />
          </div>
        </div>
      </div>

      <div className="bg-bg2 bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1100px] m-auto py-10">

          <div className="flex">
            <div className="w-1/2 flex flex-col justify-center">
              <p className="text-white text-[54px] leading-[60px] font-bold">O que você está esperando?</p>
              <p className="text-white text-lg my-5">Dentro da nossa comunidade você encontrará os melhores conteúdos sobre o universo da IS, além de trocar experiências reais com profissionais da área.
              </p>
              <p className="text-white text-xl font-bold mb-5">
                Não existe nada mais poderoso que isso!
              </p>
              <button className="bg-[#f26321] px-10 pb-4 pt-3 rounded-[39px] text-white font-semibold text-2xl">
                NÃO QUERO MAIS PERDER TEMPO
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src="/images/tablet.png"
                width="756px"
                height="756px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] m-auto py-24">
        <div className="flex gap-10">
          <div className="w-1/2">
            <Image
              src="/images/pc.png"
              width="460px"
              height="220px"
            />
          </div>
          <div className="w-1/2">
            <p className="text-white text-4xl font-bold">Assista quando quiser.</p>
            <p className="text-white text-4xl font-bold">De qualquer dispositivo.</p>
            <p className="text-white text-base my-5">Baixe as aulas e assista offline no app. Assista no tablet, no computador, no celular ou em outros aparelhos, a qualquer hora, em qualquer lugar. Não existem mais desculpas para não começar agora.</p>
            <small className="text-white text-xs font-semibold">*A oferta de 15 dias grátis é válida somente para inscrições feitas nesta página.</small>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] m-auto py-20 text-center">
        <p className="text-white text-5xl font-bold">Descubra por que</p>
        <p className="text-white text-5xl font-bold leading-[85px]"><mark className="text-white bg-[#f26321]">a IS Com Ciência</mark> foi feita para você.</p>
        <p className="text-white text-lg leading-tight px-10 mt-5">
          Assista esse trecho de uma de nossas aulas e entenda porque nós somos a plataforma sobre IS ideal para você expandir seus conhecimentos . Através de exemplos práticos e com forte conteúdo teórico, fornecemos as ferramentas certas para o você desenvolver. Assista!
        </p>
        <div className="">
          <iframe className="mx-auto w-[90%]" src="https://player.vimeo.com/video/732180675?h=db862d66aa" width="700" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div className="max-w-[1100px] m-auto py-20 text-center">
        <p>Comece a aprender agora</p>
        <p>Tenha acesso imediato ao conteúdo mais completo sobre integração sensorial, avaliação, tratamentos,etc,etc,etc.</p>
        <div className="flex gap-8">
          <div className="bg-[rgba(120,113,183,0.7)] rounded-xl px-10 py-5 w-1/2 min-h-[600px] flex flex-col relative">
            <p>MENSAL</p>
            <span>R$</span><span>149,90</span>
            <div className="text-left text-white flex flex-col gap-2 my-10">
              <p><span>✔️</span><span>Conteúdos básicos</span></p>
              <p><span>✔️</span><span>Limite de visualização de 5 conteúdos por mês</span></p>
              <p><span>✔️</span><span>15 dias de acesso grátis na pré-inscrição</span></p>
              <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>
              <p><span>✔️</span><span>Visualização completa dos artigos</span></p>
              <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>

            </div>
            <button className="bg-[#f26321] px-10 pb-4 pt-3 rounded-xl text-white font-semibold text-xl">
              ASSINE AGORA
            </button>
          </div>

          <div className="bg-[rgba(120,113,183,0.7)] rounded-xl px-10 py-5 w-1/2 min-h-[600px] flex flex-col relative">
            <p>MENSAL</p>
            <span>R$</span><span>149,90</span>
            <div className="text-left text-white flex flex-col gap-2 my-10">
              <p><span>✔️</span><span>Conteúdos básicos</span></p>
              <p><span>✔️</span><span>Limite de visualização de 5 conteúdos por mês</span></p>
              <p><span>✔️</span><span>15 dias de acesso grátis na pré-inscrição</span></p>
              <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>
              <p><span>✔️</span><span>Visualização completa dos artigos</span></p>
              <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>

            </div>
            <button className="bg-[#f26321] px-10 pb-4 pt-3 rounded-xl text-white font-semibold text-xl">
              ASSINE AGORA
            </button>
          </div>


          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
