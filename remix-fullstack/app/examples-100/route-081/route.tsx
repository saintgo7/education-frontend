import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 81, message: 'Remix Example 81' });
}

export default function RemixRoute81() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 81</h1><p>{data.message}</p></div>;
}
