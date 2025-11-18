import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 7, message: 'Remix Example 7' });
}

export default function RemixRoute7() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 7</h1><p>{data.message}</p></div>;
}
