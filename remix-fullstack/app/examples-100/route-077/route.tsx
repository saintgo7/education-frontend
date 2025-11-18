import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 77, message: 'Remix Example 77' });
}

export default function RemixRoute77() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 77</h1><p>{data.message}</p></div>;
}
