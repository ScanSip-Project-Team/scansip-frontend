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

const AdminSignUp = ({ adminToken, setAdminToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ input: "", message: "" });

  useEffect(() => {
    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
        navigate("/admin/orders");
      }
    } else {
      navigate("/admin/orders");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const handleChange = (e, func) => {
    func(e);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      controlInput();
      if (alert.input === "") {
        const response = await axios.post(`${baseApiURL}/admin/signin`, {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          Cookies.set("scanSipToken", response.data.token, { expires: 7 });
          setAdminToken(response.data.token);
          navigate("/admin/orders");
        } else {
          const alert = { input: "", message: "Utilisateur inconnu" };
          setAlert(alert);
        }
      }
    } catch (error) {
      console.log(error);
      const alert = { input: "auth", message: "Erreur d'authentification" };
      setAlert(alert);
      setEmail("");
      setPassword("");
    }
  };

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
                alert.input === "email" || alert.input === "auth"
                  ? "h-7.5 rounded-5 border border-red-600 px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
            />
          </div>
          <div className="flex flex-col gap-1">
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
                alert.input === "password" || alert.input === "auth"
                  ? "red h-7.5 rounded-5 border border-red-600 px-1"
                  : "h-7.5 rounded-5 border  border-darkGrey px-1"
              }
              value={password}
            />
          </div>
          <p className="jus h-6 text-red-600">{alert.message}</p>
          <Button
            text={`Connexion`}
            className="btn-primary h-7 w-full font-bold"
            type={"submit"}
          />
        </form>
        <p
          onClick={() => navigate("/admin/signup")}
          className="font-medium text-greenScanSip underline underline-offset-4"
        >
          Pas encore inscrit ? M'inscrire
        </p>
      </main>
    </>
  );
};
export default AdminSignUp;
