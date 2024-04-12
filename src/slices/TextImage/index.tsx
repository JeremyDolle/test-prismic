import * as prismic from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

export type TextImageProps = SliceComponentProps<prismic.Content.TextImageSlice>;

const TextImage = ({ slice }: TextImageProps) => {
  return (
    <section className="bg-gray-900">
      <div className={`grid max-w-screen-xl p-20 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12`}>
        <div className={`mr-auto place-self-center lg:col-span-7 ${slice.variation === 'left' ? 'order-last' : '' }`}>
          {
            prismic.isFilled.richText(slice.primary.text) && (
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  heading2: ({ children }) => <h2 className="text-5xl font-extrabold">{children}</h2>,
                  heading3: ({ children }) => <h2 className="text-4xl font-semibold">{children}</h2>,
                  heading4: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
                  heading5: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
                  heading6: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
                  paragraph: ({ children }) => <p className="font-light">{children}</p>,
                }}
              />
            )
          }
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {
            prismic.isFilled.image(slice.primary.image) && <PrismicNextImage field={slice.primary.image} alt=""/>
          }
        </div>
      </div>
    </section>
  );
};

export default TextImage;
