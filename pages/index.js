import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Void Avengers</h1>
            </Widget.Header>

            <Widget.Content>
              <form onSubmit={function (infoEvent) {
                infoEvent.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo submissão');
              }}
              >
                <input
                  onChange={function (infoEvent) {
                    console.log(infoEvent.target.value);
                    setName(infoEvent.target.value);
                  }}
                  placeholder="Informe seu nick:"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quiz da Galera</h1>

              <p>lorem ipson dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/XatubaPox/voidavengers-quiz" />
      </QuizBackground>
    </>
  );
}
