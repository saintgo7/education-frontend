import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 45, message: 'Remix Example 45' });
}

export default function RemixRoute45() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 45</h1><p>{data.message}</p></div>;
}
