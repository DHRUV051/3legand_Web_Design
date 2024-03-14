import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import clsx from "clsx";
import { CiCreditCard1 } from "react-icons/ci";
import { Checkbox, Radio } from "@material-tailwind/react";

const CustomRadioButton = ({ value, label, onChange, checked }) => (
  <div
    className={clsx(
      "flex items-cenyter space-x-2 px-[16px] py-[13px] border-[2px] border-[rgb(20,23,24)] rounded-[4px] my-[24px]",
      checked && "bg-[rgb(243,245,247)] "
    )}
  >
    <Radio
      id={value}
      name="paymentMethod"
      value={value}
      className="accent-black"
      checked={checked}
      onChange={() => onChange(value)}
    />
    <div className="flex items-center justify-between w-full">
      <label
        htmlFor={value}
        className="w-full justify-between text-[16px] font-normal leading-[26px] flex"
      >
        <div>{label}</div>
      </label>
      <div className="ml-auto">{value === "Creditcard" && <CiCreditCard1 size={32} />}</div>
    </div>
  </div>
);

const PrivacyCheckbox = ({ onChange, checked }) => (
  <div className="flex items-center space-x-2 mt-4">
    <Checkbox
      id="privacyCheckbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
    <label
      htmlFor="privacyCheckbox"
      className="text-[16px] leading-[26px] text-[rgb(108,114,117)]"
    >
      Use a different billing address (optional)
    </label>
  </div>
);

const CheckoutForm = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const selectedPaymentMethod = watch("paymentMethod");
  const privacyConsent = watch("privacyConsent");

  const handlePaymentSelection = (value) => {
    setValue("paymentMethod", value);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePrivacyConsent = (value) => {
    setValue("privacyConsent", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px]">
      <div className="space-y-[24px] border-[2px] border-[rgb(20,23,24)] rounded-[4px] px-[16px] py-[40px]">
        <h1 className="text-[20px] leading-[28px] font-medium">
          Contact Infomation
        </h1>
        <div className="flex gap-[24px] w-full">
          <div className="w-full">
            <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
              First Name
            </label>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First Name is required" }}
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="First Name" />
                  {fieldState?.error && <span>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>

          <div className="w-full">
            <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
              Last Name
            </label>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last Name is required" }}
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="Last Name" />
                  {fieldState?.error && <span>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>
        </div>

        <div>
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Phone Number
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone Number is required" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} type="tel" placeholder="Phone Number" />
                {fieldState?.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </div>

        <div>
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Email Address
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} type="email" placeholder="Email Address" />
                {fieldState?.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </div>
      </div>

      <div className="space-y-[24px] border-[2px] border-[rgb(20,23,24)] rounded-[4px] px-[16px] py-[40px]">
        <h1 className="text-[20px] leading-[28px] font-medium">
          Shipping Address
        </h1>

        <div>
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Street Address
          </label>
          <Controller
            name="streetAddress"
            control={control}
            rules={{ required: "Street Address is required" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} placeholder="Street Address" />
                {fieldState?.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </div>

        <div>
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Country
          </label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field, fieldState }) => (
              <>
                <select {...field} placeholder="Country">
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
                {fieldState?.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </div>

        <div>
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Town/City
          </label>
          <Controller
            name="townCity"
            control={control}
            rules={{ required: "Town/City is required" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} placeholder="Town/City" />
                {fieldState?.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </div>

        <div className="flex w-full gap-[24px]">
          <div className="w-full">
            <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
              State
            </label>
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="State" />
                  {fieldState?.error && <span>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>

          <div className="w-full">
            <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
              Zipcode
            </label>
            <Controller
              name="zipcode"
              control={control}
              rules={{ required: "Zipcode is required" }}
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="Zipcode" />
                  {fieldState?.error && <span>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>
        </div>

        <PrivacyCheckbox
          onChange={handlePrivacyConsent}
          checked={privacyConsent}
        />
      </div>

      <div className="space-y-[24px] border-[2px] border-[rgb(20,23,24)] rounded-[4px] px-[16px] py-[40px]">
        <h1 className="text-[20px] leading-[28px] font-medium">
          Payment method
        </h1>

        <div className="border-b-[2px] border-[rgb(20,23,24)]">
          <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
            Payment Method
          </label>
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue="Creditcard"
            render={({ field }) => (
              <>
                <CustomRadioButton
                  value="Creditcard"
                  label="Credit Card"
                  onChange={handlePaymentSelection}
                  checked={selectedPaymentMethod === "Creditcard"}
                />

                <CustomRadioButton
                  value="Paypal"
                  label="Paypal"
                  onChange={handlePaymentSelection}
                  checked={selectedPaymentMethod === "Paypal"}
                />
              </>
            )}
          />
        </div>

        {selectedPaymentMethod === "Creditcard" && (
          <>
            <div>
              <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
                Card Number
              </label>
              <Controller
                name="cardNumber"
                control={control}
                rules={{ required: "Card Number is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <Input {...field} placeholder="Card Number" />
                    {fieldState?.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex gap-[24px]">
              <div className="w-full">
                <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
                  Expiration Date
                </label>
                <Controller
                  name="expirationDate"
                  control={control}
                  rules={{ required: "Expiration Date is required" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input {...field} type="text" placeholder="MM/YYYY" />
                      {fieldState?.error && (
                        <span>{fieldState.error.message}</span>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="w-full">
                <label className="text-[12px] leading-[12px] font-bold text-[rgb(108,114,117)]">
                  CVC
                </label>
                <Controller
                  name="cvc"
                  control={control}
                  rules={{ required: "CVC is required" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input {...field} type="text" placeholder="CVC" />
                      {fieldState?.error && (
                        <span>{fieldState.error.message}</span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div>
        <Button type="submit">Place Order</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
