import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Server {
  name: string;
  pingRange: [number, number];
  ping?: number;
  status: string;
  note?: string;
}

const ServerStatus: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([
    { name: 'Germany', pingRange: [42, 50], status: '' },
    { name: 'Litva', pingRange: [55, 66], status: '' },
    { name: 'USA', pingRange: [56, 66], status: '' },
    { name: 'Amsterdam', pingRange: [70, 83], status: '' },
    { name: 'Turkey', pingRange: [100, 140], status: '' },
    { name: 'Moscow', pingRange: [19, 30], status: '', note: 'Not work, if u live in Russia' },
  ]);
  const [lastUpdate, setLastUpdate] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const updatePings = useCallback(() => {
    const now = Date.now();
    if (now - lastUpdate < 2000) return; // Блокировка обновления, если не прошло 2 секунды

    setIsUpdating(true);
    setServers((prevServers) =>
      prevServers.map((server) => {
        const ping = Math.floor(Math.random() * (server.pingRange[1] - server.pingRange[0] + 1)) + server.pingRange[0];
        let status = 'Normal';
        if (ping <= 50) status = 'Great';
        else if (ping <= 80) status = 'Good';
        return { ...server, ping, status };
      })
    );
    setLastUpdate(now);
    setTimeout(() => setIsUpdating(false), 300); // Короткая задержка для UX
  }, [lastUpdate]);

  useEffect(() => {
    // Начальное обновление при загрузке страницы
    updatePings();

    // Автоматическое обновление каждые 2 секунды
    const interval = setInterval(updatePings, 2000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [updatePings]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Great':
        return 'text-neon';
      case 'Good':
        return 'text-yellow-400';
      case 'Normal':
        return 'text-orange-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Статус серверов — <span className="text-neon">BrutoVPN</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servers.map((server, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl border border-neon/20"
          >
            <h3 className="text-xl font-semibold mb-2">{server.name}</h3>
            <p className={`text-lg ${getStatusColor(server.status)}`}>
              Пинг: {server.ping || 'Загрузка...'}ms - {server.status || 'Загрузка...'}
            </p>
            {server.note && <p className="text-sm opacity-80 mt-2">{server.note}</p>}
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12 space-x-4">
        <motion.button
          onClick={updatePings}
          disabled={isUpdating || Date.now() - lastUpdate < 2000}
          whileHover={{ scale: isUpdating || Date.now() - lastUpdate < 2000 ? 1 : 1.05, boxShadow: isUpdating || Date.now() - lastUpdate < 2000 ? 'none' : '0 0 15px rgba(0, 255, 136, 0.5)' }}
          whileTap={{ scale: isUpdating || Date.now() - lastUpdate < 2000 ? 1 : 0.95 }}
          className={`inline-block bg-neon text-dark font-semibold py-3 px-8 rounded-full text-lg ${isUpdating || Date.now() - lastUpdate < 2000 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isUpdating ? 'Обновление...' : 'Обновить'}
        </motion.button>
        <motion.a
          href="https://t.me/brutovpn"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-neon text-dark font-semibold py-3 px-8 rounded-full text-lg"
        >
          Подключиться
        </motion.a>
      </div>
    </section>
  );
};

export default ServerStatus;