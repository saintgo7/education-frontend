import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 12, message: 'Remix Example 12' });
}

export default function RemixRoute12() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 12</h1><p>{data.message}</p></div>;
}
