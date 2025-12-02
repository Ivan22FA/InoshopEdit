"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import AutoBreadcrumb from "@/components/ui/autobreadcrumb";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// ================= Schema =================
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactSchema = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactSchema) => {
    console.log("Form submitted:", values);
  };

  return (
    <main>
      {/* Cover */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden shadow-2xl border-b-gray-600">
        <Image
          src="/images/Acer1.jpg"
          alt="Innovation Cover"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">Hubungi Kami</h1>
          <p className="text-lg sm:text-xl max-w-2xl drop-shadow-sm">
            Silahkan berikan pertanyaan kepada BRIDA Jawa Timur.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mt-4">
        <AutoBreadcrumb />
      </div>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Contact Info */}
          <div className="p-10 rounded-2xl shadow-xl bg-linear-to-br from-white to-gray-100 border border-gray-200 flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Informasi Kontak</h2>
              <p className="text-gray-600 leading-relaxed">
                Hubungi BRIDA Jawa Timur untuk informasi lebih lanjut, kolaborasi, atau konsultasi.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-7 text-gray-700">

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-lg">Alamat BRIDA Jawa Timur</p>
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    Badan Riset dan Inovasi Daerah (BRIDA) Jawa Timur<br />
                    Jl. Pahlawan No. 110<br />
                    Surabaya, Jawa Timur 60174
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl shadow-sm">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Telepon</p>
                  <p className="text-gray-700 mt-1">
                    (031) 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email</p>
                  <p className="text-gray-700 mt-1">
                    info@brida-jatim.go.id
                  </p>
                </div>
              </div>

            </div>

            {/* GOOGLE MAPS */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.431167635002!2d112.73702027502076!3d-7.323224773673818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa179f3a2e5f%3A0x2eedc63f6d6c6b8e!2sBadan%20Riset%20dan%20Inovasi%20Daerah%20(BRIDA)%20Provinsi%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <h1 className="text-3xl font-bold">Kami Siap Membantu Anda</h1>
            <p className="text-gray-600 mt-2">
              Silahkan isi formulir di bawah ini dan tim kami akan menghubungi Anda sesegera mungkin.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">

                <div className="flex flex-col md:flex-row gap-6 w-full">

                  <div className="flex-1 space-y-6">

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-xl text-base" placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company / Organisation</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-xl text-base" placeholder="Your organisation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>

                  <div className="flex-1 space-y-6">

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-xl text-base" placeholder="example@mail.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-xl text-base" placeholder="+62..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>

                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input className="h-12 rounded-xl text-base" placeholder="Subject of your enquiry" {...field} />
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
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-40 rounded-xl text-base" placeholder="Tell us how we can help you..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg font-medium rounded-xl">
                  Submit Enquiry
                </Button>

              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/6285748720287"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Chat via WhatsApp"
      >
        {/* WhatsApp SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 0a7.953 7.953 0 00-6.17 2.879A7.928 7.928 0 000 8.037c0 1.409.363 2.788 1.052 4.01L0 16l4.07-1.059a7.964 7.964 0 003.981 1.052h.004c4.425 0 8.02-3.594 8.02-8.014a7.948 7.948 0 00-2.347-5.658A7.93 7.93 0 008.05 0zm-.017 14.575h-.003a6.57 6.57 0 01-3.356-.92l-.24-.144-2.41.63.644-2.352-.157-.242a6.56 6.56 0 01-.985-3.466A6.592 6.592 0 018.051 1.43a6.55 6.55 0 014.66 1.937 6.524 6.524 0 011.907 4.655 6.573 6.573 0 01-6.584 6.554zm3.73-4.934c-.205-.102-1.21-.598-1.397-.666-.187-.07-.324-.103-.46.102-.136.205-.528.666-.647.803-.12.136-.24.153-.444.051-.205-.102-.865-.32-1.647-1.017-.609-.542-1.02-1.21-1.137-1.415-.119-.204-.013-.314.09-.416.092-.091.205-.238.307-.358.102-.119.136-.204.205-.34.068-.136.034-.255-.017-.357-.051-.102-.46-1.11-.63-1.52-.165-.394-.333-.341-.46-.341-.119 0-.255-.017-.391-.017-.137 0-.358.051-.547.255-.188.204-.717.7-.717 1.705 0 1.004.734 1.973.835 2.11.102.136 1.444 2.204 3.503 3.084.49.204.87.326 1.167.417.49.153.938.132 1.29.08.393-.06 1.21-.495 1.38-.974.17-.478.17-.887.119-.974-.051-.085-.187-.136-.392-.238z" />
        </svg>
      </a>
    </main>
  );
}
