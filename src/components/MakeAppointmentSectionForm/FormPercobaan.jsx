import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";
import send from "../../assets/images/iconImage/Send.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please type your name.",
    })
    .min(3, {
      message: "Name must be at least 3 characters.",
    }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  therapist: z.string({
    required_error: "Please select a therapist.",
  }),
  location: z.string({
    required_error: "Please select a location.",
  }),
  phone: z.string({
    required_error: "Please type your number to be contacted.",
  }),
  date: z.string({
    required_error: "Please type your date to join appointment.",
  }),
  time: z.string({
    required_error: "Please type your time to join appointment.",
  }),
  complaint: z
    .string({
      required_error: "Please type your complaint.",
    })
    .min(10, {
      message: "Complaint must be at least 10 characters.",
    })
    .max(160, {
      message: "Complaint must not be longer than 30 characters.",
    }),
});

export function InputForm() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const onHandleSend = (userAppointment) => {
    axios
      .post(`${import.meta.env.VITE_ENDPOINT}/appointment`, JSON.stringify(userAppointment), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast({
          title: "You submitted the following values:",
          description: "Donee pokoknyaaaaaaaaaa",
        });
        console.log("Response:", response.data);
        navigate(0);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    onHandleSend(data);
  }

  return (
    <section className="bg-white pt-[70px] pb-[140px]">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="text-[#062126] font-bold text-[48px] mb-[52px]">Buat Reservasi</h2>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="container w-2/3 space-y-6">
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" placeholder="Nama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[372px] h-[50px] bg-white rounded-[10px]">
                            <SelectValue placeholder="Jenis Kelamin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Laki-laki</SelectItem>
                          <SelectItem value="Female">Prempuan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[372px] h-[50px] bg-white rounded-[10px]">
                            <SelectValue placeholder="Layanan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Sport Massage">Terapi Olahraga</SelectItem>
                          <SelectItem value="Sport Injury">Cedera Olahraga</SelectItem>
                          <SelectItem value="Bekam">Bekam</SelectItem>
                          <SelectItem value="Excercise Therapy">Latihan Terapi</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="therapist"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[372px] h-[50px] bg-white rounded-[10px]">
                            <SelectValue placeholder="Terapis" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Masseur</SelectLabel>
                            <SelectItem value="Dr. Derek Mendes, S.Or">Dr. Derek Mendes, S.Or</SelectItem>
                            <SelectItem value="Bob Singer, S.Or">Bob Singer, S.Or</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>Masseus</SelectLabel>
                            <SelectItem value="Jane Nicholson, S.Or">Jane Nicholson, S.Or</SelectItem>
                            <SelectItem value="Dr. Alison Pretty, S.Or">Dr. Alison Pretty, S.Or</SelectItem>
                            <SelectItem value="Rebecca Flows, S.Or">Rebecca Flows, S.Or</SelectItem>
                            <SelectItem value="Maria Anderson, S.Or">Maria Anderson, S.Or</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[372px] h-[50px] bg-white rounded-[10px]">
                            <SelectValue placeholder="Lokasi" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Masjid Al-Jami">Masjid Al-Jami</SelectItem>
                          <SelectItem value="Jl. Veteran No. 93">Jl. Veteran No. 93</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" type="number" pattern="[0-9]{12}" placeholder="Nomor Telepon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <FormField
                  control={form.control}
                  name="complaint"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Ceritakan tentang keluhan dan keinginan Anda" className="resize-none w-[776px] h-[150px] bg-white rounded-[10px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-x-[32px] mb-[30px] justify-center">
                <Button className="w-[156px] h-[67px] hover:bg-[#0F97B5]" type="submit">
                  Kirim<img className="ml-[20px]" src={send} alt="send" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
