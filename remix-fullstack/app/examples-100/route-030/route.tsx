import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 30, message: 'Remix Example 30' });
}

export default function RemixRoute30() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 30</h1><p>{data.message}</p></div>;
}
