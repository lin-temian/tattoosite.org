function switchTheme() {
    let check = document 
    
    .getElementById('theme_css')
    .classList[0] === 'dark';
  
    let element = document.getElementById('theme_css');
  
  
    if (check) {
     element.href = 'css/light.css';
     element.classList.remove('dark')
     element.classList.add('light');
    } else {
     element.href = 'css/dark.css';
     element.classList.remove('light')
     element.classList.add('dark');
    }
  }

