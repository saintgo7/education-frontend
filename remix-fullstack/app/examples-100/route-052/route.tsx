import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 52, message: 'Remix Example 52' });
}

export default function RemixRoute52() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 52</h1><p>{data.message}</p></div>;
}
