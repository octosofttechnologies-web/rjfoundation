
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Empowering Communities, Transforming Lives
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                The R-Jolad Foundation is committed to fostering sustainable growth and well-being through strategic initiatives in health, education, and community empowerment.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-accent-foreground rounded-full px-8 text-lg transition-transform duration-300 hover:scale-105">
                  <Link href="/blog">Our Stories</Link>
                </Button>
              </div>
            </div>
             <div className="w-full max-w-3xl mx-auto">
                <Image
                  src="/images/hcare.jpg"
                  alt="A group of happy children in a community setting"
                  data-ai-hint="community children"
                  width={800}
                  height={600}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <Card className="max-w-3xl mx-auto text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl sm:text-3xl">Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground md:text-lg">
                We are a dedicated team of professionals, volunteers, and partners working together to create a brighter future. Our strategy is built on collaboration and a deep understanding of the communities we serve.
              </p>
              <Button asChild>
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-partners.jpg')" }}>
        <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 items-center gap-12">
                 <div className="relative w-full max-w-[300px] h-[300px] mx-auto">
                    <svg width="0" height="0">
                      <defs>
                        <clipPath id="custom-shape" clipPathUnits="objectBoundingBox">
                          <path d="M0.08,0 C0.04,0,0,0.04,0,0.08 V0.92 C0,0.96,0.04,1,0.08,1 H0.5 C0.776,1,1,0.776,1,0.5 V0.08 C1,0.04,0.96,0,0.92,0 H0.5 C0.224,0,0,0.224,0,0.5 C0,0.224,0.224,0,0.5,0 H0.08 Z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="relative mx-auto w-[260px] h-[350px] sm:w-[360px] sm:h-[350px] md:w-[450px] md:h-[520px] overflow-hidden rounded-t-full">
                    <Image
                    src="/images/three-african-men.jpg"
                    alt="R-Jolad Foundation partners"
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, 450px"
                    className="object-cover w-full h-full"
                     />
                    </div>
                </div>
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl font-headline">Become a partner</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
                        We are committed to building collaborative relationships with governments, local communities, academic institutions, foundations and others working to open pathways to lasting change.
                    </p>
                    <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105 border-2 border-primary hover:bg-primary group">
                        <Link href="/partner-with-us">
                            Partner with us
                            <ArrowRight className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 group-hover:text-white transition-transform"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
