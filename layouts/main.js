import Header from "../components/header";
import Head from "next/head";
import { initGA, logPageView } from '../utils/analytics'
import React, { useEffect } from "react";
import "../public/app.scss";



const Page = ({ minimal, children, className }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
          integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header minimal={minimal} />
      <div className={className}>{children}</div>
    </div>
  )
};
export default Page;