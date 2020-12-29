document.getElementById('menu').addEventListener('click', evt =>
  evt.target.parentElement.classList.toggle('show')
)

document.addEventListener('DOMContentLoaded', () => {
  class LanguageSwitcher {
    constructor(element) {
      this.element = element;
      this.control = this.element.querySelector('[aria-haspopup]');
      const popupId = this.control.getAttribute('aria-controls');
      this.popup = document.getElementById(popupId);
      this.control.addEventListener('click', _ => {this.toggle();});
    }

    get expanded() {
      return this.control.getAttribute('aria-expanded') === 'true';
    }

    toggle() {
      if (this.expanded) {
        this.collapse();
      } else {
        this.expand();
      }
    }

    expand() {
      if (this.expanded) return;
      this.control.setAttribute('aria-expanded', 'true');
      this.popup.setAttribute('aria-hidden', 'false');
    }

    collapse() {
      if (! this.expanded) return;
      this.control.setAttribute('aria-expanded', 'false');
      this.popup.setAttribute('aria-hidden', 'true');
    }
  }

  for (const switcher of document.getElementsByClassName('language-switcher')) {
    new LanguageSwitcher(switcher);
  }
});
