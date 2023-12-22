"use client";

import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  data: {
    User: {
      image: string | null;
      name: string | null;
    };
    message: string;
  }[];
}

export default function ChatComponent({ data }: iAppProps) {
  const [totalComments, setTotalComments] = useState(data);

  return (
    <div className="p-6 flex-grow max-h-screen overflow-y-auto py-32">
      <div className="flex flex-col gap-4">
        {totalComments.map((message, index) => {
          return (
            <div key={index}>
              <div className="flex items-center">
                <Image
                  src={message.User?.image as string}
                  alt="Profile image of user"
                  className="w-12 h-12 object-cover rounded-lg mr-4"
                  width={50}
                  height={50}
                />
                <div className="rounded-lg bg-white p-4 shadow-md self-start">
                  {message.message}
                </div>
              </div>

              <p className="font-light text-sm text-gray-600">
                {message.User?.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
