import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 75, message: 'Remix Example 75' });
}

export default function RemixRoute75() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 75</h1><p>{data.message}</p></div>;
}
