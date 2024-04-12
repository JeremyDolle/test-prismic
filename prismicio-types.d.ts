// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for author documents
 */
interface AuthorDocumentData {
  /**
   * name field in *author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Author firstname and lastname
   * - **API ID Path**: author.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * avatar field in *author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;

type BlogpostDocumentDataSlicesSlice = never;

/**
 * Content for BlogPost documents
 */
interface BlogpostDocumentData {
  /**
   * title field in *BlogPost*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Fill with a good article title
   * - **API ID Path**: blogpost.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * content field in *BlogPost*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: fill with the article content
   * - **API ID Path**: blogpost.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * author field in *BlogPost*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author">;

  /**
   * summary field in *BlogPost*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Fill with a summary
   * - **API ID Path**: blogpost.summary
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  summary: prismic.RichTextField;

  /**
   * Slice Zone field in *BlogPost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Description field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *BlogPost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | BlogArticleColumnSlice
  | TextImageSlice
  | HeroSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes =
  | AuthorDocument
  | BlogpostDocument
  | HomepageDocument;

/**
 * Primary content in *BlogArticleColumn → Primary*
 */
export interface BlogArticleColumnSliceDefaultPrimary {
  /**
   * title field in *BlogArticleColumn → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: enter the title of the section
   * - **API ID Path**: blog_article_column.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *BlogArticleColumn → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: enter a paragraph to hightlight the blog section
   * - **API ID Path**: blog_article_column.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * article1 field in *BlogArticleColumn → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article_column.primary.article1
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article1: prismic.ContentRelationshipField<"blogpost">;

  /**
   * article2 field in *BlogArticleColumn → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article_column.primary.article2
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article2: prismic.ContentRelationshipField<"blogpost">;

  /**
   * article3 field in *BlogArticleColumn → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_article_column.primary.article3
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  article3: prismic.ContentRelationshipField<"blogpost">;
}

/**
 * Default variation for BlogArticleColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogArticleColumnSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogArticleColumnSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogArticleColumn*
 */
type BlogArticleColumnSliceVariation = BlogArticleColumnSliceDefault;

/**
 * BlogArticleColumn Shared Slice
 *
 * - **API ID**: `blog_article_column`
 * - **Description**: BlogArticleColumn
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogArticleColumnSlice = prismic.SharedSlice<
  "blog_article_column",
  BlogArticleColumnSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * background field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background: prismic.ImageField<never>;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Fill with a title
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Fill with text content
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * buttonUrl field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Fill with an url where the user will be redirected
   * - **API ID Path**: hero.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField;

  /**
   * buttonText field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Text filled in the button
   * - **API ID Path**: hero.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *TextImage → Primary*
 */
export interface TextImageSliceDefaultPrimary {
  /**
   * image field in *TextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * text field in *TextImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Fill with any title nor paragraph
   * - **API ID Path**: text_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextImage → Primary*
 */
export interface TextImageSliceLeftPrimary {
  /**
   * text field in *TextImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: any text or paragraph
   * - **API ID Path**: text_image.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * image field in *TextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * left variation for TextImage Slice
 *
 * - **API ID**: `left`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSliceLeft = prismic.SharedSliceVariation<
  "left",
  Simplify<TextImageSliceLeftPrimary>,
  never
>;

/**
 * Slice variation for *TextImage*
 */
type TextImageSliceVariation = TextImageSliceDefault | TextImageSliceLeft;

/**
 * TextImage Shared Slice
 *
 * - **API ID**: `text_image`
 * - **Description**: TextImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageSlice = prismic.SharedSlice<
  "text_image",
  TextImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AuthorDocument,
      AuthorDocumentData,
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogArticleColumnSlice,
      BlogArticleColumnSliceDefaultPrimary,
      BlogArticleColumnSliceVariation,
      BlogArticleColumnSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      TextImageSlice,
      TextImageSliceDefaultPrimary,
      TextImageSliceLeftPrimary,
      TextImageSliceVariation,
      TextImageSliceDefault,
      TextImageSliceLeft,
    };
  }
}