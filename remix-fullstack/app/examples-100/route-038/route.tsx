import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 38, message: 'Remix Example 38' });
}

export default function RemixRoute38() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 38</h1><p>{data.message}</p></div>;
}
