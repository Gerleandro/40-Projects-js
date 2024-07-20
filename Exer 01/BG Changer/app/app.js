const changer = document.getElementById('btn-changer');

if (changer !== undefined && changer !== null) {
    changer.addEventListener('click', () => {
        const lycors = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += lycors[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color
        document.getElementById('hex').innerText = color;
    });
};
