import React, {useMemo} from 'react';
import * as prismic from "@prismicio/client";
import {createClient} from "@/prismicio";
import {BlogpostDocument} from "../../prismicio-types";
import {PrismicRichText} from "@prismicio/react";
import Author from "@/components/Author";
import {notFound} from "next/navigation";
import Link from "next/link";

type Props = {
  field: prismic.FilledContentRelationshipField<"blogpost">
};

const ArticleCard = async ({field}: Props) => {
  const client = createClient();

  // Prefer using an error boundary
  const doc = await client
    .getByUID<BlogpostDocument>("blogpost", field?.uid ?? "")
    .catch(() => notFound());

  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <Link href={`/blog/${doc.uid}`}>
        {
          prismic.isFilled.richText(doc.data.title) && (
            <PrismicRichText field={doc.data.title} components={{
              heading1: ({children}) => <h3 className="mt-3 text-lg font-semibold leading-6 text-white hover:text-gray-600 line-clamp-1">{children}</h3>
            }}/>
          )
        }
      </Link>
      <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
        {
          prismic.isFilled.richText(doc.data.summary) && (
            <PrismicRichText field={doc.data.summary} components={{
              paragraph: ({children}) => <>{children}</>
            }}/>
          )
        }
        {
          !prismic.isFilled.richText(doc.data.summary) && prismic.isFilled.richText(doc.data.content) && (
            <PrismicRichText field={doc.data.content} components={{
              paragraph: ({children}) => <>{children}</>
            }}/>
          )
        }
      </p>

      <div className="relative mt-8 flex items-center gap-x-4">
        {
          prismic.isFilled.contentRelationship(doc.data.author) && (
            <Author field={doc.data.author} />
          )
        }
      </div>
    </article>
  );
};

export default ArticleCard;
