import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 10, message: 'Remix Example 10' });
}

export default function RemixRoute10() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 10</h1><p>{data.message}</p></div>;
}
