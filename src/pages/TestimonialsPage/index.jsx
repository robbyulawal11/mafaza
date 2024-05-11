import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import send from "../../assets/images/iconImage/Send.svg";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { TestimonialSection } from "../HomePage/Testimonial";
import heroService from "../../assets/images/heroImage/contactUsHero.png";
import Rating from "@/components/Rating";
import { useState } from "react";

import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

const FormSchemaTestimony = z.object({
  name: z
    .string({
      required_error: "Please type your name.",
    })
    .min(3, {
      message: "Name must be at least 3 characters.",
    }),
  phone: z.string({
    required_error: "Please type your number to be contacted.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  therapist: z.string({
    required_error: "Please select a therapist.",
  }),
  testimony: z
    .string({
      required_error: "Please type your testimony.",
    })
    .min(10, {
      message: "Testimony must be at least 10 characters.",
    }),
});

const TestimonyPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const onHandleSend = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "testimony"), data);
      console.log("Document written with ID: ", docRef.id);
      navigate(0);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const form = useForm({
    resolver: zodResolver(FormSchemaTestimony),
  });

  function onSubmit(data) {
    onHandleSend(data);
  }

  return (
    <div className="flex-grow">
      <section className="h-[400px] w-auto flex justify-center items-center bg-center" style={{ backgroundImage: `url(${heroService})` }}>
        <div className="w-[375px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center">
          <h2 className="text-white font-bold text-[48px]">Testimony</h2>
        </div>
      </section>
      <section className="bg-white pt-[70px] pb-[50px]">
        <div className="container">
          <div className="flex justify-center">
            <h2 className="text-[#062126] font-bold text-[48px] mb-[52px]">Make Testimony</h2>
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
                          <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" placeholder="Name" {...field} />
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
                        <FormControl>
                          <Input className="w-[372px] h-[50px] bg-white rounded-[10px]" type="number" pattern="[0-9]{12}" placeholder="Phone" {...field} />
                        </FormControl>
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
                              <SelectValue placeholder="Service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Sport Massage">Sport Massage</SelectItem>
                            <SelectItem value="Sport Injury">Sport Injury</SelectItem>
                            <SelectItem value="Bekam">Bekam</SelectItem>
                            <SelectItem value="Excercise Therapy">Excercise Therapy</SelectItem>
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
                              <SelectValue placeholder="Therapist" />
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
                <div className="flex flex-col gap-y-[32px] mb-[30px] items-center justify-center">
                  <FormField
                    control={form.control}
                    name="testimony"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea placeholder="Tell us a little bit about your testimony" className="resize-none w-[776px] h-[150px] bg-white rounded-[10px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Rating rating={rating} setRating={setRating} />
                </div>
                <div className="flex gap-x-[32px] mb-[30px] justify-center items-center">
                  <Button className="w-[156px] h-[67px] hover:bg-[#0F97B5]" type="submit">
                    Send <img className="ml-[20px]" src={send} alt="send" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </div>
  );
};

export default TestimonyPage;
