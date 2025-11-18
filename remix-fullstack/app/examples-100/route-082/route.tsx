import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 82, message: 'Remix Example 82' });
}

export default function RemixRoute82() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 82</h1><p>{data.message}</p></div>;
}
