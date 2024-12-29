document.getElementById('nav-placeholder').innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Quiz.html" id="quiz-link">Quiz</a></li>
            <li><a href="About.html">About</a></li>
            
        </ul>
    </nav>
`;

document.getElementsByTagName('ul')[0].innerHTML

const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

const quizBtn = document.getElementById('quiz-link');
// Target the Quiz link and set an onclick function
quizBtn.onclick = function() {
    document.getElementById('quiz-placeholder').innerHTML = `
      
    `;
    // Add your custom function logic here
};

document.getElementById('title-link').innerHTML = `
 <a id="title-link" href="./index.html"><h1 class="title">Quiz Mania</h1></a>
    
`;
document.getElementById('log-in').innerHTML = `
    <button id="login-btn" onclick=login()>Log In</button>
            `;

const loginDialog = document.getElementById('login-dialog');

function login() {
    const dialog = document.querySelector('dialog');
    const loginBtn = document.getElementById('login-btn');
    
    loginBtn.onclick = function() {
        dialog.showModal();
        
    }
}
function closeDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
}

