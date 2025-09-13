
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import parse, { domToReact, Element } from 'html-react-parser';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const description = post.excerpt.rendered.replace(/<[^>]+>/g, '');

  return {
    title: post.title.rendered,
    description: description,
  };
}

const parseOptions = {
  replace: (domNode: any) => {
    if (domNode instanceof Element && domNode.name === 'img' && domNode.attribs) {
      const { src, alt, width, height, class: className } = domNode.attribs;
      
      // Use data-src if src is a placeholder data URI
      let imageUrl = src;
      if (src && src.startsWith('data:image/')) {
        imageUrl = domNode.attribs['data-src'] || src;
      }

      const widthNum = width ? parseInt(width, 10) : 1200;
      const heightNum = height ? parseInt(height, 10) : 600;

      if (!imageUrl || imageUrl.startsWith('data:image/')) {
        return <></>; // Don't render if there's no valid image URL
      }

      return (
        <Image
          src={imageUrl}
          alt={alt || ''}
          width={widthNum}
          height={heightNum}
          className={`${className || ''} rounded-lg shadow-lg my-6`}
        />
      );
    }
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader title={post.title.rendered} />
      <div className="container max-w-4xl py-12 md:py-16">
        {post.featured_media_src_url && (
          <div className="mb-8">
            <Image
              src={post.featured_media_src_url}
              alt={post.title.rendered}
              data-ai-hint="blog post image"
              width={1200}
              height={600}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        )}
        <div className="prose prose-lg max-w-none mx-auto text-muted-foreground">
          <div
            className="prose-p:text-lg prose-headings:font-headline prose-headings:text-primary prose-a:text-primary"
          >
            {parse(post.content.rendered, parseOptions)}
          </div>
        </div>
      </div>
    </>
  );
}
