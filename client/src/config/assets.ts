/**
 * Centralized Asset Configuration
 * 
 * This file manages all visual assets for the Digireg Kenya website.
 * Update these URLs to customize branding and imagery without touching component code.
 * 
 * PRODUCTION DEPLOYMENT:
 * Replace Unsplash URLs with local assets stored in client/public/images/
 * or imported from attached_assets/ using the @assets alias:
 * 
 * Example: import heroImage from '@assets/hero-background.jpg'
 * Then use: heroBackground: heroImage
 */

// Import generated service images with text overlays - featuring Black Kenyan professionals
import assetManagementImg from '@assets/generated_images/asset_management_systems_with_overlay_text.png';
import limsImg from '@assets/generated_images/lims_with_overlay_text.png';
import agriculturalImg from '@assets/generated_images/agricultural_management_with_text.png';
import ictAuditImg from '@assets/generated_images/ict_audits_with_overlay_text.png';
import zonalPlansImg from '@assets/generated_images/zonal_planning_with_text_overlay.png';
import urbanDesignImg from '@assets/generated_images/urban_design_with_text_overlay.png';
import aiGisImg from '@assets/generated_images/ai-gis_with_text_overlay.png';
import landSurveyImg from '@assets/generated_images/land_survey_with_text_overlay.png';
import trainingImg from '@assets/generated_images/training_with_text_overlay.png';
import gisAnalysisImg from '@assets/generated_images/gis_analysis_with_text_overlay.png';

export const siteAssets = {
  // Hero section background
  // Recommended: 2070x1380px (3:2), WebP or optimized JPEG
  // Should show geospatial/satellite imagery relevant to Digireg's work
  heroBackground: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop",
  
  // Use case project images
  // Recommended: 2074x1383px (3:2), WebP or optimized JPEG
  useCases: {
    countyPlanning: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
    landInformation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    digitalTwin: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
  },
  
  // Service section images
  services: {
    eGovernance: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    spatialPlanning: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    dataEngineering: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070&auto=format&fit=crop",
  },
  
  // E-Governance service details - featuring Black Kenyan professionals
  eGovernanceDetails: {
    assetManagement: assetManagementImg,
    lims: limsImg,
    agricultural: agriculturalImg,
    ictAudit: ictAuditImg,
  },
  
  // Spatial Planning service details
  spatialPlanningDetails: {
    zonalPlans: zonalPlansImg,
    urbanDesign: urbanDesignImg,
  },
  
  // Data Engineering service details
  dataEngineeringDetails: {
    aiGis: aiGisImg,
    gisAnalysis: gisAnalysisImg,
    landSurvey: landSurveyImg,
    training: trainingImg,
  },
  
  // About and team images
  about: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
} as const;

export type SiteAssets = typeof siteAssets;
