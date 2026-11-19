(function () {
  const page = document.body.dataset.page || "home";
  const links = [
    ["index.html", "home", "Home"],
    ["activities.html", "activities", "Activities"],
    ["venues.html", "venues", "Lapas"],
    ["packages.html", "parties", "Parties"],
    ["gallery.html", "gallery", "Gallery"],
    ["visit.html", "visit", "Visit"]
  ];
  const nav = links.map(([href, id, label]) =>
    `<a href="${href}" class="${id === page ? "on" : ""}">${label}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site">
      <div class="wrap bar">
        <a class="brand" href="index.html">
          <span class="mark" aria-hidden="true">🚂</span>
          <span>Cedar Junction<small>Pretoria East</small></span>
        </a>
        <nav class="desk">${nav}<a class="bookbtn" href="book.html">Book a day</a></nav>
        <button class="menu-btn" type="button" aria-label="Open menu">☰</button>
      </div>
      <nav class="mob">${nav}<a class="bookbtn" href="book.html">Book a day</a></nav>
    </header>`);
  document.body.insertAdjacentHTML("beforeend", `
    <a class="float" href="book.html">Book now</a>
    <footer class="site"><div class="wrap">
      <div><h2 class="display">Cedar Junction</h2><p>Plot 404, Graham Road, Zwavelpoort. 8 km east of Solomon Mahlangu on Lynnwood Road.</p></div>
      <div><h3>Hours</h3><p>Mon–Fri 10:00–17:00</p><p>Sat, Sun & holidays 09:00–17:00</p><p>Closed through July. Slides close from 1 June.</p></div>
      <div><h3>Bookings</h3><p>082 766 2748 · 065 826 8384</p><p>info@cedarjunction.co.za</p><p>Card only. Book before you drive out.</p></div>
    </div></footer>`);

  const btn = document.querySelector(".menu-btn");
  const mob = document.querySelector("nav.mob");
  btn.addEventListener("click", () => {
    const open = mob.classList.toggle("open");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.textContent = open ? "✕" : "☰";
  });
})();
