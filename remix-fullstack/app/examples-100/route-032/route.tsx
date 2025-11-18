import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 32, message: 'Remix Example 32' });
}

export default function RemixRoute32() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 32</h1><p>{data.message}</p></div>;
}
