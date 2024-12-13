document.getElementById('guestForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Ambil nilai input
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validasi
  if (name && message) {
    // Simpan pesan di localStorage
    const guestbook = JSON.parse(localStorage.getItem('guestbook')) || [];
    guestbook.push({ name, message, date: new Date().toLocaleDateString() });
    localStorage.setItem('guestbook', JSON.stringify(guestbook));

    // Tambahkan ke daftar pesan
    displayMessages();
    document.getElementById('guestForm').reset();
  }
});

function displayMessages() {
  const guestbook = JSON.parse(localStorage.getItem('guestbook')) || [];
  const messagesList = document.getElementById('messagesList');
  messagesList.innerHTML = guestbook.map(
    entry => `<li><strong>${entry.name}</strong> (${entry.date}): ${entry.message}</li>`
  ).join('');
}

// Tampilkan pesan saat halaman dimuat
displayMessages();
