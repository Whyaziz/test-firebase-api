"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://antistunt-ee526-default-rtdb.asia-southeast1.firebasedatabase.app/data-anak.json"
      )
      .then(function (response) {
        console.log(response.data);
        setData(Object.values(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center p-9">
      <h1 className="text-3xl py-10">TEST FIREBASE</h1>
      <Link
        className="bg-green-500 rounded-lg self-end px-4 py-2 mb-2 hover:bg-green-700"
        href="/input-data"
      >
        Tambah Data
      </Link>
      <table className="w-full">
        <thead>
          <tr className=" border border-white">
            <th>Nama Anak</th>
            <th>Jenis Kelamin</th>
            <th>Tanggal Lahir</th>
            <th>Umur</th>
            <th>Berat Badan</th>
            <th>Penambahan Berat Badan</th>
            <th>Tinggi Badan</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((item, index) => (
            <tr className="text-center border border-white" key={index}>
              <td className="border border-white p-2">{item.nama_anak}</td>
              <td className="border border-white p-2">{item.jenis_kelamin}</td>
              <td className="border border-white p-2">{item.tanggal_lahir}</td>
              <td className="border border-white p-2">{item.umur}</td>
              <td className="border border-white p-2">{item.berat_badan}</td>
              <td className="border border-white p-2">
                {item.penambahan_berat_badan}
              </td>
              <td className="border border-white p-2">{item.tinggi_badan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
