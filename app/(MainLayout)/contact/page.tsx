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

  {/* Title */}
  <div>
    <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Informasi Kontak</h2>
    <p className="text-gray-600 leading-relaxed">
      Hubungi BRIDA Jawa Timur untuk informasi lebih lanjut, kolaborasi, atau konsultasi.
    </p>
  </div>

  {/* Contact Info List */}
  <div className="space-y-7 text-gray-700">

    {/* Alamat */}
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

    {/* Telepon */}
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

    {/* Email */}
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


          {/* RIGHT: Form */}
          <div>
            <h1 className="text-3xl font-bold">Kami Siap Membantu Anda</h1>
            <p className="text-gray-600 mt-2">
              Silahkan isi formulir di bawah ini dan tim kami akan menghubungi Anda sesegera mungkin.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-6"
              >
                {/* 2 COLUMNS */}
                <div className="flex flex-col md:flex-row gap-6 w-full">

                  {/* LEFT */}
                  <div className="flex-1 space-y-6">

                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 rounded-xl text-base"
                              placeholder="John Doe"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company / Organisation</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 rounded-xl text-base"
                              placeholder="Your organisation"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>

                  {/* RIGHT */}
                  <div className="flex-1 space-y-6">

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 rounded-xl text-base"
                              placeholder="example@mail.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 rounded-xl text-base"
                              placeholder="+62..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>

                </div>

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12 rounded-xl text-base"
                          placeholder="Subject of your enquiry"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-40 rounded-xl text-base"
                          placeholder="Tell us how we can help you..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-medium rounded-xl"
                >
                  Submit Enquiry
                </Button>

              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
