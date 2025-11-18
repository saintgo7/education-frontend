async function getData1() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate random error
  if (Math.random() > 0.7) {
    throw new Error('Random error in example 1');
  }
  return { message: 'Data loaded successfully for example 1' };
}

export default async function Page1() {
  const data = await getData1();
  return <div><h2>Example 1</h2><p>{data.message}</p></div>;
}
