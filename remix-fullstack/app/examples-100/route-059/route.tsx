import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 59, message: 'Remix Example 59' });
}

export default function RemixRoute59() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 59</h1><p>{data.message}</p></div>;
}
