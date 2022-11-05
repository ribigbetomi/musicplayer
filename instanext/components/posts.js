import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "./post";
import { collection, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";

// const posts = [
//   {
//     id: "123",
//     username: "adetomii_",
//     userImg:
//       "https://media-exp1.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_800_800/0/1652770527289?e=2147483647&v=beta&t=_mpfN1C4TnCuUkAImvsVSdvKd02eoJQXgc1VbZFoCRo",
//     img: "https://media-exp1.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_800_800/0/1652770527289?e=2147483647&v=beta&t=_mpfN1C4TnCuUkAImvsVSdvKd02eoJQXgc1VbZFoCRo",
//     caption: "When I look into your eyes all I see is you waist lol",
//   },
//   {
//     id: "123",
//     username: "adetomii_",
//     userImg:
//       "https://media-exp1.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_800_800/0/1652770527289?e=2147483647&v=beta&t=_mpfN1C4TnCuUkAImvsVSdvKd02eoJQXgc1VbZFoCRo",
//     img: "https://media-exp1.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_800_800/0/1652770527289?e=2147483647&v=beta&t=_mpfN1C4TnCuUkAImvsVSdvKd02eoJQXgc1VbZFoCRo",
//     caption: "I was staring at the stars seeing UFO...",
//   },
// ];

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
