/* shared.js — inject topbar + footer into every page */

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
}

function buildTopbar({ actions = '' } = {}) {
  return `
  <nav class="topbar">
    <div class="topbar-inner">
      <a class="topbar-brand" href="index.html">
        <div class="topbar-logo">
          <img src="gvpcdpgc.jpg" alt="GVP Logo"
            onerror="this.parentElement.innerHTML='<div class=\\'topbar-logo-fallback\\'>GVP</div>'">
        </div>
        <div>
          <div class="topbar-title">Smart Printer Booking System</div>
          <div class="topbar-sub">Gayatri Vidya Parishad College · Batch C7</div>
        </div>
      </a>
      <div class="topbar-actions">${actions}</div>
    </div>
  </nav>`;
}
