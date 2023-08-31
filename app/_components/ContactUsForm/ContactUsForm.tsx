"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"

import { actionSubmitContactForm } from "@/app/_actions/actions"
import { toastSettings } from "@/app/_configs/toastOptions"
import { useStatus } from "@/app/_hooks/useStatus"
import { ContactUsValidation } from "@/app/_validationModels/models"
import { zodResolver } from "@hookform/resolvers/zod"

import Button from "../Button/Button"

import type { Component, ContactUs, ThemeMode } from "@/types"

type Props = {
  themeMode?: ThemeMode
}

const ContactUsForm: Component<Props> = ({ themeMode = "neutral" }) => {
  const { status, setStatus } = useStatus()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactUs>({
    resolver: zodResolver(ContactUsValidation),
  })

  const onSubmit: SubmitHandler<ContactUs> = async (data) => {
    setStatus(() => ({
      isLoading: true,
      isSuccessful: false,
      isError: false,
      errorMessage: null,
    }))
    const response = await actionSubmitContactForm(data)
    if (response?.status === "error") {
      const { message } = response
      setStatus((preState) => ({
        ...preState,
        isLoading: false,
        isError: true,
        isSuccessful: false,
        errorMessage: message,
      }))
      toast.error(`🍂 ${message}`, toastSettings)
      return
    }

    toast.success("🍃 Thankyou for contacting us!", toastSettings)
    setStatus((preState) => ({
      ...preState,
      isLoading: false,
      isSuccessful: true,
    }))
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your Name"
            {...register("username")}
          />
          {errors.username?.message && (
            <p className="text-rose-300">{errors.username?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@hello.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-rose-300">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your message"
            {...register("message")}
          ></textarea>
          {errors.message?.message && (
            <p className="text-rose-300">{errors.message?.message}</p>
          )}
        </div>
        <Button
          text="Submit"
          type="submit"
          isLoading={status.isLoading}
          loadingText="Submitting"
          themeMode={themeMode}
        />
      </form>
      <ToastContainer />
    </>
  )
}

export default ContactUsForm
