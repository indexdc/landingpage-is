import Image from "next/image";
import Slide from "../components/Slide";


export default function Home() {
  return (
    <div className="bg-[#00d9d8]">
      <div className="bg-bg1 bg-cover bg-top bg-no-repeat pb-10   lg:pb-20 lg:pb-32">
        <div className="bg-white pb-5 lg:pb-0 flex justify-between items-center">
          <div className="max-w-[1100px] px-10 m-auto px-10 flex flex-col lg:flex-row flex-1 justify-between">
            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                width="128px"
                height="128px"
              />
            </div>
            <div className="text-[#7570B3] lg:px-20 flex flex-col lg:flex-row flex-1 justify-center items-center gap-10 font-semibold">
              <p>SABER MAIS</p>
              <button className="text-white font-semibold bg-[#6bc9c9] px-10 py-4 rounded-lg">
                REALIZAR INSCRIÇÃO
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 lg:pt-32 px-10">
          <p className="text-white font-bold text-[35px] lg:text-4xl mb-5">Próxima Parada:</p>
          <p className="text-white font-bold text-[45px] lg:text-[54px] mb-5">Conhecimento <mark className="text-white bg-[#f26321]">internacional</mark> em IS </p>
          <p className="text-white font-bold mb-10 text-4xl">O tão esperado momento chegou, TO!</p>
          <p className="text-white mb-10 font-medium text-xl">
            Você pode finalmente realizar a sua assinatura da IS <br></br>Com Ciência e começar a decolar no mundo da IS
          </p>
          <button className="bg-[#f26321] px-10 lg:px-24 pb-4 pt-3 rounded-[39px] text-white font-semibold text-xl lg:text-2xl" >REALIZAR ASSINATURA</button>
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
                Não existe nada mais poderoso que isso!
              </p>
              <button className="bg-[#f26321] px-5 lg:px-10 pb-4 pt-3 rounded-[39px] text-white font-semibold lg:text-2xl">
                NÃO QUERO MAIS PERDER TEMPO
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

      <div className="max-w-[1100px] px-10 m-auto py-10 lg:py-24">
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
      </div>

      <div className="max-w-[1100px] m-auto px-10 lg:py-20 text-center">
        <p className="text-white text-3xl lg:text-5xl leading-[50px] lg:leading-[85px] font-bold">Descubra por que</p>
        <p className="text-white text-3xl lg:text-5xl font-bold leading-[50px] lg:leading-[85px]"><mark className="text-white bg-[#f26321]">a IS Com Ciência</mark> foi feita para você.</p>
        <p className="text-white text-base lg:text-xl leading-tight lg:px-10 mt-5">
          Assista esse trecho de uma de nossas aulas e entenda porque nós somos a plataforma sobre IS ideal para você expandir seus conhecimentos . Através de exemplos práticos e com forte conteúdo teórico, fornecemos as ferramentas certas para o você desenvolver. Assista!
        </p>
        <div className="lg:mt-10">
          <iframe className="mx-auto w-[100%]" src="https://player.vimeo.com/video/732180675?h=db862d66aa" width="600" height="500" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      <div className="max-w-[1100px] m-auto lg:px-10 py-20 text-center">
        <p className="text-white text-3xl lg:text-5xl font-bold">Comece a aprender agora</p>
        <p className="text-white text-xl leading-tight px-5 lg:px-10 mt-5">Tenha acesso imediato ao conteúdo mais completo sobre integração sensorial, avaliação, tratamentos,etc,etc,etc.</p>
        <div className="flex flex-col lg:flex-row gap-8 mt-10 px-5 lg:px-0">
          <div className="bg-[rgba(120,113,183,0.7)] rounded-xl px-5 lg:px-10 py-5 lg:w-1/2 lg:min-h-[600px] flex flex-col">
            <div className="flex flex-col flex-1">
              <p className="font-medium text-[#00caca] text-2xl">MENSAL</p>
              <div>
                <span className="text-white italic">R$</span><span className="text-white text-5xl font-bold italic">149,90</span>

              </div>
              <div className="text-left text-white flex flex-col gap-1 my-10 ">
                <p><span>✔️</span><span>Conteúdos básicos</span></p>
                <p><span>✔️</span><span>Limite de visualização de 5 conteúdos por mês</span></p>
                <p><span>✔️</span><span>15 dias de acesso grátis na pré-inscrição</span></p>
                <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>
                <p><span>✔️</span><span>Visualização completa dos artigos</span></p>
                <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>

              </div>

            </div>
            <button className="bg-[#f26321] items-end px-10 pb-4 pt-3 rounded-xl text-white font-semibold text-xl">
              ASSINE AGORA
            </button>
          </div>

          <div className="bg-[#7871b7] rounded-xl px-5 lg:px-10 py-5 lg:w-1/2 lg:min-h-[600px] flex flex-col">
            <div className="flex flex-col flex-1">
              <p className="font-medium text-[#00caca] text-2xl">MENSAL</p>
              <div>
                <span className="text-white italic">R$</span><span className="text-white text-5xl font-bold italic">199,90</span>

              </div>
              <div className="text-left text-white flex flex-col gap-1 my-10">
                <p><span>✔️</span><span>Conteúdos básicos</span></p>
                <p><span>✔️</span><span>Acesso ilimitado aos conteúdos</span></p>
                <p><span>✔️</span><span>15 dias de acesso grátis na pré-inscrição</span></p>
                <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>
                <p><span>✔️</span><span>Visualização completa dos artigos</span></p>
                <p><span>✔️</span><span>Acesso às aulas legendadas</span></p>
                <p><span>✔️</span><span>1 evento ao vivo no mês</span></p>
                <p><span>✔️</span><span>Descontos nos cursos IS Descomplicada e cursos Joyce Marques</span></p>
                <p><span>✔️</span><span>Download dos artigos</span></p>
                <p><span>✔️</span><span>Desconto com parceiros em cursos e produtos terapêuticos</span></p>

              </div>

            </div>
            <button className="bg-[#f26321] px-10 pb-4 pt-3 rounded-xl text-white font-semibold text-xl">
              ASSINE AGORA
            </button>
          </div>
        </div>
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
  )
}
