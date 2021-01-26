import Head from 'next/head'
import db from '../../../db.json'

export default function QuizHead() {
    return (
        <Head>
            <title>Quiz Void Avengers</title>
            <meta property="og:image" content={db.bg}/>
        </Head>
    )
}