import React from "react";
import Link from "../components/Links/Link";
import Profile from "../components/Profile/Profile";
import Socials from "../components/Profile/Socials";
import Subscribe from "../components/Links/Subscribe";
import LinkEmbeded from "../components/Links/LinkEmbeded";
import Form from "../components/Form";
import Nft from "../components/Links/Nft";
import Footer from "../components/Footer";
import RequestComponent from "../components/Links/RequestComponent"

export default function HomePage() {
  return (
    <div className="pt-8 filter backdrop-blur-md">
      <Profile />
      <Socials />
      <h2 className="mb-2 mt-6 text-center text-xl font-semibold">
        Exclusive Content
      </h2>
      <h3 className="mb-2 mt-6 text-center text-lg font-semibold">
        Get access to all the following content
      </h3>
      <div className="grid gap-4">
        <Subscribe />
        <Link />
        <LinkEmbeded />
        <div>
          <div className="bg-red my-4 mt-10 flex w-full flex-col overflow-hidden rounded-xl border-2 border-white md:flex-row">
            <div className="w-full bg-red-400">
              <img
                src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_320,w_640/v1/page-block-image/digital-product/f2df2a40-feda-11ec-8f06-79a38aecb29d"
                alt=""
              />
            </div>
            <div className="flex w-full items-center p-6">
              <button className="w-full rounded-lg bg-white px-6 py-3 text-black hover:shadow-md hover:shadow-white/70">
                Buy for $499
              </button>
            </div>
          </div>
        </div>
        <Form />
        <LinkEmbeded />
        <h3 className="mt-4 text-center text-lg font-semibold">Business</h3>
        <Link />
        <Link />
        <h3 className="mt-4 text-center text-lg font-semibold">NFT's</h3>
        <Nft />
        <Nft />
        <RequestComponent/>
        <RequestComponent/>
      </div>
      <Footer />
    </div>
  );
}
