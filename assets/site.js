(function () {
  "use strict";
  const partners = window.SEOUL_READY_PARTNERS || {};
  // Link destinations are controlled by the site owner, not by user input.
  document.querySelectorAll('[data-outbound]').forEach(function (link) {
    const provider = partners[link.dataset.outbound];
    if (!provider) return;
    const destination = provider.affiliate || provider.official;
    if (!destination || !/^https:\/\//.test(destination)) return;
    link.href = destination;
    link.rel = provider.affiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer';
  });

  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
      toggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  const form = document.getElementById('trip-form');
  const result = document.getElementById('plan-result');
  if (!form || !result) return;
  const durationText = {
    short: 'A short-and-sweet Seoul trip',
    medium: 'A well-paced Seoul week',
    long: 'A slow, deeper Seoul stay'
  };
  const interests = {
    food: {
      intro: 'Start with one neighborhood and one market or food experience. Leave the rest of the day open for discovering places you would not have searched for.',
      activity: 'Browse food walks or market experiences that match your date and dietary needs.'
    },
    culture: {
      intro: 'Choose a palace or historic neighborhood as your anchor, then plan the rest of your day nearby rather than crossing the city repeatedly.',
      activity: 'Browse palace and cultural experiences; check opening days and meeting locations.'
    },
    highlights: {
      intro: 'Choose a few landmarks, then group them by area. Seoul rewards exploring at street level as much as ticking off an attraction list.',
      activity: 'Browse city introduction tours if you want local commentary on your first day.'
    }
  };
  const textNode = function (tag, text, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
  };
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const duration = data.get('duration') || 'short';
    const interest = data.get('interest') || 'food';
    const choice = interests[interest];
    document.getElementById('plan-title').textContent = durationText[duration];
    document.getElementById('plan-description').textContent = choice.intro;
    const list = document.getElementById('plan-checklist');
    list.replaceChildren();
    const steps = [
      'Before you fly: check if your phone is unlocked and supports eSIM.',
      'Arrival day: plan one transfer to your accommodation, then keep your schedule light.',
      choice.activity
    ];
    if (duration === 'long') steps.push('For a longer stay: reserve one flexible day for a neighborhood or day trip you discover along the way.');
    steps.forEach(function (step, i) {
      const item = document.createElement('div');
      item.className = 'result-step';
      item.append(textNode('span', String(i + 1).padStart(2, '0'), 'result-step-index'));
      item.append(textNode('span', step));
      list.appendChild(item);
    });
    form.hidden = true;
    result.hidden = false;
    result.focus({preventScroll: true});
    result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest'});
  });
  document.getElementById('edit-plan').addEventListener('click', function () {
    result.hidden = true;
    form.hidden = false;
    form.querySelector('input').focus();
  });
})();
// Disclosure status is based on affiliate configuration, so it cannot become stale when links are enabled.
(function () {
  const element = document.getElementById('affiliate-link-status');
  if (!element) return;
  const entries = Object.values(window.SEOUL_READY_PARTNERS || {});
  const hasAffiliate = entries.some(function (entry) { return Boolean(entry.affiliate); });
  element.textContent = hasAffiliate
    ? 'Affiliate tracking is enabled for one or more providers on this site. Where an eligible affiliate link is used, we may receive a commission from a qualifying purchase.'
    : 'Current status: affiliate tracking has not been activated on this website. Outbound product links currently go to ordinary official provider pages without commission tracking.';
})();
