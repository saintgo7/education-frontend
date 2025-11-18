import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 31, message: 'Remix Example 31' });
}

export default function RemixRoute31() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 31</h1><p>{data.message}</p></div>;
}
