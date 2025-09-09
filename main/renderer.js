document.addEventListener('DOMContentLoaded', async() => {
  
  const container = document.getElementById('nav-placeholder');
  if (container) {
    // console.log('done')
    try {
      const res = await fetch('../../component/nav-buttons.html');
    //   console.log(`res:`,res)
      const html = await res.text();
      container.innerHTML = html;
      attachNavListeners(); // Attach event listeners after inserting HTML
    } catch (err) {
      console.error("Failed to load nav-buttons.html:", err);
    }
  } else {
    attachNavListeners(); // Fallback if no container
  }
});
// Attach event listeners to nav buttons
function attachNavListeners() {
  const prevBtn = document.getElementById('prevBtn');
  const homeBtn = document.getElementById('homeBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      window.electronAPI.navigateBack();
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.electronAPI.navigateHome();
    });
  }
}
  // create patient
  // Redirect to new view without opening a new window
function redirect(path) {
  window.location.href = path;
}
 