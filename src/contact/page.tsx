"use client";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    country: "",
    phoneCode: "",
    phoneNumber: "",
    email: "",
  });

  const countries = ["United States", "Canada", "United Kingdom", "Pakistan", "India", "Australia"];
  const phoneCodes = ["+1", "+44", "+92", "+91", "+61"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1
          className="text-4xl font-bold text-center text-gray-800 mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Contact Us
        </h1>
        <p
          className="text-center text-gray-600 mb-8"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          We would love to hear from you! Please fill out the form below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700 mb-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:shadow-md transition duration-300"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700 mb-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="country"
                className="block text-sm font-semibold text-gray-700 mb-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:shadow-md transition duration-300"
              >
                <option value="">Select your country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="phoneCode"
                className="block text-sm font-semibold text-gray-700 mb-2"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Phone Code
              </label>
              <select
                id="phoneCode"
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition duration-300"
              >
                <option value="">Select phone code</option>
                {phoneCodes.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-700 mb-2"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:shadow-md transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition duration-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
