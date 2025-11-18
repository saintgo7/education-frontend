import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 28, message: 'Remix Example 28' });
}

export default function RemixRoute28() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 28</h1><p>{data.message}</p></div>;
}
