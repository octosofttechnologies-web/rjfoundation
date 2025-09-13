
import Image from "next/image";
import { CoreValues } from "@/components/CoreValues";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Laptop, HeartHandshake, GraduationCap, Siren, UserCheck, Map, PlusCircle, CheckCircle, Target, Zap, Rocket, Eye, Goal, ArrowRight, TrendingUp, Users, PiggyBank, Scale, GanttChartSquare, Landmark, HandCoins, ShieldCheck, Telescope, Trophy, BarChart, FileCheck2, Scaling, Handshake, Lightbulb, Mail, Phone, MapPin } from "lucide-react";
import type { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from 'react';
import Link from "next/link";


export const metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and history of the R-Jolad Foundation.',
};

const objectives: { title: string; icon: ReactElement; points: string[] }[] = [
  {
    title: "Infrastructure Development",
    icon: <Building className="w-8 h-8 text-primary" />,
    points: [
      "Construct/renovate hospitals in underserved areas",
      "Deploy solar-powered health facilities",
    ],
  },
  {
    title: "Technology-Driven Healthcare",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    points: [
      "Scale Octosoft's AI diagnostics to rural areas",
      "Expand telemedicine networks",
    ],
  },
    {
    title: "Community Health Programs",
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    points: [
      "Free medical missions",
      "Maternal/child health initiatives",
    ],
  },
  {
    title: "Capacity Building",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    points: [
        "Train healthcare workers through R-Jolad Medical Academy",
    ],
  },
    {
    title: "Emergency Response",
    icon: <Siren className="w-8 h-8 text-primary" />,
    points: [
        "Rapid deployment of mobile clinics",
    ],
  },
];


const thematicAreas = [
    {
        title: "Healthcare Infrastructure Development",
        content: [
            "Hospital/clinic construction & renovation",
            "Specialized health centres (maternal, infectious diseases)",
            "Medical equipment provisioning",
        ],
    },
    {
        title: "Medical Technology & Innovation",
        content: [
            "AI-powered diagnostics (Octosoft)",
            "Data analytics for disease tracking",
        ],
    },
    {
        title: "Community Health & Outreach",
        content: [
            "Free medical missions (screenings, medical check-ups)",
            "Maternal & child health programs",
            "Disease control (malaria, HIV/AIDS, TB)",
        ],
    },
    {
        title: "Capacity Building & Training",
        content: [
            "R-Jolad Medical Academy",
            "Continuing Medical Education (CME)",
        ],
    },
    {
        title: "Health Insurance",
        content: [
            "Bastion Community Health Insurance",
            "Microfinancing for healthcare",
            "Universal Health Coverage (UHC) advocacy",
        ],
    },
    {
        title: "Research & Development (R&D)",
        content: [
            "Clinical trials & operational research",
            "Innovation labs (e.g., drone medicine delivery)",
        ],
    },
];

const leadership = [
    { name: "Dr. Funsho Oladipo", role: "Board Chair", description: "CEO, AfyA Care - 20+ yrs healthcare experience", initials: 'FO', image: '/images/funsho.png' },
    { name: "Dapo Akinsanya", role: "Executive Director", description: "Led 8+ AfyA Care health projects", initials: 'DA', image: '/images/dapo.jpg' },
]

const fundingOpportunities = [
    {
        title: "₦50M Clinic Adoption",
        description: "Replicate our successful solar-powered clinic model in a new community, providing vital healthcare to hundreds.",
        imageUrl: "https://picsum.photos/seed/funding1/600/400",
        aiHint: "solar clinic",
        icon: <PlusCircle className="h-10 w-10 text-white" />
    },
    {
        title: "₦200M Tech Scale-Up",
        description: "Expand our Octosoft AI diagnostic tool to 100 new facilities, dramatically improving diagnostic accuracy.",
        imageUrl: "https://picsum.photos/seed/funding2/600/400",
        aiHint: "AI diagnostics",
        icon: <Laptop className="h-10 w-10 text-white" />
    },
    {
        title: "₦30M Training Hub",
        description: "Fund a training cycle to certify 500 new community health workers, building local healthcare capacity.",
        imageUrl: "https://picsum.photos/seed/funding3/600/400",
        aiHint: "health training",
        icon: <GraduationCap className="h-10 w-10 text-white" />
    }
]

