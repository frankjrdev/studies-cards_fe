"use client";

import { useState } from "react";

export default function DecksPage() {
  const [dropDownCompleteDecks, setDropDownCompleteDecks] = useState(false);
  const [dropDownOnGoingDecks, setDropDownOnGoingDecks] = useState(false);
  const [dropDownUnusedDecks, setDropDownUnusedDecks] = useState(false);

  const handleDropDownCompleteDecks = () => {
    setDropDownCompleteDecks(!dropDownCompleteDecks);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white">
      <div className="p-5 lg:py-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800  lg:mb-7">
          Decks
        </h3>
        {/* buttons fiklters */}
        <div className="md:flex md:justify-between border border-gray-200  rounded-2xl  lg:p-6">
          <div className="flex flex-col p-1 bg-[#F2F4F7] rounded-lg gap-5 xl:flex-row xl:items-center xl:justify-between">
            <button className="font-semibold text-md p-2 hover:cursor-pointer hover:bg-white rounded-lg">
              All Decks{" "}
              <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-[#c68bdf] ">
                10
              </span>
            </button>
            <button className="font-semibold text-md p-2 hover:cursor-pointer hover:bg-white rounded-lg">
              Completed Decks{" "}
              <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-[#c68bdf] ">
                7
              </span>
            </button>
            <button className="font-semibold text-md p-2 hover:cursor-pointer hover:bg-white rounded-lg">
              Ongoing Decks{" "}
              <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-[#c68bdf] ">
                3
              </span>
            </button>
          </div>

          <div className="flex flex-col bg-[#8869A5] p-2 rounded-lg gap-5 xl:flex-row xl:items-center xl:justify-between  ">
            <button className="text-white text-lg hover:cursor-pointer">
              Add New Deck +
            </button>
          </div>
        </div>
        {/* button add decks */}
      </div>
      <div className="px-6">
        {/* Completed Decks */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold my-4">Completed Decks</h2>
            </div>

            <div className="flex justify-end w-1/2 gap-6 relative">
              <button
                onClick={() => setDropDownCompleteDecks(!dropDownCompleteDecks)}
                className="text-gray-700 dark:text-gray-400 hover:cursor-pointer"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99902 10.2451C6.96552 10.2451 7.74902 11.0286 7.74902 11.9951V12.0051C7.74902 12.9716 6.96552 13.7551 5.99902 13.7551C5.03253 13.7551 4.24902 12.9716 4.24902 12.0051V11.9951C4.24902 11.0286 5.03253 10.2451 5.99902 10.2451ZM17.999 10.2451C18.9655 10.2451 19.749 11.0286 19.749 11.9951V12.0051C19.749 12.9716 18.9655 13.7551 17.999 13.7551C17.0325 13.7551 16.249 12.9716 16.249 12.0051V11.9951C16.249 11.0286 17.0325 10.2451 17.999 10.2451ZM13.749 11.9951C13.749 11.0286 12.9655 10.2451 11.999 10.2451C11.0325 10.2451 10.249 11.0286 10.249 11.9951V12.0051C10.249 12.9716 11.0325 13.7551 11.999 13.7551C12.9655 13.7551 13.749 12.9716 13.749 12.0051V11.9951Z"
                    fill=""
                  ></path>
                </svg>
              </button>

              {/* Menú desplegable */}
              {dropDownCompleteDecks && (
                <div className="absolute right-0 mt-8 w-48 bg-white rounded-lg shadow-xl z-10">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => {
                          console.log("Edit clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Delete clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Restart Deck clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Restart Deck
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 1</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 2</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 3</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
          </div>
        </div>

        {/* OnGoing Decks */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold my-4">Ongoing Decks</h2>
            </div>

            <div className="flex justify-end w-1/2 gap-6 relative">
              <button
                onClick={() => setDropDownCompleteDecks(!dropDownCompleteDecks)}
                className="text-gray-700 dark:text-gray-400 hover:cursor-pointer"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99902 10.2451C6.96552 10.2451 7.74902 11.0286 7.74902 11.9951V12.0051C7.74902 12.9716 6.96552 13.7551 5.99902 13.7551C5.03253 13.7551 4.24902 12.9716 4.24902 12.0051V11.9951C4.24902 11.0286 5.03253 10.2451 5.99902 10.2451ZM17.999 10.2451C18.9655 10.2451 19.749 11.0286 19.749 11.9951V12.0051C19.749 12.9716 18.9655 13.7551 17.999 13.7551C17.0325 13.7551 16.249 12.9716 16.249 12.0051V11.9951C16.249 11.0286 17.0325 10.2451 17.999 10.2451ZM13.749 11.9951C13.749 11.0286 12.9655 10.2451 11.999 10.2451C11.0325 10.2451 10.249 11.0286 10.249 11.9951V12.0051C10.249 12.9716 11.0325 13.7551 11.999 13.7551C12.9655 13.7551 13.749 12.9716 13.749 12.0051V11.9951Z"
                    fill=""
                  ></path>
                </svg>
              </button>

              {/* Menú desplegable */}
              {dropDownCompleteDecks && (
                <div className="absolute right-0 mt-8 w-48 bg-white rounded-lg shadow-xl z-10">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => {
                          console.log("Edit clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Delete clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Restart Deck clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Restart Deck
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 1</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 2</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 3</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
          </div>
        </div>

        {/* Unused Decks */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold my-4">Unused Decks</h2>
            </div>

            <div className="flex justify-end w-1/2 gap-6 relative">
              <button
                onClick={() => setDropDownCompleteDecks(!dropDownCompleteDecks)}
                className="text-gray-700 dark:text-gray-400 hover:cursor-pointer"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99902 10.2451C6.96552 10.2451 7.74902 11.0286 7.74902 11.9951V12.0051C7.74902 12.9716 6.96552 13.7551 5.99902 13.7551C5.03253 13.7551 4.24902 12.9716 4.24902 12.0051V11.9951C4.24902 11.0286 5.03253 10.2451 5.99902 10.2451ZM17.999 10.2451C18.9655 10.2451 19.749 11.0286 19.749 11.9951V12.0051C19.749 12.9716 18.9655 13.7551 17.999 13.7551C17.0325 13.7551 16.249 12.9716 16.249 12.0051V11.9951C16.249 11.0286 17.0325 10.2451 17.999 10.2451ZM13.749 11.9951C13.749 11.0286 12.9655 10.2451 11.999 10.2451C11.0325 10.2451 10.249 11.0286 10.249 11.9951V12.0051C10.249 12.9716 11.0325 13.7551 11.999 13.7551C12.9655 13.7551 13.749 12.9716 13.749 12.0051V11.9951Z"
                    fill=""
                  ></path>
                </svg>
              </button>

              {/* Menú desplegable */}
              {dropDownCompleteDecks && (
                <div className="absolute right-0 mt-8 w-48 bg-white rounded-lg shadow-xl z-10">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => {
                          console.log("Edit clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Delete clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          console.log("Restart Deck clicked");
                          setDropDownCompleteDecks(false);
                        }}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                      >
                        Restart Deck
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 1</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 2</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-gray-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-600">Deck 3</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
