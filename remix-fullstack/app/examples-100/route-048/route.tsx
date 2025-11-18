import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 48, message: 'Remix Example 48' });
}

export default function RemixRoute48() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 48</h1><p>{data.message}</p></div>;
}
