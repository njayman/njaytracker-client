import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
export default function AddTasks({ addNewHandler }) {
  const { watch, register, handleSubmit, control, errors } = useForm({
    hasDeadline: false,
  });
  //const [deadline, setDeadline] = useState(false);
  const deadline = watch("hasDeadline");
  const onSubmit = async (formdata) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/addtasks",
        formdata
      );
      console.log(data);
      addNewHandler();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="required" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          placeholder="add a title"
          name="title"
          ref={register({ required: true, maxLength: 30 })}
        />
        {errors?.title?.type === "required" && <span>Title is required</span>}
        {errors?.title?.type === "maxLength" && (
          <span>Not more than 30 characters</span>
        )}
        <label htmlFor="description">Description</label>
        {errors?.description?.type === "maxLength" && (
          <span>Not more than 200 characters</span>
        )}
        <textarea
          type="text"
          placeholder="you can add a description"
          name="description"
          ref={register({ maxLength: 200 })}
        />
        <div className="checkbox">
          <input type="checkbox" name="hasDeadline" ref={register} />
          <label htmlFor="hasDeadline">Has a deadine?</label>
        </div>
        {deadline ? (
          <React.Fragment>
            <label htmlFor="deadlineDate">Deadine date</label>
            <Controller
              as="input"
              type="date"
              control={control}
              name="deadlineDate"
              defaultValue=""
            />
            <label htmlFor="deadlineTime">Deadine time</label>
            <Controller
              as="input"
              type="time"
              control={control}
              name="deadlineTime"
              defaultValue=""
            />
          </React.Fragment>
        ) : null}
        <input
          type="submit"
          style={{
            marginTop: "20px",
            border: "none",
            backgroundColor: "#2e3244",
            color: "white",
            borderRadius: "5px",
          }}
        />
      </form>
    </div>
  );
}
