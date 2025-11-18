import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 99, message: 'Remix Example 99' });
}

export default function RemixRoute99() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 99</h1><p>{data.message}</p></div>;
}
