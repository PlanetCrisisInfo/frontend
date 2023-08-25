"use client"
import { SubmitHandler, useForm } from "react-hook-form"

import { actionSubmitContactForm } from "@/app/_actions/actions"
import { ContactUsValidation } from "@/app/_validationModels/models"
import { Component, ContactUs } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"

type Props = {}
const ContactUsForm: Component<Props> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactUs>({
    resolver: zodResolver(ContactUsValidation),
  })

  const onSubmit: SubmitHandler<ContactUs> = async (data) => {
    const response = await actionSubmitContactForm(data)
    if (response?.error) {
      console.log(response.error)
    }
    reset()
  }

  return (
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

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactUsForm
