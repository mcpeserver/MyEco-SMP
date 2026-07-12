name: Bug Report
about: Create a report to help us improve the website performance or layout
title: '[BUG] '
labels: bug, triage
assignees: mcpeserver

body:
  - type: markdown
    attributes:
      value: |
        Terima kasih telah melaporkan bug! Harap isi form di bawah ini dengan detail agar tim Developer dapat mereproduksi dan memperbaikinya segera.
  - type: textarea
    id: description
    attributes:
      label: Deskripsi Masalah
      description: Jelaskan secara singkat apa bug yang terjadi.
      placeholder: Contoh: Tombol salin IP di mobile tidak merespon saat diklik.
    validations:
      required: true
  - type: textarea
    id: reproduction
    attributes:
      label: Langkah Reproduksi Masalah
      description: Bagaimana cara kami memicu bug tersebut?
      placeholder: |
        1. Buka website di perangkat Android
        2. Masuk ke halaman Donasi & Rank
        3. Klik pada tombol...
    validations:
      required: true
  - type: input
    id: environment
    attributes:
      label: Lingkungan Pengujian
      description: Sebutkan jenis browser dan perangkat yang digunakan.
      placeholder: Contoh: Chrome v120 di Samsung Galaxy S23
    validations:
      required: false
