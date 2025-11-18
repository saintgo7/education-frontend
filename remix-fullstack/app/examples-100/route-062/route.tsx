import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 62, message: 'Remix Example 62' });
}

export default function RemixRoute62() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 62</h1><p>{data.message}</p></div>;
}
