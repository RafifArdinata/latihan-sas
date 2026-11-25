import React from 'react';
import { useForm } from 'react-hook-form';

function DashboardUser() {
  const { register, watch,handleSubmit,  formState: { errors, isValid } } = useForm({// 1. Menambahkan isValid dari formState
    mode: "onChange", //! memantau isi dari form secara realtime
    
    //! defaultValues kita komentar (untuk mengetahui keadaan button ketika false)
    
    defaultValues: {
      nama: 'Rafif',//*text
      email: 'rafif@gmail.com',//* Email
      umur: 20,//*number
      jenisKelamin: 'L',//* Nilai default untuk radio (Diperbaiki: j0enisKelamin -> jenisKelamin)
      pilihanprogram: 'it',//* Nilai default untuk select / choice
      ekstrakurikuler: ['Futsal', 'Basket'],//* Nilai default untuk multiple checkbox (Array) : multiple
      persyaratan: true,//* checkbox: single
    }
  });

  function onSubmit(data) {
    console.log(data);
  }
const formValues = watch("");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto">
      {/* Input Nama */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Nama Siswa</label>
        <input 
          type="text" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('nama', {
            required: 'Nama harus diisi',
            minLength: {
              value: 3,
              message: 'Nama minimal 3 karakter'
            },
            maxLength: {
              value: 50,
              message: 'Nama maksimal 50 karakter'
            }
          })}
        />
        {errors.nama && <p className='text-red-500 text-xs mt-1'>{errors.nama.message}</p>}
      </div>

      {/* Input Email */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Email Siswa</label>
        <input 
          type="email" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('email', {
            required: 'Email harus diisi',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Format email tidak valid (contoh: nama@domain.com)'
            }
          })}
        />
        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
      </div>

      {/* Input Umur */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Umur Siswa</label>
        <input 
          type="number" 
          className='border border-blue-200 p-2 w-full rounded bg-white'
          {...register('umur', {
            valueAsNumber: true,
            required: 'Umur harus diisi',
            min: {
              value: 12,
              message: 'Umur minimal 12 tahun'
            },
            max: {
              value: 20,
              message: 'Umur maksimal 20 tahun'
            }
          })}
        />
        {errors.umur && <p className='text-red-500 text-xs mt-1'>{errors.umur.message}</p>}
      </div>

      {/* Input Select Program */}
      <div className='bg-blue-300 mb-3 p-3 rounded'>
        <label className='block font-medium mb-1'>Pilihan Program</label>
        <select 
          className='border border-blue-200 p-2 w-full rounded bg-white' 
          {...register('pilihanprogram', { required: 'Pilih salah satu program' })}
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
                {...register('jenisKelamin', { required: 'Jenis kelamin harus diisi' })}
              /> 
              Laki-laki
            </label>
          </div>
          <div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="P" 
                {...register('jenisKelamin', { required: 'Jenis kelamin harus diisi' })}
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
                  {...register('ekstrakurikuler', { required: 'Pilih minimal 1 ekstrakurikuler' })}
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
            {...register('persyaratan', { required: 'Persyaratan harus disetujui' })}
          />
          Saya Menyetujui Persyaratan
        </label>
        {errors.persyaratan && <p className='text-red-500 text-xs mt-1'>{errors.persyaratan.message}</p>}
      </div>

      {/* 2. Diperbaiki: <P> diubah menjadi <p> */}
      <p className="mb-3 text-sm font-semibold text-center">
        {isValid ? "Siap dikirim karena inputan valid" : "Belum siap dikirim karena inputan belum valid"}
      </p>
      { formValues.pilihanprogram === 'lainnya' &&
        <p>Lainnya dipilih</p>
       }

      {/* 3. Penyesuaian tombol berdasarkan status isValid */}
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

export default DashboardUser;