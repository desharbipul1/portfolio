/**
 * Footer Component
 * Simple minimal footer with status
 */

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'mt-24 py-12 border-t border-border-DEFAULT';
  footer.setAttribute('role', 'contentinfo');

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

  // Simple text
  const textDiv = document.createElement('div');
  textDiv.className = 'mb-8 text-center';
  textDiv.innerHTML = `
    <p class="text-foreground-secondary text-sm leading-relaxed">
      Building elegant solutions to complex problems. Let's create something amazing together.
    </p>
  `;
  container.appendChild(textDiv);

  // Status indicators - minimal
  const statusDiv = document.createElement('div');
  statusDiv.className = 'flex justify-center gap-6 mb-8 text-sm';

  const statuses = [
    { emoji: '🟢', text: 'Open to Opportunities' },
    { emoji: '📍', text: 'Remote Available' },
    { emoji: '⚡', text: 'Available Now' }
  ];

  statuses.forEach((status) => {
    const status_item = document.createElement('div');
    status_item.className = 'text-foreground-secondary';
    status_item.innerHTML = `<span>${status.emoji}</span> <span>${status.text}</span>`;
    statusDiv.appendChild(status_item);
  });

  container.appendChild(statusDiv);

  footer.appendChild(container);
  return footer;
}
