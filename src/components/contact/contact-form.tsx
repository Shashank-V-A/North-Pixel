"use client";

import { useState } from "react";
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

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError(
        "Form is not configured yet. Please email northpixelcreations@gmail.com directly."
      );
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        business: data.business || "Not provided",
        message: data.message,
        subject: `New enquiry from ${data.name}`,
        from_name: "North Pixel Website",
      }),
    });

    const result = (await response.json()) as Web3FormsResponse;

    if (!response.ok || !result.success) {
      setSubmitError(
        result.message ??
          "Something went wrong. Please try again or email northpixelcreations@gmail.com."
      );
      return;
    }

    reset();
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <FadeIn>
        <div className="rounded-2xl border border-border bg-surface p-10 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand/10">
            <span className="font-mono text-sm text-brand">✓</span>
          </div>
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
        className="space-y-5"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-ink-subtle">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              className="h-11 border-border bg-surface"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-ink-subtle">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@business.com"
              className="h-11 border-border bg-surface"
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
            <Label htmlFor="phone" className="text-ink-subtle">
              Phone (optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 90000 00000"
              className="h-11 border-border bg-surface"
              {...register("phone")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="business" className="text-ink-subtle">
              Business name (optional)
            </Label>
            <Input
              id="business"
              placeholder="Your business"
              className="h-11 border-border bg-surface"
              {...register("business")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-ink-subtle">
            Tell me about your project
          </Label>
          <Textarea
            id="message"
            placeholder="What kind of website do you need? What's your timeline?"
            rows={5}
            className="border-border bg-surface"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {submitError && (
          <p className="text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </FadeIn>
  );
}
