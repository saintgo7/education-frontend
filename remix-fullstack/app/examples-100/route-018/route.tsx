import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 18, message: 'Remix Example 18' });
}

export default function RemixRoute18() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 18</h1><p>{data.message}</p></div>;
}
