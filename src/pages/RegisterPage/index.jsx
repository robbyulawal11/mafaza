import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";

const RegisterPage = () => {
  const [user, userSet] = useState(false);
  const [userAccount, userAccountSet] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // create a new user with email and password
      await createUserWithEmailAndPassword(auth, userAccount.email, userAccount.password);
      userSet(true);
    } catch (err) {
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/weak-password":
          setErrorMessage("Kata sandi lemah");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Alamat email ini sudah digunakan oleh akun lain.");
          break;
        case "auth/invalid-email":
          setErrorMessage("Alamat email ini tidak valid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage("Akun email/kata sandi tidak diaktifkan.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="container flex justify-center mt-[30px] mb-[123px]">
      {user && <Navigate to="/" replace={true} />}
      <Card className="w-[500px] h-[700px]">
        <CardHeader className="text-center">
          <CardTitle className="font-medium text-[36px]">Daftar Akun Anda</CardTitle>
          <CardDescription className="text-[#062126] opacity-40 font-medium text-[16px] px-[50px]">Ayo, daftarkan akun Anda sekarang</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center justify-center gap-4 mb-[20px]">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="name">
                  Nama
                </Label>
                <Input className="w-[400px] bg-white" type="text" id="name" placeholder="" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="email">
                  Email
                </Label>
                <Input className="w-[400px] bg-white" type="email" id="email" placeholder="" value={userAccount.email} onChange={(e) => userAccountSet((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="password">
                  Kata Sandi
                </Label>
                <Input className="w-[400px] bg-white" type="password" id="password" placeholder="" value={userAccount.password} onChange={(e) => userAccountSet((prev) => ({ ...prev, password: e.target.value }))} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[#062126] opacity-70 font-medium text-[16px]" htmlFor="passwordConfirm">
                  Konfirmasi Kata Sandi
                </Label>
                <Input className="w-[400px] bg-white" type="password" id="passwordConfirm" placeholder="" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Button className="w-[400px] text-[20px] font-semibold mb-[18px] hover:bg-[#0F97B5]" type="submit">
                Daftar
              </Button>
              {error && <p className="text-red-500 text-[16px] font-regular">{errorMessage}</p>}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col w-full">
          <Link to="/login" className="flex justify-end w-[400px] mb-[16px]">
            <p className="text-[#062126] opacity-70 font-medium text-[16px] cursor-pointer hover:underline decoration-solid">Anda sudah punya akun?</p>
          </Link>
          <Link to={"/login"}>
            <Button className="w-[400px] text-[#24BEE0] border-[#24BEE0] bg-white text-[20px] font-semibold hover:border-[#0F97B5] hover:text-[#0F97B5]" variant="outline">
              Masuk
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
