import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

import styles from "./CategoryList.module.css";
import { MdDeleteForever } from "react-icons/md";
import { deleteCategory } from "src/services/admin";

function CategoryList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });

  const deleteCategoryHandler = (id) => {
    mutate(id);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <div key={item._id}>
            <div>
              <img src={`${item.icon}.svg`} />
              <h5>{item.name}</h5>
            </div>
            <div className={styles.leftSide}>
              <button onClick={() => deleteCategoryHandler(item._id)}>
                <MdDeleteForever />
              </button>
              <p>slug: {item.slug}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
