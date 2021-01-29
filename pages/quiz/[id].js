/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
    // <pre style={{ color: 'black' }}>
    //   {JSON.stringify(dbExternal.questions, null, 4)}
    // </pre>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((responseServer) => {
      if (responseServer.ok) {
        return responseServer.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    .then((responseConvertObject) => responseConvertObject)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });

  // console.log('Banco de dados externo:', dbExternal);
  // console.log('Infos Next:', context.query.id);

  return {
    props: {
      dbExternal,
    },
  };
}
