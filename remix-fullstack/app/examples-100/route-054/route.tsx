import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 54, message: 'Remix Example 54' });
}

export default function RemixRoute54() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 54</h1><p>{data.message}</p></div>;
}
