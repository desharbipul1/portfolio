/**
 * Experience Item Component
 * Individual experience/role card with highlight animation
 */

export function createExperienceItem(exp) {
  const item = document.createElement('div');
  item.className = 'experience-item mb-8 animate-slideUp p-8 rounded-xl border-l-4 border-accent-cyan bg-surface-elevated/60 hover:bg-surface-elevated/90 transition-all duration-base';
  item.style.perspective = '1000px';

  // Add hover effects with premium elevation and glow
  item.addEventListener('mouseenter', () => {
    item.style.boxShadow = 'var(--shadow-elevation-3), var(--shadow-glow-cyan)';
    item.style.transform = 'translateX(8px) translateY(-2px)';
    item.style.borderLeftColor = 'rgba(6, 214, 255, 0.8)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.boxShadow = 'var(--shadow-elevation-2)';
    item.style.transform = 'none';
    item.style.borderLeftColor = 'rgba(6, 214, 255, 1)';
  });

  // Initial shadow on load
  item.style.boxShadow = 'var(--shadow-elevation-2)';

  // Header with title and company
  const header = document.createElement('div');
  header.className = 'mb-3 flex flex-wrap justify-between items-start gap-2';

  const titleElement = document.createElement('h3');
  titleElement.className = 'text-xl font-bold text-foreground-DEFAULT group-hover:text-accent-cyan transition-colors duration-fast';
  titleElement.textContent = exp.title;

  const companyElement = document.createElement('p');
  companyElement.className = 'text-lg text-accent-cyan font-semibold px-3 py-1 bg-accent-cyan/10 rounded-full';
  companyElement.textContent = exp.company;

  header.appendChild(titleElement);
  header.appendChild(companyElement);
  item.appendChild(header);

  // Dates with monospace styling and enhanced colors
  const datesElement = document.createElement('p');
  datesElement.className = 'font-mono text-sm text-accent-gold mb-4 tracking-wide';
  const endDate = exp.endDate && exp.endDate !== '' ? exp.endDate : 'PRESENT';
  datesElement.innerHTML = `<span class="inline-block px-2 py-1 bg-accent-gold/10 rounded">📅 ${exp.startDate}</span> <span class="text-foreground-muted">→</span> <span class="inline-block px-2 py-1 bg-accent-gold/10 rounded">${endDate}</span>`;
  item.appendChild(datesElement);

  // Description
  if (exp.description) {
    const descElement = document.createElement('p');
    descElement.className = 'text-foreground-secondary text-sm leading-relaxed mb-4 italic';
    descElement.textContent = exp.description;
    item.appendChild(descElement);
  }

  // Achievements
  const achievementsContainer = document.createElement('ul');
  achievementsContainer.className = 'space-y-3 mt-4 pt-4 border-t border-accent-cyan/20';

  exp.achievements.forEach((achievement, index) => {
    const li = document.createElement('li');
    li.className = 'flex gap-3 text-foreground-secondary text-sm hover:text-foreground-DEFAULT transition-colors duration-fast';

    const bullet = document.createElement('span');
    bullet.className = 'text-accent-emerald flex-shrink-0 mt-0.5 font-bold text-lg';
    bullet.textContent = '✓';

    const text = document.createElement('span');
    text.textContent = achievement;

    li.appendChild(bullet);
    li.appendChild(text);
    achievementsContainer.appendChild(li);
  });

  item.appendChild(achievementsContainer);

  return item;
}
