import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import "./LoginForm.css";

type Inputs = {
    id: string,
    password: string
}

export const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <div className="login-form-container">
        <Paper>
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField {...register("id")} id="id" label="Login ID" variant="standard" />
            </div>
            <div>
              <TextField {...register("password")} id="password" label="Password" type="password" variant="standard" />
              {errors.password && <span>This field is required</span>}
            </div>
            <Button type="submit">Login</Button>
          </form>
        </Paper>
      </div>
    </>
  );
};
