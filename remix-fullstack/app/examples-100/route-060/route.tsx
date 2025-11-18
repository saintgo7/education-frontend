import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 60, message: 'Remix Example 60' });
}

export default function RemixRoute60() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 60</h1><p>{data.message}</p></div>;
}
