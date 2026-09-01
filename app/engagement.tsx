'use client';

import { useEffect, useState } from 'react';

const API_ROOT = 'https://abacus.jasoncameron.dev';
const COUNTER_NAMESPACE = 'jhengxu-github-io';
const VIEW_SESSION_KEY = 'jianhua-home-view-recorded-v2';
const LIKE_STORAGE_KEY = 'jianhua-home-liked-v2';

type CounterResponse = {
  value?: number;
};

function LocalizedLabel({ zh, en }: { zh: string; en: string }) {
  return (
    <>
      <span className="langZh">{zh}</span>
      <span className="langEn">{en}</span>
    </>
  );
}

async function readCounter(action: 'view' | 'like', increment: boolean) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 7000);
  const operation = increment ? 'hit' : 'get';
  const key = action === 'view' ? 'homepage-views' : 'homepage-likes';

  try {
    const response = await fetch(`${API_ROOT}/${operation}/${COUNTER_NAMESPACE}/${key}`, {
      cache: 'no-store',
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
    const data = (await response.json()) as CounterResponse;
    return typeof data.value === 'number' ? data.value : null;
  } finally {
    window.clearTimeout(timeout);
  }
}

function formatCount(value: number | null) {
  return value === null ? '—' : new Intl.NumberFormat().format(value);
}

export default function Engagement() {
  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hasViewed = window.sessionStorage.getItem(VIEW_SESSION_KEY) === 'true';
      const hasLiked = window.localStorage.getItem(LIKE_STORAGE_KEY) === 'true';

      setLiked(hasLiked);
      if (!hasViewed) window.sessionStorage.setItem(VIEW_SESSION_KEY, 'true');

      void readCounter('view', !hasViewed)
        .then(setViews)
        .catch(() => setViews(null));
      void readCounter('like', false)
        .then(setLikes)
        .catch(() => setLikes(null));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleLike = async () => {
    if (liked || submitting) return;
    setSubmitting(true);

    try {
      const nextLikes = await readCounter('like', true);
      if (nextLikes === null) throw new Error('Invalid like count');
      window.localStorage.setItem(LIKE_STORAGE_KEY, 'true');
      setLikes(nextLikes);
      setLiked(true);
    } catch {
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
  };

  return (
    <div className="engagementPanel" role="group" aria-label="页面互动数据 / Page engagement">
      <div className="engagementStat" title="匿名统计的页面访问次数 / Anonymous page views">
        <span className="engagementIcon" aria-hidden="true">◉</span>
        <span className="engagementValue">{formatCount(views)}</span>
        <span className="engagementLabel">
          <LocalizedLabel zh="次浏览" en="views" />
        </span>
      </div>
      <span className="engagementDivider" aria-hidden="true" />
      <button
        className={`likeButton${liked ? ' isLiked' : ''}`}
        type="button"
        onClick={handleLike}
        disabled={liked || submitting}
        aria-pressed={liked}
        aria-label={liked ? '已点赞 / Liked' : '为主页点赞 / Like this homepage'}
      >
        <span className="engagementIcon heartIcon" aria-hidden="true">♥</span>
        <span className="engagementValue">{formatCount(likes)}</span>
        <span className="engagementLabel">
          <LocalizedLabel zh={liked ? '已点赞' : '点赞'} en={liked ? 'liked' : 'like'} />
        </span>
      </button>
      <span className="engagementPrivacy">
        <LocalizedLabel zh="匿名统计" en="anonymous counts" />
      </span>
    </div>
  );
}
