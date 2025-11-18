import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 19, message: 'Remix Example 19' });
}

export default function RemixRoute19() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 19</h1><p>{data.message}</p></div>;
}
