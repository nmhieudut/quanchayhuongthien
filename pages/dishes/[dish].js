import React from "react";
import Layout from "src/components/Layout";
import { client } from "src/helpers/contentful";

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "dishes" });
  const paths = res.items.map(item => {
    return { params: { dish: item.fields.slug } };
  });
  return {
    paths,
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "dishes",
    "fields.slug": params.dish
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }
  return {
    props: {
      dish: items[0]
    },
    revalidate: 10
  };
}
export default function DishDetail({ dish }) {
  console.log("-----", dish);
  if (!dish) return <div>loading...</div>;
  return <Layout>{dish.fields.title}</Layout>;
}
