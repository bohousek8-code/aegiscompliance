import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: PricingFeature[];
  recommended?: boolean;
  cta: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}