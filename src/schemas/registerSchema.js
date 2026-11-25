//!tolong pindahkan schema validasi registerSchema ke file ini
//!kemudian file "RegisterForm.jsx" mengimport file registerSchema.js
import { z } from 'zod';

export const registerFormSchema = z.object({
  nama: z
    .string()
    .min(3, { message: "Nama minimal 3 karakter" })
    .max(50, { message: "Nama maksimal 50 karakter" }),
  email: z
    .string()
    .email({ message: "Email tidak valid" }),
  umur: z
    .coerce.number({ invalid_type_error: "Umur harus diisi angka" })
    .min(10, { message: "Umur minimal 10 tahun" })
    .max(100, { message: "Umur maksimal 100 tahun" }),
  jenisKelamin: z
    .string()
    .min(1, { message: "Pilih jenis kelamin" }),
  pilihanprogram: z
    .string()
    .min(1, { message: "Pilih program" }),
  ekstrakurikuler: z
    .array(z.string())
    .min(1, { message: "Pilih minimal 1 ekstrakurikuler" }),
  persyaratan: z
    .boolean()
    .refine((val) => val === true, {//*jika value berisi true maka lolos dari validasi
        message: "Anda harus menyetujui persyaratan",   
    }),
});

export default registerFormSchema