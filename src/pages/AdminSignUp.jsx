// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//Import Components
import Button from "../components/Button";
import baseApiURL from "../api";

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
      controlInput();
      if (alert.input === "") {
        const { data } = await axios.post(`${baseApiURL}/admin/signup`, {
          email: email,
          password: password,
        });
        console.log(data);
        if (data.status === 200) {
          Cookies.set("scanSipToken", data.token, { expires: 7 });
          setAdminToken(data.token);
          navigate("/admin/orders");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
      }
    } else {
      navigate("/admin/orders");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const controlInput = () => {
    if (!email) {
      return setAlert({
        input: "email",
        message: "Veuillez rentrer une adresse.",
      });
    } else {
      setAlert({ input: "", message: "" });
    }

    if (!password) {
      return setAlert({
        input: "password",
        message: "Veuillez renseigner un mot de passe",
      });
    }
    if (!confirmPassword) {
      return setAlert({
        input: "confirm-password",
        message: "Veuillez confirmer le mot de passe",
      });
    }
    if (password !== confirmPassword) {
      return setAlert({
        input: "same-password",
        message: "Veuillez renseigner les mêmes mots de passe",
      });
    }
    if (password.length < 6) {
      return setAlert({
        input: "same-password",
        message: "Mot de passe trop court",
      });
    }
  };

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
                  ? "h-7.5 rounded-5 border border-red-600 px-1"
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
                alert.input === "same-password" || alert.input === "password"
                  ? "h-7.5 rounded-5 border border-red-600 px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
              value={password}
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="font-medium">
              Confirmer votre mot de passe
            </label>
            <input
              onChange={(e) => {
                handleChange(e.target.value, setConfirmPassword);
              }}
              value={confirmPassword}
              id="confirmPassword"
              type="password"
              className={
                alert.input === "confirm-password" ||
                alert.input === "same-password"
                  ? "h-7.5 rounded-5 border border-red-600 px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
            />
          </div>
          <p className="h-6 text-red-600">{alert.message}</p>
          <Button
            text={`M'inscire`}
            className="btn-primary h-7 w-full font-bold"
            type={"submit"}
          />
        </form>
        <p className="font-medium text-greenScanSip underline underline-offset-4">
          Déja inscrit ? Me connecter
        </p>
      </main>
    </>
  );
};
export default AdminSignUp;
