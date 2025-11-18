import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 29, message: 'Remix Example 29' });
}

export default function RemixRoute29() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 29</h1><p>{data.message}</p></div>;
}
