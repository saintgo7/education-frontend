import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 36, message: 'Remix Example 36' });
}

export default function RemixRoute36() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 36</h1><p>{data.message}</p></div>;
}
