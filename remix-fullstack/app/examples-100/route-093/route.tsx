import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 93, message: 'Remix Example 93' });
}

export default function RemixRoute93() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 93</h1><p>{data.message}</p></div>;
}
