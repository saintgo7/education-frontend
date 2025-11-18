import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 39, message: 'Remix Example 39' });
}

export default function RemixRoute39() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 39</h1><p>{data.message}</p></div>;
}
