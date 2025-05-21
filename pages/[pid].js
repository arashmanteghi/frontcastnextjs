import { useEffect } from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const productIds = data.products.map((product) => product.id);
  const productPaths = productIds.map((productId) => ({
    params: { pid: productId },
  }));
  return ({
    paths: productPaths,
    fallback: true,
  });
};

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>{loadedProduct.name}</h2>
      <p>{loadedProduct.price}</p>
    </div>
  )
}

export default ProductDetailPage;