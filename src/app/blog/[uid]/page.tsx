import { Metadata } from "next";
import { notFound } from "next/navigation";
import {PrismicRichText, SliceZone} from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import {BlogpostDocument} from "../../../../prismicio-types";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID<BlogpostDocument>("blogpost", params.uid)
    .catch(() => notFound());

  return (
    <div>
      <PrismicRichText field={page.data.title}/>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
