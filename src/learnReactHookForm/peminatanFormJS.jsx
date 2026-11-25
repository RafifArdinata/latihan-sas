import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { peminatanSchema } from "../schemas/peminatanSchema";

function PeminatanFormJS() {
  const [hasilSubmit, setHasilSubmit] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(peminatanSchema),
    mode: "onChange",
    defaultValues: {
      nama: "",
      nis: "",
      umur: "",
      divisi: "",
      keahlian: [],
      persetujuan: false,
    },
  });

  const daftarSkill = ["HTML", "CSS", "JavaScript", "React"];

  const onSubmit = (data) => {
    console.log("Data Pendaftaran:", data);
    setHasilSubmit(data);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Form Peminatan Santri
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nama Santrinyaa */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Santri
          </label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            {...register("nama")}
          />
          {errors.nama && (
            <p className="text-red-500 text-xs mt-1">{errors.nama.message}</p>
          )}
        </div>

        {/* NIS */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NIS
          </label>
          <input
            type="number"
            placeholder="Contoh: 101"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            {...register("nis")}
          />
          {errors.nis && (
            <p className="text-red-500 text-xs mt-1">{errors.nis.message}</p>
          )}
        </div>

        {/* Umur */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Umur
          </label>
          <input
            type="number"
            placeholder="15 - 20 tahun"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            {...register("umur")}
          />
          {errors.umur && (
            <p className="text-red-500 text-xs mt-1">{errors.umur.message}</p>
          )}
        </div>

        {/* Pilihan Divisi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pilihan Divisi
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500"
            {...register("divisi")}
          >
            <option value="">-- Pilih Divisi --</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="UIUX">UIUX</option>
          </select>
          {errors.divisi && (
            <p className="text-red-500 text-xs mt-1">{errors.divisi.message}</p>
          )}
        </div>

        {/* Keahlian */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Keahlian yang Dikuasai
          </label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {daftarSkill.map((skill) => (
              <label key={skill} className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  value={skill}
                  className="rounded text-blue-600 focus:ring-blue-500"
                  {...register("keahlian")}
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
          {errors.keahlian && (
            <p className="text-red-500 text-xs mt-1">
              {errors.keahlian.message}
            </p>
          )}
        </div>

        {/* Persetujuan Tata Tertib */}
        <div className="pt-2">
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="rounded text-blue-600 focus:ring-blue-500"
              {...register("persetujuan")}
            />
            <span>Saya menyetujui seluruh tata tertib yang berlaku</span>
          </label>
          {errors.persetujuan && (
            <p className="text-red-500 text-xs mt-1">
              {errors.persetujuan.message}
            </p>
          )}
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 px-4 rounded font-medium text-white transition ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Kirim Pendaftaran
        </button>
      </form>

      {/* Kartu Ringkasan Hasil Submit */}
      {hasilSubmit && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-md">
          <h3 className="text-base font-semibold text-green-800 mb-2">
            Pendaftaran Berhasil!
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Nama:</strong> {hasilSubmit.nama}</li>
            <li><strong>NIS:</strong> {hasilSubmit.nis}</li>
            <li><strong>Umur:</strong> {hasilSubmit.umur} tahun</li>
            <li><strong>Divisi:</strong> {hasilSubmit.divisi}</li>
            <li><strong>Keahlian:</strong> {hasilSubmit.keahlian.join(", ")}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PeminatanFormJS;