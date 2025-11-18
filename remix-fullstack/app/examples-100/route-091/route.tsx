import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 91, message: 'Remix Example 91' });
}

export default function RemixRoute91() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 91</h1><p>{data.message}</p></div>;
}
