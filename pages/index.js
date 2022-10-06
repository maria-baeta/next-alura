import Link from "../src/components"

const Title = ({ children, as }) => {
  const Tag = as
  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: blue;
        }
      `}</style>
    </>
  )
}

const HomePage = () => {
  return (
    <div>
      <Title as='h1'>
        Alura Cases - Home
      </Title>
      <Link href='/faq'>Ir para o FAQ</Link>
    </div>
  )
}

export default HomePage