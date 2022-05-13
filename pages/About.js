import React from "react";
import Head from 'next/head';

export default function About() {
  return (
    <div>
     <Head>
        <title>My first NextJS app</title>
      </Head>
      <h1 style={{ color: "black", textAlign: "center" }}>About page</h1>
      <p style={{ color: "black", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        justo sem, non scelerisque enim pretium sed. Aenean sem dui, tempor sed
        sapien id, volutpat aliquam lectus. Nulla et ante imperdiet mi volutpat
        molestie non eget urna. Aenean placerat, velit et accumsan volutpat,
        lacus lectus semper mi, et laoreet urna dolor in libero. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec sed nisi non elit bibendum facilisis. Vivamus in sem
        semper, dapibus justo sed, placerat nunc. Donec imperdiet tellus eu ex
        pellentesque, at gravida odio dignissim.
      </p>
     
    </div>
  );
}
