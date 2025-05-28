import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            <span className="text-neon">Bruto</span>
            <span className="text-white">VPN</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 opacity-80 max-w-2xl mx-auto">
            Свобода, безопасность и скорость в одном клике.
          </p>
          <motion.a
            href="https://t.me/brutovpn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-neon text-dark font-semibold py-3 px-8 rounded-full text-lg"
          >
            Подключиться
          </motion.a>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark opacity-50" />
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Почему <span className="text-neon">BrutoVPN</span>?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Максимальная безопасность',
              description: 'Шифрование нового поколения для защиты ваших данных.',
            },
            {
              title: 'Сверхбыстрая скорость',
              description: 'Оптимизированные серверы для стриминга и игр.',
            },
            {
              title: 'Хорошие предложения',
              description: 'Бесконечный трафик, скорость до 1гб/с, 5 стран и маленький пинг.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-xl border border-neon/20 hover:border-neon transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neon to-accent py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Начни свой путь с BrutoVPN
        </motion.h2>
        <motion.a
          href="https://t.me/brutovpn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 0, 122, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-dark text-white font-semibold py-3 px-8 rounded-full text-lg"
        >
          Подключиться сейчас
        </motion.a>
      </section>
    </>
  );
};

export default Home;