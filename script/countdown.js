function countdownToBirthday(targetDate) {
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerElement.textContent = "Selamat Ulang Tahun!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }

  const interval = setInterval(updateTimer, 1000);
  updateTimer();
}

// Ganti tanggal di sini (format: YYYY-MM-DD)
const nextBirthday = new Date('2025-03-26');
countdownToBirthday(nextBirthday);
