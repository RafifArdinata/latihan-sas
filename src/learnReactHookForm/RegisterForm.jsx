import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 1. Definisikan Skema Validasi Zod
const registerFormSchema = z.object({
  nama: z
    .string()
    .min(1, { message: 'Nama tidak boleh kosong' })
    .min(3, { message: 'Nama minimal 3 karakter' }),
  email: z
    .string()
    .min(1, { message: 'Email tidak boleh kosong' })
    .email({ message: 'Format email tidak valid' }),
  umur: z
    .number({ invalid_type_error: 'Umur harus berupa angka' })
    .min(6, { message: 'Umur minimal 6 tahun' })
    .max(100, { message: 'Umur tidak valid' }),
  pilihanprogram: z
    .string()
    .min(1, { message: 'Silakan pilih program' }),
  jenisKelamin: z
    .enum(['L', 'P'], {
      errorMap: () => ({ message: 'Pilih jenis kelamin' }),
    }),
  ekstrakurikuler: z
    .array(z.string())
    .min(1, { message: 'Pilih minimal 1 ekstrakurikuler' }),
  persyaratan: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Anda harus menyetujui persyaratan',
    }),
});

function RegisterForm() {
  const { 
    register, 
    watch, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema), // 2. Penghubung Zod ke React Hook Form
    defaultValues: {
      nama: '',
      email: '',
      umur: '',
      jenisKelamin: '',
      pilihanprogram: '',
      ekstrakurikuler: [],
      persyaratan: false
    }
  });

  function onSubmit(data) {
    console.log("Data Berhasil Dikirim:", data);
  }

  // 3. Pantau spesifik field 'pilihanprogram'
  const pilihanprogram = watch("pilihanprogram");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto">
      {/* Input Nama */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Nama Siswa</label>
        <input 
          type="text" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('nama')}
        />
        {errors.nama && <p className='text-red-500 text-xs mt-1'>{errors.nama.message}</p>}
      </div>

      {/* Input Email */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Email Siswa</label>
        <input 
          type="email" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('email')}
        />
        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
      </div>

      {/* Input Umur */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Umur Siswa</label>
        <input 
          type="number" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('umur', { valueAsNumber: true })}
        />
        {errors.umur && <p className='text-red-500 text-xs mt-1'>{errors.umur.message}</p>}
      </div>

      {/* Input Select Program */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Pilihan Program</label>
        <select 
          className='border border-blue-200 p-2 w-full rounded bg-white' 
          {...register('pilihanprogram')}
        >
          <option value="">-- Pilih Program --</option>
          <option value="tahfidz">Tahfidz</option>
          <option value="it">IT</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {errors.pilihanprogram && <p className='text-red-500 text-xs mt-1'>{errors.pilihanprogram.message}</p>}
      </div>

      {/* Radio Button Jenis Kelamin */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Jenis Kelamin</label>
        <div className="space-y-1">
          <div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="L" 
                {...register('jenisKelamin')}
              /> 
              Laki-laki
            </label>
          </div>
          <div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="P" 
                {...register('jenisKelamin')}
              /> 
              Perempuan
            </label>
          </div>
        </div>
        {errors.jenisKelamin && <p className='text-red-500 text-xs mt-1'>{errors.jenisKelamin.message}</p>}
      </div>

      {/* Checkbox Ekstrakurikuler */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Pilihan Ekstrakurikuler</label>
        <div className="space-y-1">
          {['Berkuda', 'Futsal', 'Renang', 'Basket'].map((item) => (
            <div key={item}>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={item} 
                  {...register('ekstrakurikuler')}
                />
                {item}
              </label>
            </div>
          ))}
        </div>
        {errors.ekstrakurikuler && <p className='text-red-500 text-xs mt-1'>{errors.ekstrakurikuler.message}</p>}
      </div>

      {/* Checkbox Persyaratan */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className="inline-flex items-center gap-2 cursor-pointer font-medium">
          <input 
            type="checkbox" 
            {...register('persyaratan')}
          />
          Saya Menyetujui Persyaratan
        </label>
        {errors.persyaratan && <p className='text-red-500 text-xs mt-1'>{errors.persyaratan.message}</p>}
      </div>

      {/* Status Validasi Realtime */}
      <p className="mb-3 text-sm font-semibold text-center">
        {isValid ? "Siap dikirim karena inputan valid" : "Belum siap dikirim karena inputan belum valid"}
      </p>

      {/* Kondisi jika pilihanprogram bernilai 'lainnya' */}
      {pilihanprogram === 'lainnya' && (
        <p className="text-center font-medium mb-3">Lainnya dipilih</p>
      )}

      {/* Tombol Simpan */}
      <button 
        type='submit' 
        disabled={!isValid} 
        className={`bg-blue-500 text-white px-4 py-2 rounded w-full font-semibold transition-all ${
          !isValid ? 'opacity-20 cursor-not-allowed' : 'hover:bg-blue-600 opacity-100'
        }`}
      >
        Simpan
      </button>
    </form>
  );
}

export default RegisterForm;