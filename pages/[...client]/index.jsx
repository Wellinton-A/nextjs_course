import { useRouter } from 'next/router'

const Client = () => {
  const { query } = useRouter()

  console.log(query)

  return <h1>Client Page</h1>
}

export default Client
