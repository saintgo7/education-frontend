import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 11, message: 'Remix Example 11' });
}

export default function RemixRoute11() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 11</h1><p>{data.message}</p></div>;
}
