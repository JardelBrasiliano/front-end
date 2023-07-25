const mainEL = document.getElementById('main');

const data = [
  {
    name: 'Jay Reese',
    href: 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Carlos Ramos',
    href: 'https://images.pexels.com/photos/12990452/pexels-photo-12990452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Eugenia Grant',
    href: 'https://images.pexels.com/photos/3756603/pexels-photo-3756603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Lelia Marshall',
    href: 'https://images.pexels.com/photos/9248244/pexels-photo-9248244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Olivia Campgbell',
    href: 'https://images.pexels.com/photos/14174015/pexels-photo-14174015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Bernice Alvarando',
    href: 'https://images.pexels.com/photos/3278814/pexels-photo-3278814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

data.forEach(({ href, name }) => {
  const newElementHtml = `
    <div class="content-card">
      <div class="main-card">
        <span>...</span>
        <div class="user-circle">
          <img
            src=${href}
            alt=""
          />
        </div>

        <p>${name}</p>
      </div>
      <div class="footer-card">
        <div class="content-info-footer">
          <span>${Math.trunc(Math.random() * (99 - 5) + 5)}</span>
          <p>Projects</p>
        </div>

        <div class="content-info-footer">
          <span>${Math.trunc(Math.random() * (99 - 5) + 5)}</span>
          <p>Prototypes</p>
        </div>
      </div>
    </div>
  `;

  const newDiv = document.createElement('div');
  newDiv.innerHTML = newElementHtml;
  mainEL.appendChild(newDiv);
});
