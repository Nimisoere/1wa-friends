import React from "react";
import { useForm } from "react-hook-form";
import style from "./QuoteForm.module.scss";

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
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="companyname"
                type="text"
                placeholder="Company name"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.companyname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="firstname"
                type="text"
                placeholder="Contact first name"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.firstname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="lastname"
                type="text"
                placeholder="Contact last name"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.lastname && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="phonenumber"
                type="text"
                placeholder="Phone number"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.phonenumber && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full sm:w-1/3"></div>
          </div>
        </div>

        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">
            Pick-Up &amp; Delivery Information
          </h4>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-9">
            <div className="mb-8 w-full sm:w-1/2">
              <textarea
                name="pickup_address"
                placeholder="Pick-Up Address"
                rows={5}
                className={style.quoteforminput}
                ref={register({ required: true })}
              ></textarea>
              {errors.pickup_address && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/2">
              <textarea
                name="destination_address"
                placeholder="Destination Address"
                rows={5}
                className={style.quoteforminput}
                ref={register({ required: true })}
              ></textarea>
              {errors.destination_address && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="pickup_city"
                type="text"
                placeholder="Pick up city"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.pickup_city && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="pickup_state"
                type="text"
                placeholder="Pick up state"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.pickup_city && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="pickup_zip"
                type="text"
                placeholder="Pick up zip"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="destination_city"
                type="text"
                placeholder="Destination city"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.destination_city && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="destination_state"
                type="text"
                placeholder="Destination state"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.destination_state && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="destination_zip"
                type="text"
                placeholder="Destination Zip"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.destination_zip && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">Package Information</h4>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="package_information"
                type="text"
                placeholder="Package information"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.package_information && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="number_of_pieces"
                type="number"
                min={1}
                placeholder="Number of pieces"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.number_of_pieces && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="weight"
                type="text"
                placeholder="Weight"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.dimensions && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
            <div className="mb-8 w-full sm:w-1/3">
              <input
                name="dimensions"
                type="text"
                placeholder="Dimensions"
                className={style.quoteforminput}
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-red-900 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-8 w-full sm:w-2/3">
              <textarea
                name="special_instructions"
                placeholder="Special instructions"
                rows={5}
                className={style.quoteforminput}
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
        <div className="w-full text-center">
          <button
            type="submit"
            className="mb-5 text-white bg-secondary font-bold px-20 py-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
