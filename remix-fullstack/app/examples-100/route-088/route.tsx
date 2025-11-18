import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 88, message: 'Remix Example 88' });
}

export default function RemixRoute88() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 88</h1><p>{data.message}</p></div>;
}
