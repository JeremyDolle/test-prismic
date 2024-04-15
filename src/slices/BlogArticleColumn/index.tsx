import * as prismic from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import ArticleCard from "@/components/ArticleCard";

/**
 * Props for `BlogArticleColumn`.
 */
export type BlogArticleColumnProps =
  SliceComponentProps<prismic.Content.BlogArticleColumnSlice>;

/**
 * Component for "BlogArticleColumn" Slices.
 */
const BlogArticleColumn = ({ slice }: BlogArticleColumnProps): JSX.Element => {
  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {
            prismic.isFilled.richText(slice.primary.title) && (
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading2: ({ children }) => <h1 className="text-3xl font-bold text-white">{children}</h1>,
                }}
              />
            )
          }
          {
            prismic.isFilled.richText(slice.primary.description) && (
              <PrismicRichText
                field={slice.primary.description}
                components={{
                  paragraph: ({ children }) => <p className="mt-2 text-lg leading-8 text">{children}</p>,
                }}
              />
            )
          }
        </div>

        <div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
            prismic.isFilled.contentRelationship(slice.primary.article1) &&  (
              <ArticleCard field={slice.primary.article1} />
            )
          }
          {
            prismic.isFilled.contentRelationship(slice.primary.article2) &&  (
              <ArticleCard field={slice.primary.article2} />
            )
          }
          {
            prismic.isFilled.contentRelationship(slice.primary.article3) &&  (
              <ArticleCard field={slice.primary.article3} />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default BlogArticleColumn;
