import React from "react";

export default function Form() {
  return (
    <section className="rounded-xl border-2 border-white p-6">
      <form className="flex flex-col">
        <div className="pb-4 text-center">
          <h4 className="font-semibold">Join the squas</h4>
          <p className="font-thin text-sm">Know when I dropmerch & speed vlogs</p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="rounded-lg border-2 border-white/40 bg-transparent p-2 "
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="rounded-lg border-2 border-white/40 bg-transparent p-2 "
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-center gap-4 p-4">
          <label htmlFor="fan" className="flex items-center">
            <input type="radio" className="mr-2 h-4 w-4" name="fan" />
            <span>I'm a fan</span>
          </label>
          <label htmlFor="fan" className="flex items-center">
            <input type="radio" className="mr-2 h-4 w-4" name="fan" />
            <span>I'm a brand</span>
          </label>
          <label htmlFor="fan" className="flex items-center">
            <input type="radio" className="mr-2 h-4 w-4" name="fan" />
            <span>I'm a creator</span>
          </label>
        </div>
        <button className="rounded-lg mx-auto bg-white px-8 py-3 text-black hover:shadow-md hover:shadow-white/70 md:w-auto">
          Submit
        </button>
      </form>
    </section>
  );
}
