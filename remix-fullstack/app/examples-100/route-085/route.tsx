import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 85, message: 'Remix Example 85' });
}

export default function RemixRoute85() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 85</h1><p>{data.message}</p></div>;
}
