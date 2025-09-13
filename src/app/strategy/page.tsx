
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hospital, BrainCircuit, HeartHandshake, Target, CheckCircle, Shield } from "lucide-react";
import type { ReactElement } from "react";

export const metadata = {
  title: 'Our Strategy',
  description: 'Discover the strategic pillars that guide the R-Jolad Foundation\'s work for 2025-2030.',
};

const strategicPillars: {
    title: string;
    icon: ReactElement;
    goal: string;
    initiatives: string[];
    donorOpportunity: {
        title: string;
        description: string;
    }
}[] = [
    {
        title: "Strengthening Health Systems",
        icon: <Hospital className="w-12 h-12 text-primary" />,
        goal: "Improve healthcare access in 10 underserved states by 2030.",
        initiatives: [
            "Build/renovate 20 primary healthcare centers in rural areas.",
            "Deploy mobile clinics for remote communities.",
            "Train 5,000 healthcare workers (doctors, nurses, CHWs).",
        ],
        donorOpportunity: {
            title: "₦500M \"Adopt-a-Clinic\" Fund",
            description: "Covers construction, equipment, and staffing for a new clinic.",
        }
    },
    {
        title: "Scaling Digital Health Innovations",
        icon: <BrainCircuit className="w-12 h-12 text-primary" />,
        goal: "Leverage AI/tech to improve diagnosis and care delivery.",
        initiatives: [
            "Expand Octosoft’s AI triage platform to 50+ hospitals.",
            "Launch telemedicine hubs for maternal and chronic disease care.",
            "Develop real-time disease surveillance with EROM Diagnostics.",
        ],
        donorOpportunity: {
            title: "₦300M \"Tech for Health\" Fund",
            description: "Supports AI integration, platform development, and training.",
        }
    },
    {
        title: "Community Health & Equity",
        icon: <HeartHandshake className="w-12 h-12 text-primary" />,
        goal: "Reduce disparities in maternal, child, and infectious disease care.",
        initiatives: [
            "Free medical outreaches for 100,000+ patients annually.",
            "Malaria/HIV prevention programs in high-burden regions.",
            "Bastion Health Insurance expansion to 50,000 low-income families.",
        ],
        donorOpportunity: {
            title: "₦200M \"Health for All\" Fund",
            description: "Sponsors surgeries, vaccinations, and essential screenings.",
        }
    },
];

export default function StrategyPage() {
  return (
    <>
      <PageHeader title="Our Strategic Pillars (2025-2030)" />
      <div className="bg-secondary">
        <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mt-4 text-muted-foreground md:text-xl">
              To address Nigeria’s pressing healthcare challenges, we focus on three core pillars designed to create sustainable, system-level change.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start">
            {strategicPillars.map((pillar, index) => (
              <Card 
                key={pillar.title} 
                className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up w-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="items-center text-center">
                  {pillar.icon}
                  <CardTitle className="font-headline text-xl sm:text-2xl mt-4 text-primary">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                    <div className="text-center mb-6">
                        <p className="font-semibold text-muted-foreground flex items-center justify-center gap-2">
                           <Target className="w-5 h-5 text-accent" />
                           <span className="font-bold">Our Goal:</span> 
                        </p>
                        <p className="text-muted-foreground mt-1">{pillar.goal}</p>
                    </div>

                  <h4 className="font-headline font-bold mb-3 text-lg text-center md:text-left">Key Initiatives:</h4>
                  <ul className="space-y-3 text-muted-foreground flex-1">
                      {pillar.initiatives.map(item => (
                          <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-primary/5 p-6 mt-6 rounded-b-lg">
                    <div className="text-center w-full">
                        <h4 className="font-headline font-bold text-primary flex items-center justify-center gap-2">
                            <Shield className="w-5 h-5" />
                            Donor Opportunity
                        </h4>
                        <p className="font-bold text-accent text-lg mt-2">{pillar.donorOpportunity.title}</p>
                        <p className="text-muted-foreground text-sm mt-1">{pillar.donorOpportunity.description}</p>
                        <Button variant="link" className="mt-2">Learn More</Button>
                    </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
