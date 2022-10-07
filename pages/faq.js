import { useEffect, useState } from "react"
import Link from "../src/components/Link"

const FAQPage = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const FAQ_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    fetch(FAQ_API)
      .then((responseData) => { return responseData?.json() })
      .then((response) => {
        setQuestions(response)
      })

  }, [])


  return (
    <div>
      <h1>
        Alura Cases - Página de perguntas FAQ
      </h1>
      <Link href='/'>Ir para a Home</Link>
      <ul>
        {questions.map(({ answer, question, index }) => {
          return (
            <li key={index}>

              <article>
                <h2>
                  - {question}
                </h2>
                <p>
                  {answer}
                </p>
                <br />
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FAQPage