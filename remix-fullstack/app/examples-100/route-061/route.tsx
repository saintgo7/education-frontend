import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 61, message: 'Remix Example 61' });
}

export default function RemixRoute61() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 61</h1><p>{data.message}</p></div>;
}
