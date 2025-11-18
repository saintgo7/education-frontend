import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 47, message: 'Remix Example 47' });
}

export default function RemixRoute47() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 47</h1><p>{data.message}</p></div>;
}
