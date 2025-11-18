import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 65, message: 'Remix Example 65' });
}

export default function RemixRoute65() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 65</h1><p>{data.message}</p></div>;
}
