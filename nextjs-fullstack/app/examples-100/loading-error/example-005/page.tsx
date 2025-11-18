async function getData5() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate random error
  if (Math.random() > 0.7) {
    throw new Error('Random error in example 5');
  }
  return { message: 'Data loaded successfully for example 5' };
}

export default async function Page5() {
  const data = await getData5();
  return <div><h2>Example 5</h2><p>{data.message}</p></div>;
}
