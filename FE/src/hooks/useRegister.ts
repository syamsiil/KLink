import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../libs/Api";
// import { IUser } from "../interfaces/authInterface";

interface ICreateUser {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export function useRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string[]>([]);
  const [successAlert, setSuccessAlert] = useState("");

  const navigate = useNavigate();
  // const [_, setUser] = useState<IUser[]>([]);
  const [form, setForm] = useState<ICreateUser>({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await API.post("/auth/Signup", form);

      console.log(response.data, "SignUp Post");
      setForm({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
      navigate("/login");
      setSuccessAlert("Register Successfully");
      setErrorAlert([]);
    } catch (error: any) {
      if (
        error.response &&
        error.response.data.error &&
        Array.isArray(error.response.data.error)
      ) {
        setErrorAlert(error.response.data.error);
      } else {
        setErrorAlert([, error.response.data.error]);
      }
    }
  };

  return {
    handleSubmit,
    changeHandler,
    setErrorAlert,
    setShowPassword,
    errorAlert,
    successAlert,
    showPassword,
    form,
  };
}
