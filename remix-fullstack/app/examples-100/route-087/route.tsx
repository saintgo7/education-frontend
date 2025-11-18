import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 87, message: 'Remix Example 87' });
}

export default function RemixRoute87() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 87</h1><p>{data.message}</p></div>;
}
