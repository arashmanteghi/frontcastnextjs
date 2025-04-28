import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';


export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}


const HomePage = (props) => {
  const {  products } = props;
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;