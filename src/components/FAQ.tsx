import React from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '❓ Что такое BrutoVPN?',
      answer: 'Быстрый и безопасный VPN для защиты и подмены данных.',
    },
    {
      question: '💸 Как оплатить?',
      answer: 'Через СБП или Карты (Россия), свяжитесь с <a href="https://t.me/coderingonelove" target="_blank" rel="noopener noreferrer" class="text-neon hover:underline">@coderingonelove</a>.',
    },
    {
      question: '📬 Как получить подписку?',
      answer: 'После оплаты свяжитесь с <a href="https://t.me/coderingonelove" target="_blank" rel="noopener noreferrer" class="text-neon hover:underline">@coderingonelove</a>.',
    },
    {
      question: '🌐 Какие протоколы?',
      answer: 'Vless и Shadowsocks (Outline).',
    },
    {
      question: '❗️ У @coderingonelove табличка скам!',
      answer: 'За нелегальную продажу Telegram Premium. К мошенничеству это никак не относится.',
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        ЧаВо — <span className="text-neon">BrutoVPN</span>
      </motion.h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl border border-neon/20"
          >
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="opacity-80" dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-lg mb-4">Есть вопросы? Пишите нам! 👇</p>
        <motion.a
          href="https://t.me/brutovpn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-neon text-dark font-semibold py-3 px-8 rounded-full text-lg"
        >
          Задать вопрос
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FAQ;