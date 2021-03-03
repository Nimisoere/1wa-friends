import React from "react";
import { useForm } from "react-hook-form";

interface Props {}

interface Inputs {
  companyname: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  pickup_address: string;
  destination_address: string;
  pickup_city: string;
  pickup_state: string;
  pickup_zip: string;
  destination_city: string;
  destination_state: string;
  destination_zip: string;
  package_information: string;
  number_of_pieces: string;
  weight: number;
  dimensions: string;
  special_instructions: string;
}

const QuoteForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="w-full">
      <form
        className="w-full flex justify-between flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">Company Information</h4>
          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="companyname"
                type="text"
                placeholder="Company name"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.companyname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="firstname"
                type="text"
                placeholder="Contact first name"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.firstname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="lastname"
                type="text"
                placeholder="Contact last name"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.lastname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="phonenumber"
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.phonenumber && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>

        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">
            Pick-Up &amp; Delivery Information
          </h4>
          <div className="w-full flex gap-9">
            <div className="mb-8 w-1/2">
              <textarea
                name="pickup_address"
                placeholder="Pick-Up Address"
                rows={5}
                className="w-full p-3 border resize-none border-gray-200 rounded-lg"
                ref={register({ required: true })}
              ></textarea>
              {errors.pickup_address && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/2">
              <textarea
                name="destination_address"
                placeholder="Destination Address"
                rows={5}
                className="w-full p-3 border resize-none border-gray-200 rounded-lg"
                ref={register({ required: true })}
              ></textarea>
              {errors.destination_address && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="phonenumber"
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.phonenumber && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="phonenumber"
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.phonenumber && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">Package Information</h4>
          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-1/3">
              <input
                name="phonenumber"
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.phonenumber && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex gap-10">
            <div className="mb-8 w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-2/3">
              <textarea
                name="destination_address"
                placeholder="Destination Address"
                rows={5}
                className="w-full p-3 border resize-none border-gray-200 rounded-lg"
                ref={register({ required: true })}
              ></textarea>
              {errors.destination_address && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mb-5 text-white bg-secondary font-bold w-full p-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
