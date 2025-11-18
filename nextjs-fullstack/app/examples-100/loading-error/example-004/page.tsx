async function getData4() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate random error
  if (Math.random() > 0.7) {
    throw new Error('Random error in example 4');
  }
  return { message: 'Data loaded successfully for example 4' };
}

export default async function Page4() {
  const data = await getData4();
  return <div><h2>Example 4</h2><p>{data.message}</p></div>;
}
