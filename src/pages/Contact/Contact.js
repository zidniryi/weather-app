import React from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

import { ButtonForm } from "../../component/Button/ButtonForm";
import Menu from "../../component/Menu/Menu";
import { SaveDataToLocalStorage } from "../../helper/saveItem";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * When users submit form
   * 
   * @param {Object} data -data form
   * @return {Void}  -function
   */
  const onSubmit = (data) => {
    SaveDataToLocalStorage(data);
    Swal.fire("Sukses!", "Data Berhasil Disimpan!", "success");
  };

  return (
    <>
      <Menu />
      <Container>
        <h2 style={{ marginTop: "2%" }}>Contact US</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label>
          <input
            {...register("fullName", {
              required: true,
              maxLength: 80,
              pattern: /^([a-zA-Z]+[\s'.]?)+\S$/,
            })}
            class="form-control"
          />
          {errors?.fullName?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}
          {errors?.fullName?.type === "maxLength" && (
            <p className="text-danger">
              First name cannot exceed 40 characters
            </p>
          )}
          {errors?.fullName?.type === "pattern" && (
            <p className={"text-danger"}>Alphabetical characters only</p>
          )}
          <br />
          <label>Message</label>
          <textarea
            {...register("message", { 
              required: true,
              pattern: /^([a-zA-Z]+[\s'.]?)+\S$/ 
            })}
            class="form-control"
          />
          {errors?.message?.type === "pattern" && (
            <p className="text-danger"> Alphabetical characters only</p>
          )}
          <br />
          <ButtonForm type="submit"> Submit</ButtonForm>
        </form>
      </Container>
    </>
  );
}
