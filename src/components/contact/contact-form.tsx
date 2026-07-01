"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/shared/fade-in";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  business: z.string().optional(),
  message: z.string().min(10, "Please tell me a bit more about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Placeholder — connect to your backend or form service
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", data);
    reset();
  }

  if (isSubmitSuccessful) {
    return (
      <FadeIn>
        <div className="rounded-2xl border border-border bg-white p-8 text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Message sent
          </h3>
          <p className="mt-2 text-muted-foreground">
            Thank you for reaching out. I&apos;ll get back to you within 24
            hours.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 rounded-2xl border border-border bg-white p-6 md:p-8"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@business.com"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 90000 00000"
              {...register("phone")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="business">Business name (optional)</Label>
            <Input
              id="business"
              placeholder="Your business"
              {...register("business")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Tell me about your project</Label>
          <Textarea
            id="message"
            placeholder="What kind of website do you need? What's your timeline?"
            rows={5}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </FadeIn>
  );
}
