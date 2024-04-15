import * as prismic from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";

export type HeroProps = SliceComponentProps<prismic.Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  return (
    <section className="relative bg-gray-900 min-h-32 p-12 lg:p-44">
      {prismic.isFilled.image(slice.primary.background) && (
        <PrismicNextImage
          field={slice.primary.background}
          className="z-10 top-0 left-0 w-full h-full absolute object-cover"
          alt=""
        />
      )}
      <div className="relative z-20">
        {
          prismic.isFilled.richText(slice.primary.title) && (
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => <h1 className="mb-4 text-5xl font-extrabold text-white">{children}</h1>,
                heading2: ({ children }) => <h2 className="mb-4 text-4xl font-extrabold text-white">{children}</h2>,
              }}
            />
          )
        }
        {
          prismic.isFilled.richText(slice.primary.description) && (
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => <p className="mb-6 font-light text-gray-400">{children}</p>,
              }}
            />
          )
        }
        {
          prismic.isFilled.link(slice.primary.cta) && (
            <PrismicNextLink field={slice.primary.cta} className="inline-flex px-4 py-2 gap-2 items-center text-base font-medium text-center text-white rounded-lg border border-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
              </svg>
              <span>
                {
                  prismic.isFilled.keyText(slice.primary.buttontext) && slice.primary.buttontext
                }
              </span>
            </PrismicNextLink>
          )
        }
      </div>
    </section>
  );
};

export default Hero;
