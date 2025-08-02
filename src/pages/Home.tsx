import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded p-4 cursor-pointer shadow-md hover:border hover:border-blue-400 transition-all duration-300"
            style={{
              color: 'var(--text)',
              backgroundColor: 'var(--bg)',
            }}
          >
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm mb-3">{p.description.slice(0, 100)}...</p>
            <button className="mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
