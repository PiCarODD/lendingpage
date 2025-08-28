import { track } from '@vercel/analytics';

/**
 * Vercel Analytics utility functions for tracking user interactions
 */

/**
 * Track form submission events
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  track('form_submission', {
    form_name: formName,
    ...formData
  });
};

/**
 * Track pricing plan selection
 */
export const trackPlanSelection = (planName: string, planPrice: string) => {
  track('plan_selection', {
    plan_name: planName,
    plan_price: planPrice
  });
};

/**
 * Track contact method clicks
 */
export const trackContactMethod = (method: 'email' | 'phone' | 'location') => {
  track('contact_method_click', {
    method
  });
};

/**
 * Track page section views
 */
export const trackSectionView = (sectionName: string) => {
  track('section_view', {
    section: sectionName
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  track('button_click', {
    button_name: buttonName,
    location: buttonLocation
  });
};

/**
 * Track pricing plan hover/interaction
 */
export const trackPricingInteraction = (planName: string, interactionType: 'hover' | 'click' | 'view') => {
  track('pricing_interaction', {
    plan_name: planName,
    interaction_type: interactionType
  });
};
