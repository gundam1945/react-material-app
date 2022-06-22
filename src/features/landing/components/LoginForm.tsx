/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";

import "./LoginForm.css";

type Inputs = {
    id: string,
    password: string
}

const loginFormContainer = css`
width: 350px;
margin: 100px auto 0;
`;

const loginFormInput = css`
width: 300px;
margin: 4px auto;
`;

const loginFormButton = css`
width: 300px;
margin: 4px auto;
background-color: #fff;
`;

type data = {
  title: string
}

export const LoginForm = (prop: data) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <div
        css={loginFormContainer}>
        <Paper>
          <Typography>{prop.title}</Typography>
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div css={loginFormInput}>
              <TextField {...register("id")} id="id" label="Login ID" variant="standard" css={loginFormInput} />
            </div>
            <div css={loginFormInput}>
              <TextField {...register("password")} id="password" label="Password" type="password" variant="standard" css={loginFormInput} />
              {errors.password && <span>This field is required</span>}
            </div>
            <div css={loginFormInput}>
              <Button type="submit" css={loginFormButton}>Login</Button>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
};
