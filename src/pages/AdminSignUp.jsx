// Import Package
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import baseApiURL from "../api";

//Import Components
import Button from "../components/Button";

// Import Asset
import logo from "../assets/logo.svg";

const AdminSignUp = ({ adminToken, setAdminToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({ input: "", message: "" });

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

  const handleChange = (e, func) => {
    func(e);
    // setTimeout(controlInput(), 3300);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (controlInput()) {
        const response = await axios.post(`${baseApiURL}/admin/signup`, {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          Cookies.set("scanSipToken", response.data.token, { expires: 7 });
          setAdminToken(response.data.token);
          navigate("/admin/orders");
        } else {
          const alert = { input: "", message: "Création Impossible" };
          setAlert(alert);
        }
      }
    } catch (error) {
      // console.log(error.message);
      const alert = { input: "", message: error.message };
      setAlert(alert);
    }
  };

  const controlInput = () => {
    if (!email) {
      setAlert({
        input: "email",
        message: "Veuillez rentrer une adresse.",
      });
      return false;
    } else {
      setAlert({ input: "", message: "" });
    }

    if (!password) {
      setAlert({
        input: "password",
        message: "Veuillez renseigner un mot de passe",
      });
      return false;
    }
    if (!confirmPassword) {
      setAlert({
        input: "confirm-password",
        message: "Veuillez confirmer le mot de passe",
      });
      return false;
    }
    if (password !== confirmPassword) {
      setAlert({
        input: "same-password",
        message: "Mots de passe différents",
      });
      return false;
    }
    if (password.length < 6) {
      setAlert({
        input: "same-password",
        message: "Mot de passe trop court",
      });
      return false;
    }
    return true;
  };

  return (
    <>
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
            text={`M'inscrire`}
            className="btn-primary h-7 w-full font-bold"
            type={"submit"}
          />
        </form>
        <p
          className="font-medium text-greenScanSip underline underline-offset-4"
          onClick={() => navigate("/admin/signin")}
        >
          Déja inscrit ? Me connecter
        </p>
      </main>
    </>
  );
};
export default AdminSignUp;
