import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 96, message: 'Remix Example 96' });
}

export default function RemixRoute96() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 96</h1><p>{data.message}</p></div>;
}
