import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 90, message: 'Remix Example 90' });
}

export default function RemixRoute90() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 90</h1><p>{data.message}</p></div>;
}
