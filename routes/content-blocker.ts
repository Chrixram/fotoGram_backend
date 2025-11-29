import { Router, Response } from 'express';

const contentBlockerRoutes = Router();

// Simple Safari content blocker definition to hide the Instagram timeline/feed
const instagramTimelineRules = [
  {
    action: {
      type: 'css-display-none',
      selector: 'main section div[role="feed"], main section article'
    },
    trigger: {
      'url-filter': '^https?:\\/\\/(?:www\\.)?instagram\\.com\\/.*',
      'if-domain': ['www.instagram.com', 'instagram.com']
    }
  },
  {
    action: {
      type: 'css-display-none',
      selector: 'main[role="main"] header, main[role="main"] nav'
    },
    trigger: {
      'url-filter': '^https?:\\/\\/(?:www\\.)?instagram\\.com\\/.*',
      'if-domain': ['www.instagram.com', 'instagram.com']
    }
  }
];

contentBlockerRoutes.get('/instagram/timeline-blocker', (_req: import('express').Request, res: Response) => {
  res.json({
    ok: true,
    platform: 'ios',
    target: 'instagram',
    description: 'Content blocker configuration to hide the Instagram timeline feed on iOS.',
    rules: instagramTimelineRules
  });
});

export default contentBlockerRoutes;