const strategicCommitments = [
    "Expanding access to quality healthcare for underserved communities.",
    "Scaling digital health innovations (AI, telemedicine, data analytics).",
    "Strengthening health systems through infrastructure, training, and partnerships.",
    "Ensuring sustainability through local leadership and donor collaboration."
];

const investmentHighlights = [
    {
        icon: <Trophy className="w-10 h-10 text-primary" />,
        title: "Proven Impact",
        description: "200,000+ patients served annually."
    },
    {
        icon: <Rocket className="w-10 h-10 text-primary" />,
        title: "Tech-Driven",
        description: "Nigeria’s first AI-powered healthcare platform (Octosoft)."
    },
    {
        icon: <GanttChartSquare className="w-10 h-10 text-primary" />,
        title: "Integrated Model",
        description: "Hospitals, diagnostics, insurance, and healthtech under one roof."
    }
]

const missionPoints = [
    "Infrastructure development (clinics, equipment).",
    "Digital health solutions (AI diagnostics, telemedicine).",
    "Community health programs (free/subsidized care).",
    "Capacity building (training for healthcare workers).",
];

const theoryOfChangeSteps = [
    { title: 'Inputs', description: 'Funding, Tech, Partnerships', icon: <PiggyBank /> },
    { title: 'Activities', description: 'Clinic Construction, AI Deployment, Training', icon: <Zap /> },
    { title: 'Outputs', description: 'More Facilities, Faster Diagnoses, Trained Workers', icon: <TrendingUp /> },
    { title: 'Impact', description: 'Healthier Communities, Reduced Mortality', icon: <HeartHandshake /> },
];

const localizedApproachPoints = [
    "Hiring & training Nigerian staff (90% of our team is local).",
    "Partnering with state governments and community leaders.",
    "Tailoring solutions to cultural and regional needs.",
];

const fundingSources = [
    { name: "Institutional Donors", description: "Gates Foundation, WHO, USAID", icon: <Landmark /> },
    { name: "Corporate Partnerships", description: "Pharma, tech firms", icon: <HandCoins /> },
    { name: "Government Grants", description: "Federal/State Health Ministries", icon: <Building /> },
    { name: "Individual Philanthropy", description: "High-net-worth donors", icon: <Users /> },
]

const impactMetrics = [
    { indicator: "Clinics Built/Renovated", target2025: "5", goal2030: "20" },
    { indicator: "Patients Served Annually", target2025: "250,000", goal2030: "500,000" },
    { indicator: "Healthcare Workers Trained", target2025: "1,000", goal2030: "5,000" },
    { indicator: "AI Diagnostics Deployed", target2025: "10 Hospitals", goal2030: "50 Hospitals" },
]

const whyInvestPoints = [
    { title: "High ROI", description: "Every ₦1M invested reaches 5,000 patients.", icon: <TrendingUp /> },
    { title: "Scalability", description: "Models replicable across West Africa.", icon: <Scaling /> },
    { title: "Proven Leadership", description: "Backed by AfyA Care’s 40+ years of experience.", icon: <ShieldCheck /> },
]

const ctaPoints = [
    { text: "Funding specific initiatives (e.g., clinics, AI, outreaches).", icon: <PiggyBank className="w-6 h-6 text-accent" /> },
    { text: "Co-designing programs for shared impact.", icon: <Handshake className="w-6 h-6 text-accent" /> },
    { text: "Advocating for policy changes in digital health and universal coverage.", icon: <Lightbulb className="w-6 h-6 text-accent" /> },
];

const appendices = [
    "Case Studies: Past successes (e.g., Gates Foundation partnership).",
    "Budget Breakdown: Detailed project costing.",
    "Donor Recognition Framework."
];


