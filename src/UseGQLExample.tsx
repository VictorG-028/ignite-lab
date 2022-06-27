import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function GqlExample() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <h1 className="text-5xl flex h-screen justify-center items-center">
      Hi! this is the data.title 👉
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </h1>
  );
}

export default GqlExample;
