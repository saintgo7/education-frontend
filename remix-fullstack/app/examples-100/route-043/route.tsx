import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 43, message: 'Remix Example 43' });
}

export default function RemixRoute43() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 43</h1><p>{data.message}</p></div>;
}
