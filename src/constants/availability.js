// Single source of truth for availability. Used by the AI chat assistant's
// knowledge pack (chat-worker/scripts/build-knowledge.mjs).
export const Availability = {
  status: 'Available now. Currently a Senior Software Engineer at TK Designs, and open to more work.',
  openTo: [
    'Full-time roles',
    'Part-time roles',
    'Freelance and contract work',
    'Bug fixes and incident triage',
    'MVP creation, from idea to a live product',
    'Any web development work in his stack',
  ],
  workMode: 'Remote only.',
  workingHours:
    'Works 12 PM to 4 AM Pakistan time (PKT, UTC+5), so he can overlap with almost any timezone, including the US, UK, Europe and the Gulf.',
  startDate: {
    partTime: 'Part-time or freelance: available immediately, no notice period.',
    fullTime: 'Full-time: 15 to 30 days notice.',
  },
  rates:
    'Rates depend on the work, the timeline and the responsibilities. He discusses them on a call, so never quote a number.',
  contact: {
    email: 'zia.rehman.web@gmail.com',
    calendly: 'https://calendly.com/zia-rehman-web/30min',
    linkedin: 'https://www.linkedin.com/in/zia1/',
    github: 'https://github.com/Zia-Ur-Rehman1',
  },
};
