import { AdviceCard } from 'components/AdviceCard';
import { useEffect, useState } from 'react';

const ADVICE_API_URL = 'https://api.adviceslip.com';

export type AdviceType = {
  title: string;
  content: string;
};

type AdviceResponseType = {
  slip: {
    id: number;
    advice: string;
  };
};

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [error, setError] = useState(false);

  const fetchAdvice = async () => {
    await fetch(`${ADVICE_API_URL}/advice`)
      .then((response) => response.json())
      .then(({ slip }: AdviceResponseType) => {
        setError(false);
        setAdvice({
          title: `Advice #${slip.id}`,
          content: slip.advice,
        });
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-neutral-dark-blue min-h-screen flex items-center justify-center px-4">
      {error && <AdviceCard title="Advice error" content="Oops, something went wrong." />}
      {advice && (
        <AdviceCard title={advice.title} content={advice.content} handleClick={fetchAdvice} />
      )}
    </div>
  );
}

export default App;
