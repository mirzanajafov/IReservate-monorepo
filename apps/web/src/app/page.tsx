export default async function Home() {
   const res = await fetch('http://localhost:3000/health', { cache: 'no-store' });
   const data = await res.json();
   return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
