import {
  LoginCredentials,
  OtpCredentials,
  SignupCredentials,
} from "@/slice/AuthSlice";
import { RootState, useAppDispatch } from "@/store";
import { loginAsync, signupAsync, verifyOtpAsync } from "@/thunks/authThunks";
import { CustomToaster } from "@/utils/core";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import useValidateField from "./useValidateField";
import { SignInSchema, SignUpSchema } from "@/utils/common";

type FieldNameSignIn = "username" | "password";
type FieldNameSignUp =
  | "username"
  | "email"
  | "phone"
  | "password"
  | "rePassword";

// Use a union type to represent either SignIn or SignUp field names
type FieldName = FieldNameSignIn | FieldNameSignUp;

const useAuth = (type: "signIn" | "signUp") => {
  const dispatch = useAppDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const { errors, validateField } = useValidateField(
    type === "signIn" ? SignInSchema : SignUpSchema
  );
  const [userNamePhone, setUserNamePhone] = useState("");
  const [email, setEmail] = useState(""); // Only used for sign-up
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleFieldChange = (fieldName: FieldName, value: string) => {
    if (fieldName === "username") {
      setUserNamePhone(value);
    } else if (fieldName === "email") {
      setEmail(value);
    } else if (fieldName === "phone") {
      setPhone(value); // If you use phone number during sign-up
    } else if (fieldName === "password") {
      setPassword(value);
    } else if (fieldName === "rePassword") {
      setRePassword(value);
    }

    // Validate the field using the appropriate schema
    validateField(fieldName, value);
  };

  //   const handleLogin = async () => {
  //     const result = await login(data)
  //     // console.log("dddddd", result);
  //     if (result?.token) {
  //       setUserNamePhone("");
  //       setPassword("");
  //       navigation.navigate("app-stack");
  //     }
  //   };
  const handleLogin = async () => {
    const credentials: LoginCredentials = {
      username: userNamePhone.trim().toLowerCase(),
      password: password.trim(),
    };
    try {
      const response = await dispatch(loginAsync(credentials)).unwrap();
      setPassword("");
      setUserNamePhone("");
      return response;
    } catch (error: any) {
      throw Error(error.response.data);
    }
  };
  //   const login = useCallback(
  //     async (credentials: LoginCredentials) => {
  //       try {
  //         const response = await dispatch(loginAsync(credentials)).unwrap();
  //         return response;
  //       } catch (error) {
  //         throw error;
  //       }
  //     },
  //     [dispatch]
  //   );

  const handleSignup = async () => {
    const credentials: SignupCredentials = {
      email: email.toLowerCase().trim(),
      password: password.trim(),
      phone,
      username: userNamePhone.toLowerCase().trim(),
    };
    try {
      const response = await dispatch(signupAsync(credentials)).unwrap();
      setPhone("");
      setRePassword("");
      setEmail("");
      setPassword("");
      setUserNamePhone("");
      return response;
    } catch (error: any) {
      throw Error(error.response.data);
    }
  };
  const handleVerify = async (otp: string[] | null) => {
    const otpCode = otp?.join("") ?? "";
    const credentials: OtpCredentials = {
      otpCode,
    };
    try {
      const response = await dispatch(verifyOtpAsync(credentials)).unwrap();

      return response;
    } catch (error: any) {
      throw Error(error.response.data);
    }
  };
  //   const signup = useCallback(
  //     async (credentials: SignupCredentials) => {
  //       try {
  //         const response = await dispatch(signupAsync(credentials)).unwrap();

  //         return response;
  //       } catch (error) {
  //         throw error;
  //       }
  //     },
  //     [dispatch]
  //   );
  //   const verifyOtp = useCallback(
  //     async (credentials: OtpCredentials) => {
  //       try {
  //         const response = await dispatch(verifyOtpAsync(credentials)).unwrap();
  //         return response;
  //       } catch (error) {
  //         throw error;
  //       }
  //     },
  //     [dispatch]
  //   );

  return {
    ...authState,
    handleLogin,
    handleSignup,
    handleFieldChange,
    password,
    userNamePhone,
    email,
    rePassword,
    phone,
    errors,
    handleVerify,
  };
};

export default useAuth;
