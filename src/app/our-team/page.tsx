
import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated team behind the R-Jolad Foundation.',
};

const boardOfTrustees = [
    { name: 'Dr. John Doe', role: 'Board Chairman', image: '/images/default-avatar.avif' },
    { name: 'Mrs. Rita Doe', role: 'Member', image: '/images/default-avatar.avif' },
    { name: 'Prof. James Doe', role: 'Member', image: '/images/default-avatar.avif' },
    { name: 'Mr. Ken Doe', role: 'Member', image: '/images/default-avatar.avif' },
];

const executiveDirector = [
    { name: 'Abraham Owumi', role: 'Grant Specialist', image: '/images/default-avatar.avif' },
    { name: 'Angela Doe', role: 'Finance Manager', image: '/images/default-avatar.avif' },
    { name: 'Abiola Mosuro', role: 'HR Manager', image: '/images/hrmanager1.jpg' },
    { name: 'Abisola Oshin-Gbadamosi', role: 'Compliance Team', image: '/images/compliance.jpg' },
]

export default function OurTeamPage() {
  return (
    <>
      <PageHeader title="Our Team" />

      <div className="bg-secondary">
        <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
          
          <section className="mb-16">
            <div className="bg-primary text-primary-foreground text-center rounded-lg mb-12">
                <div className="container py-8 md:py-10">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter font-headline text-white">
                        Board of Trustees
                    </h2>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
              {boardOfTrustees.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="p-2 rounded-lg shadow-md mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto">
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        data-ai-hint="team member portrait"
                        width={400}
                        height={500}
                        className="rounded-md object-cover w-full aspect-[4/5]"
                      />
                  </div>
                  <h3 className="text-xl font-headline font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="bg-primary text-primary-foreground text-center rounded-lg mb-12">
                <div className="container py-8 md:py-10">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter font-headline text-white">
                        Executive Directors
                    </h2>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
              {executiveDirector.map((member) => (
                <div key={member.name} className="text-center">
                   <div className="p-2 rounded-lg shadow-md mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto">
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        data-ai-hint="director portrait"
                        width={400}
                        height={500}
                        className="rounded-md object-cover w-full aspect-[4/5]"
                      />
                  </div>
                  <h3 className="text-xl font-headline font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
