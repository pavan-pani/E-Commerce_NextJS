"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      router.push("/login")
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <h1>This is home</h1>
      <button className=" bg-red-600 hover:bg-red-500 text-white font-bold py-2 mt-4 px-4 rounded"
        onClick={logout}
      >Logout</button>
    </div>

  );
}
