async function getData3() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate random error
  if (Math.random() > 0.7) {
    throw new Error('Random error in example 3');
  }
  return { message: 'Data loaded successfully for example 3' };
}

export default async function Page3() {
  const data = await getData3();
  return <div><h2>Example 3</h2><p>{data.message}</p></div>;
}
