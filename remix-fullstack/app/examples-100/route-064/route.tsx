import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 64, message: 'Remix Example 64' });
}

export default function RemixRoute64() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 64</h1><p>{data.message}</p></div>;
}
