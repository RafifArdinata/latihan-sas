import { z } from "zod";

export const peminatanSchema = z.object({
  nama: z
    .string()
    .min(3, { message: "Nama minimal harus 3 karakter" }),
    
  nis: z.coerce
    .number({ invalid_type_error: "NIS wajib diisi angka" })
    .min(100, { message: "NIS minimal bernilai 100" }),
    
  umur: z.coerce
    .number({ invalid_type_error: "Umur wajib diisi angka" })
    .min(15, { message: "Umur minimal 15 tahun" })
    .max(20, { message: "Umur maksimal 20 tahun" }),
    
  divisi: z.enum(["Frontend", "Backend", "UIUX"], {
    errorMap: () => ({ message: "Silakan pilih salah satu divisi" }),
  }),
  
  keahlian: z
    .array(z.string())
    .min(1, { message: "Pilih minimal 1 keahlian yang dikuasai" }),
    
  persetujuan: z
    .boolean()
    .refine((val) => val === true, {
      message: "Kamu wajib menyetujui tata tertib",
    }),
});