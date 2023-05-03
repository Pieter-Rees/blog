import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../components/posts";
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
          <div className="my-6">
            <div
              className="prose lg:prose-lg"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>

          <hr />
          <p className="mt-6">
            <Date dateString={postData.date} />
          </p>
        </main>

        <div className="-ml-3">
          <Provider apiKey={process.env.NEXT_PUBLIC_LIKE_API_KEY}>
            <LikeButton namespace={postData.id} id="everybody-like-now" />
          </Provider>
        </div>
      </div>
    </Layout>
  );
}
