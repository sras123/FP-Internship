import { useState, useEffect } from "react";

type ReturnType<T> = {
  data: T[] | null;
};

const useFetch = <K,>(url: string): ReturnType<K> => {
  console.log(url);
  const [data, setData] = useState<K[]>([]);

  useEffect(() => {
    console.log(">>", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return { data };
};

export default useFetch;
