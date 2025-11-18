import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 6, message: 'Remix Example 6' });
}

export default function RemixRoute6() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 6</h1><p>{data.message}</p></div>;
}
