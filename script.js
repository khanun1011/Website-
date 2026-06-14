function switchTab(category) {
    // 1. จัดการเรื่องความสวยงามของปุ่ม (Active Class)
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // หาปุ่มที่ถูกคลิกเพื่อเติมคลาส active
    event.target.classList.add('active');

    // 2. จัดการการซ่อน/แสดง การ์ดตามหมวดหมู่
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'flex'; // แสดงทั้งหมด
        } else {
            // ถ้าการ์ดมีคลาสตรงกับหมวดหมู่ที่เลือก ให้แสดง ถ้าไม่ตรงให้ซ่อน
            if (card.classList.contains(category)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
