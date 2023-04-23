import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { Provider, LikeButton } from "@lyket/react";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

function Headline() {
  const greeting = "Like Bruh";

  return <div>{greeting}</div>;
}

export default function Post({ postData }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <main>
          <h2 className="mt-0">{postData.title}</h2>
          <hr />
          <div className="my-4">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          <hr />
          <p>
            <Date dateString={postData.date} />
          </p>
        </main>
        <Headline />

        <div className="-ml-4">
          <Provider apiKey={process.env.NEXT_PUBLIC_LIKE_API_KEY}>
            <LikeButton namespace={postData.id} id="everybody-like-now" />
          </Provider>
        </div>
      </div>
    </Layout>
  );
}
