import path from 'path'
import fs from 'fs'
import process from 'process'

const HomePage = (props) => {
  const { products } = props

  return (
    <div>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    'data',
    'products',
    'data-product.json'
  )
  const jsonData = await fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      products: data.products
    }
  }
}

export default HomePage
