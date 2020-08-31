import React from "react"
import { Helmet } from "react-helmet"
import StyledLeftBg from "../components/left"
import StyledRightBg from "../components/right"
import Layout from "../components/layout"
import socialBanner from "../images/og.png"

export default () => (
  <main>
    <Helmet>
      <html lang="es" />
      <title>
        DreaMx, desarrollo de contenido y marketing para redes sociales
      </title>
      <description>
        Desarrollo de estrategias de marketing para redes sociales, fotografía
        de producto, e-commerce, plataformas. Potenciamos tu marca a través de
        la creación de contenido para redes sociales como facebook e instagram.
      </description>
      <meta property="og:image" content={socialBanner} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="DreaMx, desarrollo de contenido y marketing para redes sociales"
      />
      <meta
        property="og:description"
        content="Desarrollo de estrategias de marketing para redes sociales, fotografía
        de producto, e-commerce, plataformas. Potenciamos tu marca a través de
        la creación de contenido para redes sociales como facebook e instagram."
      />
      <meta property="og:url" content="https://dreamx.mx" />
      <meta property="og:updated_time" content="2020-08-30" />
    </Helmet>
    <Layout>
      <StyledLeftBg />
      <StyledRightBg />
    </Layout>
  </main>
)
