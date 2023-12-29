# Aplikasi Pemesanan Kendaraan

Aplikasi ini dikembangkan menggunakan ExpressJS untuk memenuhi kebutuhan pemesanan kendaraan pada perusahaan.

## Daftar Pengguna
1. Admin
   - Username: admin
   - Password: admin123

2. Pihak yang Menyetujui
   - Username: approver
   - Password: approve123

## Database Version
Aplikasi ini menggunakan MySQL sebagai basis data.
 
##install dependencies
- npm install
 
##menjalankan aplikasi
- npm start

## Framework
- ExpressJS

##contoh endpoint API
- Endpoint: POST /api/orders/create
- payload
  {
  "userId": 1,
  "vehicleId": 1,
  "driverId": 1,
  "approvalLevel": 1
}

- Endpoint: POST /api/approvals/create
- payload
  {
  "approvedBy": 2,
  "orderId": 1
}
## Panduan Penggunaan

### Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/waras47/pemesanan_kendaraan.git
