import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 33, message: 'Remix Example 33' });
}

export default function RemixRoute33() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 33</h1><p>{data.message}</p></div>;
}
