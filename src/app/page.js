"use client";
import Image from "next/image";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { useEffect, useState } from "react";

export default function Home() {
  const [analytics, setAnalytics] = useState(null);
  const [data, setData] = useState([]);

  axios
    .get(
      "https://antistunt-ee526-default-rtdb.asia-southeast1.firebasedatabase.app/data-anak.json"
    )
    .then(function (response) {
      console.log(response.data);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="flex flex-col min-h-screen items-center p-9">
      <h1 className="text-3xl py-10">TEST FIREBASE</h1>
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
          {data.map((item, index) => (
            <tr className="text-center border border-white" key={index}>
              <td className="border border-white p-2">{item.jenis_kelamin}</td>
              <td className="border border-white p-2">{item.nama_anak}</td>
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
