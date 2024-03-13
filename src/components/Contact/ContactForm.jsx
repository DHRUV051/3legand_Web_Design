import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ContactForm = () => {
  const formSchema = z.object({
    fullname: z.string(),
    email: z.string().email(),
    message: z.string().min(2).max(50),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[16px]">
        <FormField
          name="fullname"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
                Fullname
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
                Email
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="message"
          className="mb-[14px]"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
                Message
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-[30%]  mt-[50px]">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
