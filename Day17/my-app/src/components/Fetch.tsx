import useFetch from "../Hooks/useFetch";

type ToDoType = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

type PostType = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

function Fetch() {
  const { data } = useFetch<ToDoType>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const { data: posts } = useFetch<PostType>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  //   console.log(data?.map(item));
  console.log(">>>", posts);
  return (
    <div>
      <h2>Fetch</h2>
      <p>
        {data?.map((item) => {
          return <p key={item.id}>{item.id}</p>;
        })}
      </p>
      <p>
        {posts?.map((post) => {
          return <p key={post.id}>{post.body}</p>;
        })}
      </p>
    </div>
  );
}

export default Fetch;
