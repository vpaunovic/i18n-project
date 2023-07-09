import { getDictionary } from "../../../getDictionary";

export default async function Home({ params }) {
  const dict = await getDictionary(params.lang);

  return (
    <div>
      <h1>{dict?.home?.h1_text}</h1>
      <h3>{dict?.home?.h3_text}</h3>
      <p>{dict?.home?.p_text}</p>
    </div>
  );
}
