import React from "react";
import Posts from "./posts";
import Stories from "./stories";
import MiniProfile from "./miniProfile";
import Suggestions from "./suggestions";
import { useSession } from "next-auth/react";

export default function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/* "! means important here" */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}
