document.addEventListener('DOMContentLoaded', () => {
    // 獲取漢堡按鈕和選單元素
    const menuBtn = document.querySelector('.dropdown-trigger');
    const mobileMenu = document.getElementById('mobile-dropdown');
    let isMenuOpen = false;

    // 檢查元素是否存在
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 切換選單狀態
            if (!isMenuOpen) {
                mobileMenu.classList.add('show');
                menuBtn.classList.add('is-active');
            } else {
                mobileMenu.classList.remove('show');
                menuBtn.classList.remove('is-active');
            }
            isMenuOpen = !isMenuOpen;
        });

        // 點擊選單項目時關閉選單
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                menuBtn.classList.remove('is-active');
                isMenuOpen = false;
            });
        });
    }
});