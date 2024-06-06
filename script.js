document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');
    
    codes.forEach((code, index) => {
        code.addEventListener('input', () => {
            if (code.value.length === 1 && index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

        code.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && index > 0 && code.value.length === 0) {
                codes[index - 1].focus();
            }
        });
    });

    // Focus the first input initially
    codes[0].focus();
});

