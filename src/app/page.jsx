"use client";

import { useState } from "react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pink-100 h-screen flex items-center justify-center flex-col">
      <BirthdayCard />
    </div>
  );
}

const buddies = [
  {
    name: "Gamer Cat",
    age: "2",
    image: "gamer-cat.jpg",
    id: 1,
  },
  {
    name: "Soldier Cat",
    age: "5",
    image: "sad-soldier-cat.jpg",
    id: 2,
  },
  {
    name: "Muslim Cat",
    age: "4",
    image: "muslim-cat.jpg",
    id: 3,
  },
  {
    name: "Terrorist Cat",
    age: "3",
    image: "terrorist-cat.jpg",
    id: 4,
  },
  {
    name: "Tourist Cat",
    age: "6",
    image: "tourist-cat.jpg",
    id: 5,
  },
];

const BirthdayCard = () => {
  const [birthdayList, setBirthday] = useState(buddies);
  return (
    <div className="bg-white w-md  flex-col p-4 ">
      <div className="flex gap-2">
        <p className="text-4xl">
          <CountBirthday birthdayList={birthdayList} />
        </p>

        <h1
          className="text-4xl mb-8 font-semibold font-sans-dosis tracking-tight
/n"
        >
          Birthdays Today
        </h1>
      </div>

      <div className="flex-col flex gap-3">
        {birthdayList.map(({ name, image, id, age }) => (
          <BirthdayCardList key={id} image={image} name={name} age={age} />
        ))}
        <ClearButton setBirthday={setBirthday} />
      </div>
    </div>
  );
};

const BirthdayCardList = ({ name, image, age }) => {
  return (
    <div className="flex gap-4 items-center">
      <img className="w-20 h-20 rounded-full" src={image} alt="profile" />
      <div className="flex-col">
        <p className="font-bold text-2xl">{name}</p>
        <p className="text-gray-400 font-medium">{age} Years</p>
      </div>
    </div>
  );
};

const ClearButton = ({ setBirthday }) => {
  const clear = () => {
    setBirthday([]);
  };

  return (
    <button onClick={clear} className="bg-pink-600 rounded-sm text-white mt-1">
      Clear All
    </button>
  );
};

const CountBirthday = ({ birthdayList }) => {
  return birthdayList.length;
};
