import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

function ProductDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <div>
      <h2>{loadedProduct.name}</h2>
      <p>{loadedProduct.price}</p>
    </div>
  )
}

export default ProductDetailPage;