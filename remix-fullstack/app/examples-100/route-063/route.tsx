import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 63, message: 'Remix Example 63' });
}

export default function RemixRoute63() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 63</h1><p>{data.message}</p></div>;
}
