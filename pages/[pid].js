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
};

export const getStaticPaths = async () => ({
  paths: [
    { params: { pid: 'p1' } },
    { params: { pid: 'p2' } },
    { params: { pid: 'p3' } },
  ],
  fallback: false,
});

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