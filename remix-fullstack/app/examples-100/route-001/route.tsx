import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 1, message: 'Remix Example 1' });
}

export default function RemixRoute1() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 1</h1><p>{data.message}</p></div>;
}
