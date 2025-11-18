import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 44, message: 'Remix Example 44' });
}

export default function RemixRoute44() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 44</h1><p>{data.message}</p></div>;
}
