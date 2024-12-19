// 創建觀察器
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 當元素進入視窗
      if (entry.isIntersecting) {
        // 添加動畫 class
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        // 如果你不想要重複動畫，可以取消觀察
        observer.unobserve(entry.target);
      }
    });
  });
  
  // 選擇所有需要動畫的元素
  document.querySelectorAll('.scroll-animate').forEach((element) => {
    observer.observe(element);
  });