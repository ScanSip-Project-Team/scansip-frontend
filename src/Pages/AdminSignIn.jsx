// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//Import Components
import Button from "../components/Button";

// Import Asset
import logo from "../assets/logo.svg";
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";

const AdminSignUp = ({ adminToken, setAdminToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({ input: "", message: "" });

  const handleChange = (e, func) => {
    func(e);
    // setTimeout(controlInput(), 3300);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(username);
      const response = await axios.post(`http://localhost:3000/admin/login`, {
        email: email,
        password: password,
      });

      Cookies.set("scanSipToken", response.data.token, { expires: 7 });
      setAdminToken(response.data.token);
      navigate("/admin/orders");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
        navigate("/admin/orders");
      }
    } else {
      navigate("/admin/orders");
    }
  }, [adminToken]);

  //   const controlInput = () => {
  //     if (email.length > 7) {
  //       console.log(
  //         email.includes("@"),
  //         !email.includes(" "),
  //         email.includes(".fr") !== email.includes(".com"),
  //       );
  //       if (
  //         !email.includes("@") ||
  //         email.includes(" ") ||
  //         email.includes(".fr") !== email.includes(".com")
  //       ) {
  //         return setAlert({
  //           input: "email",
  //           message: "Veuillez rentrer une adresse valide.",
  //         });
  //       } else {
  //         console.log("Present ----->  mail ok");
  //         setAlert({ input: "", message: "" });
  //       }
  //     }

  //     // if (!password) {
  //     //   return;
  //     // } else if (password && password.length < 8) {
  //     //   console.log("Absent -----> trop court");
  //     //   setAlert({
  //     //     input: "password",
  //     //     message: "Le mot de passe doit contenir plus de 8 caractères.",
  //     //   });
  //     //   return;
  //     // } else if (confirmPassword && password !== confirmPassword) {
  //     //   console.log("Absent -----> pas identique");
  //     //   setAlert({
  //     //     input: "confirm password",
  //     //     message: "Les mots de passe doivent être identiques.",
  //     //   });
  //     //   return;
  //     // } else {
  //     //   console.log("Present ----->  password ok");
  //     //   setAlert({
  //     //     input: "",
  //     //     message: "",
  //     //   });
  //     // }
  //   };

  return (
    <>
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
        <img
          src={logo}
          alt="Logo carré avec une ecriture ScanSip verte sur un fond noir "
        />
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-5  flex w-300 flex-col gap-1.5"
        >
          <div className=" flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              onChange={(e) => {
                handleChange(e.target.value, setEmail);
              }}
              value={email}
              id="email"
              type="email"
              className={
                alert.input === "email"
                  ? "border-red-600rounded-5 h-7.5 border px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Mot de Passe
            </label>
            <input
              onChange={(e) => {
                handleChange(e.target.value, setPassword);
              }}
              id="password"
              type="password"
              className={
                alert.input === "confirmPassword" || alert.input === "password"
                  ? "border-red-600rounded-5 h-7.5 border px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
              value={password}
            />
          </div>
          <p className="h-6 text-red-600">{alert.message}</p>
          <Button
            text={`M'inscire`}
            className="btn-primary h-7 w-full font-bold"
            type={"submit"}
          />
        </form>
        <a
          href="#"
          className="font-medium text-greenScanSip underline underline-offset-4"
        >
          Pas encore inscrit ? M'inscire
        </a>
      </main>
    </>
  );
};
export default AdminSignUp;
