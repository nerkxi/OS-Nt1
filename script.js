// Открытие списка должников с анимацией
document.getElementById('mainDebtTile').addEventListener('click', function() {
    const container = document.getElementById('debtorsContainer');
    const background = document.querySelector('.background');
    
    debtAudio.play().catch(e => console.error("Ошибка звука:", e));
    
    background.classList.toggle('darken');
    
    if (container.classList.contains('show')) {
        container.classList.remove('show');
    } else {
        container.classList.add('show');
    }
});

// Пульсация главной плитки
setInterval(() => {
    const tile = document.getElementById('mainDebtTile');
    tile.style.animation = 'pulse 2s infinite';
}, 2000);
