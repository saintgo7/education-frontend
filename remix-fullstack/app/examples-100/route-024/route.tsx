import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 24, message: 'Remix Example 24' });
}

export default function RemixRoute24() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 24</h1><p>{data.message}</p></div>;
}
