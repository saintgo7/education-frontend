import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 15, message: 'Remix Example 15' });
}

export default function RemixRoute15() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 15</h1><p>{data.message}</p></div>;
}
