import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 34, message: 'Remix Example 34' });
}

export default function RemixRoute34() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 34</h1><p>{data.message}</p></div>;
}
