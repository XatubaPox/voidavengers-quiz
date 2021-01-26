import Head from 'next/head';
import React from 'react';
import db from '../../../db.json';

export default function QuizHead() {
  return (
    <Head>
      <title>{db.title}</title>
      <meta name="author" content={db.author} />
      <meta name="title" content={db.title} />
      <meta name="description" content={db.description} />

      <meta property="og:title" content={db.title} />
      <meta property="og:image" content={db.bg} />
      <meta property="og:url" content="https://voidavengers-quiz.xatubapox.vercel.app/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={db.bg} />
      <meta property="twitter:url" content="https://voidavengers-quiz.xatubapox.vercel.app/" />
      <meta property="twitter:title" content={db.title} />
      <meta property="twitter:description" content={db.description} />
      <meta property="twitter:image" content={db.bg} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
  );
}
