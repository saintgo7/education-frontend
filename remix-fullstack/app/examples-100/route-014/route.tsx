import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 14, message: 'Remix Example 14' });
}

export default function RemixRoute14() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 14</h1><p>{data.message}</p></div>;
}
