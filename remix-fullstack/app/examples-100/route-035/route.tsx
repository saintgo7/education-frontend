import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 35, message: 'Remix Example 35' });
}

export default function RemixRoute35() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 35</h1><p>{data.message}</p></div>;
}
