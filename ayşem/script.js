document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts');
    const photoHeartsContainer = document.querySelector('.photo-hearts');
    const photos = ['ayşe.jpg', 'ayşe1.jpg', 'ayşe2.jpg', 'ayşe3.jpg', 'ayşe4.jpg', 'ayşe5.jpg'];
    
    // Fotoğraflı kalplerin sayısı
    const photoCount = 6;
    
    // Normal kalp oluşturma fonksiyonu (fotoğraflı kalplerin etrafında)
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        // Fotoğraflı kalplerin hizasına göre left hesapla
        const index = Math.floor(Math.random() * photoCount);
        // .photo-heart genişliği ve gap değerini CSS ile senkronize et
        const heartWidth = 200; // px (veya güncel değeri)
        const gap = window.innerWidth <= 600 ? 12 : window.innerWidth <= 900 ? 32 : 200; // px
        const leftOffset = (window.innerWidth - (photoCount * heartWidth + (photoCount - 1) * gap)) / 2;
        const left = leftOffset + index * (heartWidth + gap) + heartWidth / 2 - 15; // 15 px yarı kalp boyu
        heart.style.left = left + 'px';
        heart.style.top = (window.innerHeight / 2 - 120) + 'px'; // Fotoğraflı kalplerin biraz üstü
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Her zaman 6 fotoğrafı yanyana göster
    function showSixPhotoHearts() {
        photoHeartsContainer.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const photoHeart = document.createElement('div');
            photoHeart.classList.add('photo-heart');
            const img = document.createElement('img');
            img.src = photos[i % photos.length];
            photoHeart.appendChild(img);
            photoHeartsContainer.appendChild(photoHeart);
        }
    }
    
    // Her 300ms'de bir normal kalp oluştur
    setInterval(createHeart, 300);
    
    showSixPhotoHearts();
}); 