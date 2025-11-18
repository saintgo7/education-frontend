import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 58, message: 'Remix Example 58' });
}

export default function RemixRoute58() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 58</h1><p>{data.message}</p></div>;
}