export default function AboutUsPage() {
  return (
    <>
      <PageHeader title="About Us" />

      <div className="container py-12 md:py-24 px-4 md:px-6">
         <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              The R-Jolad Foundation
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              The R-Jolad Foundation is a non-profit organization dedicated to fostering lasting change in communities through targeted initiatives in health, education, and economic empowerment.
            </p>
            <p className="mt-4 text-muted-foreground">
              Founded on the principles of compassion, integrity, and collaboration, we believe in a world where everyone has the opportunity to thrive. Our work is driven by a deep commitment to the people we serve, and we strive to create sustainable solutions that address the root causes of poverty and inequality.
            </p>
             <p className="mt-4 text-muted-foreground">
              From providing essential healthcare services in underserved areas to funding scholarships for promising students, our programs are designed to create a ripple effect of positive change. We partner with local leaders, organizations, and volunteers to ensure our efforts are community-led and culturally sensitive.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto">
            <Image 
              src="/images/care1.jpg"
              alt="R-Jolad Foundation team meeting"
              data-ai-hint="team meeting"
              width={800}
              height={600}
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

       <section className="bg-secondary py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">
                Executive Summary
              </h2>
              <p className="text-muted-foreground">
                R-Jolad Foundation, under the umbrella of AfyA Care Nigeria Limited, is a leading healthcare NGO leveraging the strengths of its subsidiaries—R-Jolad Hospital, Bastion Health Insurance, EROM Diagnostics, and Octosoft Technologies—to deliver integrated, tech-driven healthcare solutions.
              </p>
              <p className="mt-4 text-muted-foreground font-semibold">
                This 5-year strategic plan (2025-2030) outlines our commitment to:
              </p>
              <ul className="mt-4 space-y-3">
                {strategicCommitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Image
                    src="/images/exec.jpg"
                    alt="Strategic planning session"
                    data-ai-hint="strategic planning"
                    width={500}
                    height={500}
                    className="rounded-full shadow-xl w-full max-w-xs sm:max-w-sm"
                />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-background py-12 md:py-24">
          <div className="container text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12">
              Why Invest in R-Jolad?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {investmentHighlights.map((highlight, index) => (
                    <Card key={highlight.title} className="text-center p-6 bg-background transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up w-full" style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="flex justify-center mb-4">
                            {highlight.icon}
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary">{highlight.title}</h3>
                        <p className="mt-2 text-muted-foreground">{highlight.description}</p>
                    </Card>
                ))}
            </div>
          </div>
      </section>

      <section className="bg-secondary py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-full">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Telescope className="w-10 h-10 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground md:text-lg">
                  A Nigeria where every individual has access to equitable, innovative, and sustainable healthcare.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-full">
               <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Goal className="w-10 h-10 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">To bridge healthcare gaps through:</p>
                <ul className="space-y-2 text-left text-muted-foreground list-disc list-inside">
                  {missionPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-center mb-12">
                Theory of Change
            </h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                {theoryOfChangeSteps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <div className="flex flex-col items-center text-center animate-fade-in-up w-full md:w-auto" style={{ animationDelay: `${index * 0.2}s` }}>
                            <Card className="w-48 h-48 rounded-full flex flex-col items-center justify-center p-4 shadow-lg border-2 border-primary/20 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                                <div className="text-primary">{React.cloneElement(step.icon, { className: "w-10 h-10" })}</div>
                                <h3 className="font-headline text-lg mt-2 font-bold">{step.title}</h3>
                            </Card>
                            <p className="mt-4 text-muted-foreground w-48">{step.description}</p>
                        </div>
                        {index < theoryOfChangeSteps.length - 1 && (
                             <ArrowRight className="w-12 h-12 text-primary/30 hidden md:block mx-4" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
      </section>


      <section className="bg-secondary py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">
                Localized Approach
              </h2>
              <p className="text-muted-foreground mb-6">
                We prioritize locally led development by:
              </p>
              <ul className="space-y-4">
                {localizedApproachPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                       <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-muted-foreground mt-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up w-full max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
                <Image
                    src="/images/staff.jpg"
                    alt="Local team collaboration"
                    data-ai-hint="local team"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg mx-auto"
                />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-background py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Funding & Sustainability Plan
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-6">Diversified Funding Strategy</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {fundingSources.map(source => (
                            <Card key={source.name} className="p-4 bg-secondary w-full">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-background rounded-md">
                                        {React.cloneElement(source.icon, { className: "w-6 h-6 text-primary" })}
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-headline">{source.name}</h4>
                                        <p className="text-sm text-muted-foreground">{source.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-6">Financial Accountability</h3>
                    <Card className="bg-secondary p-6 w-full">
                        <div className="flex items-start gap-4 mb-4">
                            <FileCheck2 className="w-8 h-8 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold">Annual Audits</h4>
                                <p className="text-muted-foreground">Annual audits by KPMG Nigeria ensure full transparency.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <BarChart className="w-8 h-8 text-primary mt-1" />
                            <div>
                                <h4 className="font-bold">Transparent Reporting</h4>
                                <p className="text-muted-foreground">Donors receive real-time updates via our impact dashboards.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
      </section>

       <section className="bg-secondary py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-center mb-12">
              Measuring Our Impact
            </h2>
            <Card className="max-w-4xl mx-auto shadow-lg w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-primary">Key Indicator</TableHead>
                            <TableHead className="text-center font-bold text-primary">2025 Target</TableHead>
                            <TableHead className="text-center font-bold text-primary">2030 Goal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {impactMetrics.map((metric) => (
                            <TableRow key={metric.indicator}>
                                <TableCell className="font-medium">{metric.indicator}</TableCell>
                                <TableCell className="text-center">{metric.target2025}</TableCell>
                                <TableCell className="text-center">{metric.goal2030}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
          </div>
       </section>

        <section className="bg-background py-12 md:py-24">
            <div className="container text-center px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-12">
                    Why Donors Should Invest
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {whyInvestPoints.map((point, index) => (
                        <Card key={point.title} className="text-center p-6 bg-secondary transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up w-full" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="flex justify-center mb-4 text-primary">
                                {React.cloneElement(point.icon, { className: "w-10 h-10" })}
                            </div>
                            <h3 className="text-xl font-bold font-headline text-primary">{point.title}</h3>
                            <p className="mt-2 text-muted-foreground">{point.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


      <section className="bg-secondary py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Our Objectives
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Leveraging AfyA Care's track record to accelerate healthcare access:
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj) => (
              <Card key={obj.title} className="text-left bg-background transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-full">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  {obj.icon}
                  <CardTitle className="font-headline text-xl text-primary">{obj.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {obj.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-center mb-12">
            Thematic Areas/Organization Programs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {thematicAreas.map((area, index) => (
                <AccordionItem value={`item-${index + 1}`} key={area.title}>
                    <AccordionTrigger className="text-xl font-headline font-bold text-primary hover:no-underline text-left">
                        {index + 1}. {area.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pl-8">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {area.content.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Governance &amp; Accountability
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-headline text-primary mb-6">Leadership</h3>
              <div className="space-y-6">
                {leadership.map(member => (
                   <Card key={member.name} className="bg-background w-full">
                      <CardContent className="flex flex-col sm:flex-row items-center gap-4 p-4 text-center sm:text-left">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-lg font-headline">{member.name}</h4>
                          <p className="text-primary font-medium">{member.role}</p>
                          <p className="text-sm text-muted-foreground">{member.description}</p>
                        </div>
                      </CardContent>
                   </Card>
                ))}
              </div>
            </div>
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline text-primary mb-6">Operational Support</h3>
                <Card className="bg-background w-full">
                  <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <UserCheck className="w-8 h-8 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold">Audited Financial Systems</h4>
                            <p className="text-muted-foreground">Backed by AfyA Care's audited financial systems (KPMG), ensuring transparency and accountability.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Map className="w-8 h-8 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold">Existing State Coordinators</h4>
                            <p className="text-muted-foreground">Leveraging an established network of state coordinators in Lagos, Ogun, and Rivers for effective program delivery.</p>
                        </div>
                      </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Funding Opportunities
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We invite donors to invest in these priority areas with proven models for success. Your contribution can create a significant and lasting impact.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fundingOpportunities.map(opp => (
                    <Card key={opp.title} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 h-80 w-full">
                         <Image 
                            src={opp.imageUrl}
                            alt={opp.title}
                            data-ai-hint={opp.aiHint}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/80 transition-colors group-hover:bg-primary/90" />
                        <div className="relative z-10 flex flex-col items-center justify-between p-6 text-center text-white h-full">
                           <div className="flex-1 flex flex-col items-center justify-center">
                                {opp.icon}
                                <CardTitle className="font-headline text-2xl mt-4">{opp.title}</CardTitle>
                                <CardDescription className="text-primary-foreground/90 mt-2 flex-grow">{opp.description}</CardDescription>
                           </div>
                           <Button variant="secondary" className="mt-6">Invest Now</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <CoreValues />

      <section className="bg-primary/5 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6 text-primary">
                Join Us in Building a Healthier Future
              </h2>
              <p className="text-muted-foreground mb-6">
                We invite governments, foundations, and corporations to partner with us in:
              </p>
              <ul className="space-y-4">
                {ctaPoints.map((point) => (
                  <li key={point.text} className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-full mt-1">
                      {point.icon}
                    </div>
                    <span className="text-muted-foreground text-lg">{point.text}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center md:text-left">
                <Button asChild size="lg" className="mt-8 animate-fade-in-up">
                  <Link href="/partner-with-us">Partner With Us</Link>
                </Button>
              </div>
            </div>
             <div className="flex justify-center animate-fade-in-up w-full max-w-md mx-auto" style={{ animationDelay: '0.2s' }}>
                <Image
                    src="/images/hfuture.jpg"
                    alt="Partnership handshake"
                    data-ai-hint="partnership handshake"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                />
            </div>
          </div>
        </div>
      </section>

       <section className="bg-background py-12 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 px-4 md:px-6">
            <div className="text-center md:text-left">
                 <h3 className="text-2xl font-bold font-headline text-primary mb-6">Contact Information</h3>
                 <Card className="bg-secondary p-6 w-full">
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="/images/user-placeholder.jpg" alt="Abraham Owumi" />
                          <AvatarFallback>AO</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="font-bold text-lg font-headline">Abraham Owumi</h4>
                            <p className="text-primary font-medium">Grants Specialist</p>
                        </div>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center gap-3 justify-center sm:justify-start">
                            <Phone className="w-5 h-5 text-primary" />
                            <span>+234 704 690 9010</span>
                        </div>
                         <div className="flex items-center gap-3 justify-center sm:justify-start">
                            <Mail className="w-5 h-5 text-primary" />
                            <span>abraham.owumi@afya.care</span>
                        </div>
                         <div className="flex items-center gap-3 justify-center sm:justify-start">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>6th Floor, Mulliner Towers, Ikoyi, Lagos.</span>
                        </div>
                    </div>
                    <p className="text-sm mt-4 text-muted-foreground">Website: <a href="http://www.rjolad.com/foundation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.rjolad.com/foundation</a></p>
                 </Card>
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline text-primary mb-6">Appendices & Conclusion</h3>
                <Card className="bg-secondary p-6 w-full">
                    <h4 className="font-bold text-lg font-headline mb-4">Appendices</h4>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      {appendices.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                        This plan ensures R-Jolad Foundation remains at the forefront of healthcare transformation in Nigeria, delivering measurable, sustainable impact. Let’s build a healthier future—together.
                    </p>
                </Card>
            </div>
        </div>
       </section>

    </>
  );
}
