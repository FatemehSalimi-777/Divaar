import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "services/admin";
import styles from "./CategoryForm.module.css";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const queryClient = useQueryClient();

  const { mutate, data, isLoading, error } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
  //   console.log({ data, isLoading, error });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
    console.log(form);
  };

  return (
    <form
      className={styles.form}
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <h3>دسته بندی جدید:</h3>
      {!!error && <p>{error.message} | دسته بندی اضافه نشد!</p>}
      {data?.status === 201 && <p>دسته بندی جدید با موفقیت اضافه شد.</p>}
      <label htmlFor="name">نام دسته بندی:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ:</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون:</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" disabled={isLoading}>
        ایجاد دسته بندی
      </button>
    </form>
  );
}

export default CategoryForm;
