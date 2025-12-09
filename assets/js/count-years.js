const startDate = new Date(1989, 4, 25);
        
function calculateYears() {
    const now = new Date();
    const diffInMs = now - startDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    
    return Math.floor(diffInYears);
}

window.onload = function() {
    const years = calculateYears();
    document.getElementById('yearsCount').textContent = years;

    const thisyear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = thisyear;
};