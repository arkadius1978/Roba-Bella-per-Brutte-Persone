
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Roba bella per brutte persone | Merch Ufficiale", 
  description = "Ironia graffiante, conigli dittatori e pecore che mangiano mollette. Tutto il disagio che cercavi, ora stampato su cotone.",
  image = "https://m.media-amazon.com/images/I/61PVA-QZTuL.jpg",
  url,
  type = "website"
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to update or create meta tags
    const updateMeta = (attributeName: string, attributeValue: string, content: string) => {
        let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
        
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attributeName, attributeValue);
            document.head.appendChild(element);
        }
        
        element.setAttribute('content', content);
    };

    // 3. Helper to remove tags (Crucial for conflicting dimensions)
    const removeMeta = (attributeName: string, attributeValue: string) => {
        const element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
        if (element) {
            element.remove();
        }
    };

    // 4. Update Standard Tags
    updateMeta('name', 'description', description);

    // 5. Update Open Graph (Facebook/WhatsApp)
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:image', image);
    updateMeta('property', 'og:type', type);
    
    // IMPORTANT: Remove specific width/height tags when changing pages.
    // If the default image has dimensions set in index.html, but the new blog post image
    // has different dimensions, WhatsApp often rejects the new image due to mismatch.
    removeMeta('property', 'og:image:width');
    removeMeta('property', 'og:image:height');
    
    const currentUrl = url || window.location.href;
    updateMeta('property', 'og:url', currentUrl);
    
    // 6. Update Twitter Cards
    updateMeta('name', 'twitter:card', 'summary_large_image'); // Always force large image for blogs
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', image);

  }, [title, description, image, url, type]);

  return null;
};
