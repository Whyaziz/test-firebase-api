"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function PostData() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_anak: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    umur: "",
    berat_badan: "",
    penambahan_berat_badan: "",
    tinggi_badan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://antistunt-ee526-default-rtdb.asia-southeast1.firebasedatabase.app/data-anak.json",
        formData
      )
      .then((response) => {
        console.log(response);
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen p-8 items-center">
      <h1 className="text-3xl">Tambah Data</h1>
      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        <label>Nama Anak:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="text"
          name="nama_anak"
          onChange={handleChange}
        />
        <label>Jenis Kelamin:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="text"
          name="jenis_kelamin"
          onChange={handleChange}
        />
        <label>Tanggal Lahir:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="date"
          name="tanggal_lahir"
          onChange={handleChange}
        />
        <label>Umur:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="number"
          name="umur"
          onChange={handleChange}
        />
        <label>Berat Badan:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="number"
          name="berat_badan"
          onChange={handleChange}
        />
        <label>Penambahan Berat Badan:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="number"
          name="penambahan_berat_badan"
          onChange={handleChange}
        />
        <label>Tinggi Badan:</label>
        <input
          className="bg-black px-2 border border-white text-white"
          type="number"
          name="tinggi_badan"
          onChange={handleChange}
        />
        <input
          className="bg-green-500 rounded-lg w-[20%] px-4 py-2 mb-2 hover:bg-green-700"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
