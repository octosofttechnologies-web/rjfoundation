
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactUsPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const recipient = "abraham.owumi@rjolad.com";
    const subject = `R-Jolad Foundation Enquiry from ${data.firstName} ${data.lastName}`;
    const body = `
      Hi, I want to make an enquiry.:
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="container py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Have questions or want to get involved? Reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-headline font-bold">Get in Touch</h2>
              <p className="text-muted-foreground mt-2">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <User className="w-6 h-6 text-primary" />
                <span className="font-semibold">Abraham Owumi</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Briefcase className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Grants Specialist, R-Jolad Foundation</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">+234 704 690 9010</span>
              </div>
               <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:abraham.owumi@rjolad.com" className="text-muted-foreground hover:text-primary">abraham.owumi@rjolad.com</a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
