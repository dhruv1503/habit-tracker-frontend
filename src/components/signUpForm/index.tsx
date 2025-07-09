"use client";

import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  name: string;
  profession: string;
  habitCount: number;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Send to API
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, boxShadow: 2, borderRadius: 2 }}
    >
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters" },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 2, message: "Name must be at least 2 characters" },
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Profession"
        fullWidth
        margin="normal"
        {...register("profession", {
          required: "Profession is required",
        })}
        error={!!errors.profession}
        helperText={errors.profession?.message}
      />

      <TextField
        label="Number of Habits"
        type="number"
        fullWidth
        margin="normal"
        {...register("habitCount", {
          required: "Habit count is required",
          min: { value: 1, message: "At least 1 habit required" },
          max: { value: 10, message: "Max 10 habits allowed" },
        })}
        error={!!errors.habitCount}
        helperText={errors.habitCount?.message}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
}
