import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ShieldCheck, Zap, Users } from "lucide-react";

const coreValuesList = [
  { 
    name: "Integrity", 
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    description: "We are committed to the highest standards of honesty and ethical conduct in all our endeavors, ensuring transparency and accountability to our communities and partners."
  },
  { 
    name: "Innovation", 
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    description: "We continuously seek creative and forward-thinking solutions to address the complex challenges our communities face, embracing change and adaptability."
  },
  { 
    name: "Impact", 
    icon: <Zap className="h-8 w-8 text-primary" />,
    description: "We are dedicated to creating measurable and sustainable change, focusing on initiatives that have a lasting positive effect on people's lives."
  },
  { 
    name: "Collaboration", 
    icon: <Users className="h-8 w-8 text-primary" />,
    description: "We believe in the power of partnership, working closely with local leaders, organizations, and volunteers to achieve our collective goals."
  },
];


export function CoreValues() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Core Values</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These values guide our actions and decisions, ensuring we remain true to our mission and the communities we serve.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-12">
          {coreValuesList.map((value) => (
            <Card key={value.name} className="text-center h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-4 w-full">
              <CardHeader className="items-center">
                {value.icon}
                <CardTitle className="font-headline mt-4">{value.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
