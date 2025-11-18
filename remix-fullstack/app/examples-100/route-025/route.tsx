import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 25, message: 'Remix Example 25' });
}

export default function RemixRoute25() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 25</h1><p>{data.message}</p></div>;
}
