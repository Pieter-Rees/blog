import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id} className="mb-12">
              <h2>
                <Link href={`/posts/${id}`}>{title}</Link>
              </h2>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
