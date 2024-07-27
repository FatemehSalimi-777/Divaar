import { useQuery } from "@tanstack/react-query";
import Loader from "src/components/modules/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getAllPosts } from "src/services/user";

const style = {
  display: "flex",
};

function Homepage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  // console.log({ data, isLoading });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar />
          <Main posts={data} />
        </div>
      )}
    </>
  );
}

export default Homepage;
