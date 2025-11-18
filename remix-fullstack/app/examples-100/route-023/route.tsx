import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 23, message: 'Remix Example 23' });
}

export default function RemixRoute23() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 23</h1><p>{data.message}</p></div>;
}
