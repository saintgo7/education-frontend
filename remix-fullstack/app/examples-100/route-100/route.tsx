import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 100, message: 'Remix Example 100' });
}

export default function RemixRoute100() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 100</h1><p>{data.message}</p></div>;
}
