"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contentBlockerRoutes = express_1.Router();
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
contentBlockerRoutes.get('/instagram/timeline-blocker', (_req, res) => {
    res.json({
        ok: true,
        platform: 'ios',
        target: 'instagram',
        description: 'Content blocker configuration to hide the Instagram timeline feed on iOS.',
        rules: instagramTimelineRules
    });
});
exports.default = contentBlockerRoutes;
