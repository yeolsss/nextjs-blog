import { useEffect, useState } from 'react';

const useTyping = (content: string) => {
  const [typing, setTyping] = useState('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count < content.length) {
        setTyping((typing) => typing + content[count]);
        setCount((prev) => (prev += 1));
      }
      if (count >= content.length) {
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [content, count]);

  return typing;
};

export default useTyping;
