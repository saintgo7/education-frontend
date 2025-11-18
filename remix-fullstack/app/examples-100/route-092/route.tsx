import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 92, message: 'Remix Example 92' });
}

export default function RemixRoute92() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 92</h1><p>{data.message}</p></div>;
}
