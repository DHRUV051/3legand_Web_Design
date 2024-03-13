"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AccountDetailsForm = () => {
  // Set up react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px]">
      <h1 className="font-semibold text-[20px] leading-[32px]">
        Account Details
      </h1>

      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          First Name *
        </div>
        <Input
          type="text"
          placeholder="First Name"
          className=""
          {...register("firstname", {
            required: "First name is required",
            minLength: {
              value: 2,
              message: "First name should be at least 2 characters long",
            },
          })}
        />
        {errors.firstname && (
          <span className="text-red-500">{errors.firstname.message}</span>
        )}
      </div>
      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          Last Name *
        </div>
        <Input
          type="text"
          placeholder="Last Name"
          {...register("lastname", {
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name should be at least 2 characters long",
            },
          })}
        />
        {errors.lastname && (
          <span className="text-red-500">{errors.lastname.message}</span>
        )}
      </div>
      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          Display Name
        </div>
        <Input
          type="text"
          placeholder="Display Name"
          {...register("displayname")}
        />
        <p className="text-[12px] italic leading-[22px] text-[rgb(108,114,117)]">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>
      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          Email *
        </div>
        <Input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="pt-[16px]">
        <h1 className="font-semibold text-[20px] leading-[32px]">Password</h1>
      </div>

      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          Old Password *
        </div>
        <Input
          type="password"
          placeholder="Old Password"
          {...register("oldpassword", {
            required: "Old password is required",
            minLength: {
              value: 6,
              message: "Old password should be at least 6 characters long",
            },
          })}
        />
        {errors.oldpassword && (
          <span className="text-red-500">{errors.oldpassword.message}</span>
        )}
      </div>

      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          New Password *
        </div>
        <Input
          type="password"
          placeholder="New Password"
          {...register("newpassword", {
            required: "New password is required",
            minLength: {
              value: 6,
              message: "New password should be at least 6 characters long",
            },
          })}
        />
        {errors.newpassword && (
          <span className="text-red-500">{errors.newpassword.message}</span>
        )}
      </div>

      <div>
        <div className="uppercase text-[12px] text-[rgb(108,114,117)] font-bold leading-[22px]">
          Confirm New Password *
        </div>
        <Input
          type="password"
          placeholder="Confirm New Password"
          {...register("newpasswordconfirm", {
            required: "Confirmation is required",
            minLength: {
              value: 6,
              message: "Confirmation should be at least 6 characters long",
            },
          })}
        />
        {errors.newpasswordconfirm && (
          <span className="text-red-500">
            {errors.newpasswordconfirm.message}
          </span>
        )}
      </div>

      <Button type="submit" className=" px-[40px] py-[12px]">
        Save Changes
      </Button>
    </form>
  );
};

export default AccountDetailsForm;
