import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 27, message: 'Remix Example 27' });
}

export default function RemixRoute27() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 27</h1><p>{data.message}</p></div>;
}
