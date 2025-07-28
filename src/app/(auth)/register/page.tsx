"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type RegistrationFormFields = {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(
    (form) => {
      return form.password === form.confirmPassword;
    },
    { path: ["confirmPassword"], message: "Passwords do not match" },
  );

type Form = z.infer<typeof schema>;

export default function SignupPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegistrationFormFields> = (values) => {
    console.log(values);
  };
  const handlErrors: SubmitErrorHandler<RegistrationFormFields> = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <div className="max-w-[500px] w-full px-4 py-10 mt-10 border-2 rounded-md">
        <form onSubmit={handleSubmit(onSubmit, handlErrors)}>
          <div className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Input placeholder="Enter First Name" defaultValue="" {...register("firstName")} />
              <i className="text-red-600 text-xs">{errors.firstName?.message}</i>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Input placeholder="Enter Last Name" defaultValue="" {...register("lastName")} />
              <i className="text-red-600 text-xs">{errors.lastName?.message}</i>
            </div>
            <div>
              <label htmlFor="email">Email id</label>
              <Input placeholder="Enter your email id" defaultValue="" {...register("email")} />
              <i className="text-red-600 text-xs">{errors.email?.message}</i>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="Enter Password"
                defaultValue=""
                {...register("password")}
              />
              <i className="text-red-600 text-xs">{errors.password?.message}</i>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm Password"
                defaultValue=""
                {...register("confirmPassword")}
              />
              <i className="text-red-600 text-xs">{errors.confirmPassword?.message}</i>
            </div>
            <div className="flex gap-2">
              <Button type="submit">Register</Button>
              <Button type="reset">Reset</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
