/**
 * Status Indicator Component
 * Shows availability status with pulsing accent dot
 */
export function createStatusIndicator(status, label) {
  const container = document.createElement('div');
  container.className = 'flex items-center gap-2';

  const dot = document.createElement('span');
  dot.className = 'w-2 h-2 rounded-full bg-accent-DEFAULT animate-statusPulse';
  dot.setAttribute('aria-hidden', 'true');

  const text = document.createElement('span');
  text.className = 'text-sm font-medium text-foreground-DEFAULT';
  text.textContent = label;

  container.appendChild(dot);
  container.appendChild(text);

  return container;
}

/**
 * Availability Badge Component
 */
export function createAvailabilityBadge() {
  const container = document.createElement('div');
  container.className = 'space-y-2 py-4 px-6 border border-border-strong rounded-lg bg-surface-DEFAULT';

  // Status line
  const statusLine = document.createElement('div');
  statusLine.className = 'flex items-center gap-2 font-mono text-xs';

  const statusDot = document.createElement('span');
  statusDot.className = 'w-2 h-2 rounded-full bg-accent-DEFAULT animate-statusPulse';

  const statusText = document.createElement('span');
  statusText.className = 'text-foreground-muted';
  statusText.textContent = 'OPEN TO OPPORTUNITIES';

  statusLine.appendChild(statusDot);
  statusLine.appendChild(statusText);
  container.appendChild(statusLine);

  // Contract availability
  const contractLine = document.createElement('div');
  contractLine.className = 'flex justify-between font-mono text-xs';

  const contractLabel = document.createElement('span');
  contractLabel.className = 'text-foreground-muted';
  contractLabel.textContent = 'CONTRACT';

  const contractValue = document.createElement('span');
  contractValue.className = 'text-status';
  contractValue.textContent = 'AVAILABLE';

  contractLine.appendChild(contractLabel);
  contractLine.appendChild(contractValue);
  container.appendChild(contractLine);

  // Remote availability
  const remoteLine = document.createElement('div');
  remoteLine.className = 'flex justify-between font-mono text-xs';

  const remoteLabel = document.createElement('span');
  remoteLabel.className = 'text-foreground-muted';
  remoteLabel.textContent = 'REMOTE';

  const remoteValue = document.createElement('span');
  remoteValue.className = 'text-status';
  remoteValue.textContent = 'AVAILABLE';

  remoteLine.appendChild(remoteLabel);
  remoteLine.appendChild(remoteValue);
  container.appendChild(remoteLine);

  return container;
}
