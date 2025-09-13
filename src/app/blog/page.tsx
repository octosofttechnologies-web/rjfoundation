
import { getBlogPosts, type Post } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata = {
  title: 'Blog and Events',
  description: 'Read our latest stories, updates, and news about our events and initiatives.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHeader title="Blog and Events" />
      <div className="bg-secondary">
        <div className="container py-12 md:py-16 px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Stay up to date with the latest news, stories of impact, and upcoming events from the R-Jolad Foundation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col bg-background shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                  <Image
                    src={post.featured_media_src_url || "https://picsum.photos/600/400"}
                    alt={post.title.rendered}
                    data-ai-hint="charity event"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <CardTitle className="font-headline text-xl h-14">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="text-muted-foreground flex-1" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <Button asChild variant="link" className="p-0 h-auto self-start mt-4 text-primary hover:text-accent">
                      <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
