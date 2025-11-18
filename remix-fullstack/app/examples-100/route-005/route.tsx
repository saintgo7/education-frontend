import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 5, message: 'Remix Example 5' });
}

export default function RemixRoute5() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 5</h1><p>{data.message}</p></div>;
}
