import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 56, message: 'Remix Example 56' });
}

export default function RemixRoute56() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 56</h1><p>{data.message}</p></div>;
}
