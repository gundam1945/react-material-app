/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";

type Inputs = {
    id: string,
    password: string
}

const loginFormContainer = css`
width: 350px;
margin: 100px auto 0;
`;

const loginForm = css`
padding: 10px;
`;

const loginFormInput = css`
width: 300px;
margin: 4px auto;
`;

const loginFormButton = css`
color: white;
width: 300px;
margin: 4px auto;
background-color: #fff0;
background-image: linear-gradient(to right, #403a3e, #5790b8);
`;

const warning = css`
color: #f00;
`;

type data = {
  title: string
}

export const LoginForm = (prop: data) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <div css={loginFormContainer}>
        <Paper css={loginForm}>
          <Typography>{prop.title}</Typography>
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div css={loginFormInput}>
              <TextField {...register("id", { required: true })} label="Login ID" variant="standard" css={loginFormInput} />
              {errors.id && <span css={warning}>This field is required</span>}
            </div>
            <div css={loginFormInput}>
              <TextField {...register("password", { required: true })} label="Password" type="password" variant="standard" css={loginFormInput} />
              {errors.password && <span css={warning}>This field is required</span>}
            </div>
            <div css={loginFormInput}>
              <Button type="submit" css={loginFormButton}>Sign In</Button>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
};
