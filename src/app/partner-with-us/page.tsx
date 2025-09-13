import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Scaling, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: 'Partner With Us',
  description: 'Join the R-Jolad Foundation as a partner to drive meaningful change.',
};

const whyPartnerPoints = [
  {
    title: "Vision",
    description: "Committed to bridging critical healthcare gaps in Nigeria.",
    icon: <CheckCircle2 className="w-10 h-10 text-white" />,
    imageUrl: "/images/v.jpg",
    aiHint: "community health worker"
  },
  {
    title: "Professionalism",
    description: "Proven healthcare impact of our founding organization, AfyA Care Nigeria Limited, and its operational entities.",
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    imageUrl: "/images/profes.jpg",
    aiHint: "medical professionals"
  },
  {
    title: "Scalability",
    description: "Existing networks in key cities across the country.",
    icon: <Scaling className="w-10 h-10 text-white" />,
    imageUrl: "/images/scale.jpg",
    aiHint: "city network"
  },
  {
    title: "Accountability",
    description: "Backed by AfyA Care’s institutional systems and processes.",
    icon: <Users className="w-10 h-10 text-white" />,
    imageUrl: "/images/acc.jpg",
    aiHint: "business meeting"
  },
]


export default function PartnerWithUsPage() {
  return (
    <>
      <PageHeader title="Partner With Us" />
      <div className="bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container text-center px-4 md:px-6">
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-center md:text-xl">
                  Collaboration is at the heart of what we do. We partner with corporations, non-profits, and individuals who share our vision for a better world.
              </p>
              <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                  <div className="p-6 bg-background rounded-lg shadow-sm text-center md:text-left w-full md:w-11/12 lg:w-full">
                      <h3 className="text-xl font-bold font-headline">Corporate Partnership</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Align your brand with a cause that matters. We offer various partnership levels with opportunities for employee engagement and brand visibility.</p>
                  </div>
                  <div className="p-6 bg-background rounded-lg shadow-sm text-center md:text-left w-full md:w-11/12 lg:w-full">
                      <h3 className="text-xl font-bold font-headline">Non-Profit Collaboration</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Let's work together to amplify our impact. We seek to collaborate with local and international non-profits on joint projects and initiatives.</p>
                  </div>
                  <div className="p-6 bg-background rounded-lg shadow-sm text-center md:text-left w-full md:w-11/12 lg:w-full">
                      <h3 className="text-xl font-bold font-headline">Individual Philanthropy</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Your support can make a world of difference. Join our network of philanthropists and directly contribute to life-changing projects.</p>
                  </div>
              </div>

              <div className="my-16 md:my-24">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter font-headline mb-12">
                  Why Partner with Us?
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {whyPartnerPoints.map((point) => (
                        <Card key={point.title} className="relative text-white overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-11/12 lg:w-full">
                            <Image 
                                src={point.imageUrl}
                                alt={point.title}
                                data-ai-hint={point.aiHint}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/80" />
                            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center h-full">
                                {point.icon}
                                <h3 className="text-xl font-bold font-headline mt-4">{point.title}</h3>
                                <p className="mt-2 text-sm text-primary-foreground/90">{point.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
              </div>

               <div className="mt-12 text-center">
                  <p className="text-muted-foreground">Ready to make an impact?</p>
                  <Button asChild size="lg" className="mt-4">
                      <Link href="mailto:abraham.owumi@rjolad.com?subject=Request%20To%20Partner%20With%20R-Jolad%20Foundation&body=Hi%20Abraham%2C%20I%20would%20like%20to%20request%20a%20partnership%20with%20R-Jolad%20Foundation...">
                        Contact Our Partnership Team
                      </Link>
                  </Button>
              </div>
          </div>
      </div>
    </>
  );
}
