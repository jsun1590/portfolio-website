import React from "react";
import Head from "next/head";

interface Props {
  title: string,
  desc: string,
}

const Meta = (props: Props) => {
  return (
    <Head>
      <title>{props.title + " | Jack Sun"}</title>
      <meta name={props.desc} content="content" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;