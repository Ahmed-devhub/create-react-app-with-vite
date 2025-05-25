
import { useEffect, useState } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <div className="card">
      <h2>🐱 Random Cat Fact</h2>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;
