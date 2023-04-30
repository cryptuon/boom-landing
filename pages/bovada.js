import Head from 'next/head';
import { useEffect, useState } from 'react';

function Bovada() {
  const redirectToBovada = async () => {
    await increaseCount('bovada');
    window.location.href = 'https://bit.ly/BoomBV';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      redirectToBovada();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta http-equiv="refresh" content="1; url= https://bit.ly/BoomBV" />
      </Head>
    </>
  );
}

async function increaseCount(name) {
  const response = await fetch('/api/increaseCount', {
    method: 'POST',
    body: JSON.stringify({ name: name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export default Bovada;
