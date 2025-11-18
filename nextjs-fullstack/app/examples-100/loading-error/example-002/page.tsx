async function getData2() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate random error
  if (Math.random() > 0.7) {
    throw new Error('Random error in example 2');
  }
  return { message: 'Data loaded successfully for example 2' };
}

export default async function Page2() {
  const data = await getData2();
  return <div><h2>Example 2</h2><p>{data.message}</p></div>;
}
