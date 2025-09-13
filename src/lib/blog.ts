
export interface Post {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: {
      id: number;
      source_url: string;
    }[];
  };
  featured_media_src_url?: string;
}

const WORDPRESS_API_URL = "https://rjoladstg.wpengine.com/wp-json/wp/v2";
// The ID for the "R-J Foundation" category is 143
const CATEGORY_ID = 143;

async function fetchPosts(url: string): Promise<Post[]> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    let posts: Post[] = await response.json();

    // Attach the featured image URL directly to the post object for easier access
    posts = posts.map(post => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      return {
        ...post,
        featured_media_src_url: featuredMedia?.source_url
      };
    });

    return posts;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return []; // Return an empty array on error
  }
}

export async function getBlogPosts(): Promise<Post[]> {
  return fetchPosts(`${WORDPRESS_API_URL}/posts?categories=${CATEGORY_ID}&_embed`);
}

export async function getBlogPostBySlug(slug: string): Promise<Post | null> {
  const posts = await fetchPosts(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
  if (posts && posts.length > 0) {
    return posts[0];
  }
  return null;
}
