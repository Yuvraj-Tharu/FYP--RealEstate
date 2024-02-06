import React from "react";

export default function CreateListiing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">
        Create Listing
      </h1>
      <form action="" className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-3 flex-1 ">
          <input
            class="appearance-none block  bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="title"
            placeholder="Title"
          />
          <textarea
            class="appearance-none block  bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="description"
            placeholder="Description"
          />
          <input
            class="appearance-none block  bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="address"
            placeholder="Address"
          />

          <div className="flex gap-3 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="Rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="Parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="Furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="Offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min={1}
                max={10}
                required
                className="p-3  text-gray-700 border rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathroom"
                min={1}
                max={10}
                required
                className="p-3  text-gray-700 border rounded-lg"
              />
              <p>Bath</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min={1}
                max={10}
                required
                className="p-3  text-gray-700 border rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">(Rs / months)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min={1}
                max={10}
                required
                className="p-3  text-gray-700 border rounded-lg"
              />

              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span className="text-xs">(Rs / months)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-semibold my-1">
            Images:
            <span className="font-normal text-gray-700 ml-2">
              The first image will be the cover image (max-6)
            </span>
          </p>

          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg my-3 ">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
