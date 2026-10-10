const form = document.getElementById("formkontak");

form.addEventListener("submit", function(event) {
    // Mencegah form berpindah ke halaman lain
    event.preventDefault();

    // Nomor WhatsApp tujuan
    const nomorWhatsApp = "6282266109523";

    // Mengambil data dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // Membuat isi pesan WhatsApp
    const isiPesan = `Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

    // Mengubah pesan menjadi format URL
    const pesanEncoded = encodeURIComponent(isiPesan);

    // Membuat link WhatsApp
    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

    // Membuka WhatsApp di tab baru
    window.open(urlWhatsApp, "_blank");
});