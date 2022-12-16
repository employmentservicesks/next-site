import Head from "next/head";

export default function HeadComponent({
  title,
  description,
  icon = "/assets/icons/logo.svg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </Head>
  );
}
