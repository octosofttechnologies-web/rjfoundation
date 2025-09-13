
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

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

  // Strip HTML tags for a clean description
  const description = post.excerpt.rendered.replace(/<[^>]+>/g, '');

  return {
    title: post.title.rendered,
    description: description,
  };
}

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
            className="prose-p:text-lg prose-headings:font-headline prose-headings:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    </>
  );
}
