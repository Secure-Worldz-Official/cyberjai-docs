const glowElement = document.getElementById('glow');
        
if (glowElement) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            glowElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            glowElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
    });
}

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const sunIcon = `
    <svg viewBox="0 0 24 24">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 10-1.06-1.061l-1.591 1.59zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM5.106 6.166a.75.75 0 001.06-1.06l-1.59-1.59a.75.75 0 00-1.06 1.061l1.59 1.59z"/>
    </svg>
`;

const moonIcon = `
    <svg viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-10.899 0C9.695 10.595 10.595 9.695 10.595 9.695A9.011 9.011 0 0012 3z"/>
    </svg>
`;

// Check localStorage for preferred theme (fallback to set icons correctly)
const savedTheme = localStorage.getItem('theme');
if (themeToggle) {
    if (savedTheme === 'light') {
        themeToggle.innerHTML = moonIcon;
    } else {
        themeToggle.innerHTML = sunIcon;
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        if (currentTheme === 'light') {
            root.removeAttribute('data-theme');
            themeToggle.innerHTML = sunIcon;
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = moonIcon;
            localStorage.setItem('theme', 'light');
        }
    });
}
