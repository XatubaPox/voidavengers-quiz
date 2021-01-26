import Head from 'next/head'
import db from '../../../db.json'

export default function QuizHead() {
    return (
        <Head>
            <title>Quiz Void Avengers</title>
            <meta property="og:image" content={db.bg}/>
            <meta property="og:url" content="https://voidavengers-quiz.xatubapox.vercel.app/" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content={db.bg}/>
        </Head>
    )
}