import Head from "next/head";
import Image from "next/image";
import Slide from "../components/Slide";
import Script from 'next/script';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { useRef } from "react";


export default function Plano() {
  const ref = useRef(null)


  return (
    <>
      <Head>
        <title>Escolha o seu plano da plataforma IS com Ciência</title>
        <meta description="Assine agora a plataforma IS Com Ciência e decole no mundo da Integração Sensorial" />
      </Head>
      <div ref={ref} className="bg-[#00d9d8]">
        <div className="w-full m-auto lg:px-10 pt-20 pb-8 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: "+130px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-[#00caca] text-3xl lg:text-5xl font-bold">Escolha o seu plano IS com Ciência</p>
            <p className="text-[#00caca] text-xl leading-tight px-5 lg:px-10 mt-5">Tenha acesso imediato a conteúdos sobre Integração Sensorial, incluindo avaliação, tratamentos, pesquisas científicas e muito mais! </p>

          </motion.div>
        </div>
        <div id="sale" className="w-full bg-white py-8">
          <div>
            <Script async src="https://js.stripe.com/v3/pricing-table.js" />
            {/* <stripe-pricing-table pricing-table-id="prctbl_1LUtENHkgARQtT4YHOakHBT8"
              publishable-key="pk_live_51LT3HgHkgARQtT4Y4TqMcWip7g0PqrFLyfvFw5tY1OKmdjxROd2Y6YcTJ2Wsqbe0X7a9YV0VpqJ2oKXkHKwjk3gB00Fj1ptsfr">
            </stripe-pricing-table> */}
            <stripe-pricing-table pricing-table-id="prctbl_1LsZrRKjphwQv85saDzHgvfl"
              publishable-key="pk_live_51LnnUXKjphwQv85sGu3j3pxp96gYWGsQFuMyMkhqhlAOCU2MxHlxGkZRFK5B5r7ZGdKQ3EGFnhLi72bxZsY1Nh8v00at0giBHz">
              </stripe-pricing-table>
              {/** <!-- Tabela nova -->*/}
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
      </div >
    </>
  )
}
