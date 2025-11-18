import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 41, message: 'Remix Example 41' });
}

export default function RemixRoute41() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 41</h1><p>{data.message}</p></div>;
}
