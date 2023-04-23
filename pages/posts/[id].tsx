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
            <p dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          <hr />
          <p>
            <Date dateString={postData.date} />
          </p>
        </main>

        <div className="-ml-4">
          <Provider apiKey="pt_68a7aad22ee1668229a908c557373f">
            <LikeButton namespace="testing-react" id="everybody-like-now" />
          </Provider>
        </div>
      </div>
    </Layout>
  );
}
