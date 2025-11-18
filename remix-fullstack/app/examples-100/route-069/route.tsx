import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 69, message: 'Remix Example 69' });
}

export default function RemixRoute69() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 69</h1><p>{data.message}</p></div>;
}
