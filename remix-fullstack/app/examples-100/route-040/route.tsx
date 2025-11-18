import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 40, message: 'Remix Example 40' });
}

export default function RemixRoute40() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 40</h1><p>{data.message}</p></div>;
}
