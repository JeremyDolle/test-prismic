import React from 'react';
import * as prismic from "@prismicio/client";
import {createClient} from "@/prismicio";
import {AuthorDocument} from "../../prismicio-types";
import {PrismicNextImage} from "@prismicio/next";
import {notFound} from "next/navigation";

type Props = {
  field: prismic.FilledContentRelationshipField<"author">
};

const Author = async ({field}: Props) => {
  const client = createClient();

  // Prefer using an error boundary
  const doc = await client
    .getByUID<AuthorDocument>("author", field?.uid ?? "")
    .catch(() => notFound());

  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      {
        prismic.isFilled.image(doc.data.avatar) && (
          <PrismicNextImage
            field={doc.data.avatar}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
        )
      }
      <div className="text-sm">
        <p className="font-semibold text-white">{doc.data.name}</p>
      </div>
    </div>
  );
};

export default Author;
