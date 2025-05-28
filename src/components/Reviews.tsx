import React from 'react';
import { motion } from 'framer-motion';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Отзывы о <span className="text-neon">BrutoVPN</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-xl border border-neon/20 text-center"
      >
        <p className="text-lg mb-4">📝 Мы собираем отзывы! 🙏 Напишите <a href="https://t.me/coderingonelove" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@coderingonelove</a>.</p>
        <p className="text-lg opacity-80">Ваше мнение важно! 🌟</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://t.me/coderingonelove"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-neon text-dark font-semibold py-3 px-8 rounded-full text-lg"
        >
          Написать отзыв
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Reviews;