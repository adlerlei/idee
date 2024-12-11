const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth; // 取得單張圖片的寬度
let currentIndex = 0; // 目前顯示的圖片索引

// 複製所有圖片節點，並添加到輪播列表的末尾
items.forEach(item => {
    track.appendChild(item.cloneNode(true));
});

// 自動播放功能
function autoPlay() {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // 當滑動到複製的圖片節點時，無縫接軌原始圖片
    if (currentIndex >= items.length / 2) {
        currentIndex = 0; 
        // 移除 track.style.transition = 'none'; 
        // 移除 track.style.transform = `translateX(0)`;
        // 移除 setTimeout(() => {
        //     track.style.transition = 'transform 0.5s ease-in-out';
        // }, 0);
    }
}

let autoPlayInterval = setInterval(autoPlay, 3000);

// 按鈕控制功能
prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = items.length / 2 - 1;
        track.style.transition = 'none'; // 移除 transition 效果
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // 立即跳到最後一張圖片
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out'; // 恢復 transition 效果
        }, 0);
    } else {
        currentIndex = Math.max(0, currentIndex - 1);
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});
nextButton.addEventListener('click', () => {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});