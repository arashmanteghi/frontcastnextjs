import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
      ],
    },
  };
}


const HomePage = (props) => {
  const {  products } = props;
  console.log('props:', props);
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link href="/blog/posts">Blog</Link></li>
      </ul>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;