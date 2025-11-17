# Structured Data Troubleshooting Guide

## Common Structured Data Errors and Solutions

### 1. Missing Required Properties

**Error**: "The property [property-name] is required"
**Solution**: 
- Identify the missing property in the error message
- Add the required property to your JSON-LD markup
- Ensure the property value is correctly formatted

**Example Fix for TouristTrip**:
```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "K2 Base Camp Trek",
  "description": "22-day trek to the base of the world's second highest peak",
  "url": "https://www.mazenoadventures.com/trek/k2-base-camp-trek",
  // Add missing required property
  "touristType": "AdventureSeeker"
}
```

### 2. Invalid Property Values

**Error**: "The property [property-name] has an invalid value"
**Solution**:
- Check the Schema.org documentation for the correct value format
- Ensure values match the expected data type (text, URL, number, etc.)
- Use ISO standards for dates and durations

**Example Fix for Duration**:
```json
// Incorrect
"duration": "21 days"

// Correct
"duration": "P21D"
```

### 3. Missing Context Declaration

**Error**: "Missing @context declaration"
**Solution**:
- Always include the @context property at the beginning of your JSON-LD
- Ensure the value is exactly "https://schema.org"

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "K2 Base Camp Trek"
}
```

### 4. Incorrect Nesting

**Error**: "Property [property-name] is incorrectly nested"
**Solution**:
- Check the Schema.org hierarchy for proper nesting
- Ensure child properties are properly enclosed in objects

**Example Fix for Offers**:
```json
// Incorrect
"price": "4500",
"priceCurrency": "USD"

// Correct
"offers": {
  "@type": "Offer",
  "price": "4500",
  "priceCurrency": "USD"
}
```

### 5. Invalid URL Format

**Error**: "Invalid URL format for property [property-name]"
**Solution**:
- Ensure URLs include the protocol (http:// or https://)
- Check for typos in domain names
- Verify URLs are properly encoded

```json
// Incorrect
"url": "www.mazenoadventures.com/trek/k2-base-camp-trek"

// Correct
"url": "https://www.mazenoadventures.com/trek/k2-base-camp-trek"
```

### 6. Date Format Issues

**Error**: "Invalid date format"
**Solution**:
- Use ISO 8601 format for dates (YYYY-MM-DD)
- For durations, use ISO 8601 duration format

```json
// For specific dates
"validFrom": "2024-06-01"

// For durations
"duration": "P21D"  // 21 days
```

## Testing Tools

### 1. Google Rich Results Test
- URL: https://search.google.com/test/rich-results
- Use to test individual pages for rich result eligibility
- Provides specific error messages and fixes

### 2. Schema Markup Validator
- URL: https://validator.schema.org/
- Validates JSON-LD syntax and structure
- Checks against Schema.org vocabulary

### 3. Google Search Console
- Navigate to "Enhancements" > "Rich Results Report"
- Shows structured data issues detected on your site
- Provides detailed error information and affected pages

## Best Practices for Implementation

### 1. Use JSON-LD Format
- JSON-LD is Google's preferred structured data format
- Easier to implement and maintain than microdata
- Less likely to break when HTML changes

### 2. Place Structured Data in Head
- Include JSON-LD in the `<head>` section of your HTML
- Ensure it's not blocked by robots.txt
- Validate that it appears in page source

### 3. Test Before Deployment
- Always test structured data with validation tools
- Check both syntax and semantic correctness
- Verify that data appears correctly in search results

### 4. Keep Data Updated
- Update structured data when page content changes
- Ensure prices, availability, and dates are current
- Remove structured data for pages that no longer exist

## Common Schema Types for Adventure Tourism

### TouristTrip
Used for trekking and expedition pages:
```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "[Trip Name]",
  "description": "[Trip Description]",
  "url": "[Page URL]",
  "image": "[Image URL]",
  "touristType": "AdventureSeeker",
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "USD"
  },
  "duration": "[ISO Duration]"
}
```

### Place
Used for destination pages:
```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "[Destination Name]",
  "description": "[Destination Description]",
  "url": "[Page URL]",
  "image": "[Image URL]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK"
  }
}
```

### LocalBusiness
Used for company information:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mazano Adventures",
  "image": "[Logo URL]",
  "telephone": "+92 345 9160113",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Post Office Tarnishing",
    "addressLocality": "Astore",
    "addressRegion": "Gilgit-Baltistan",
    "addressCountry": "PK"
  }
}
```

## Debugging Checklist

Before deploying structured data, verify:

- [ ] JSON syntax is valid
- [ ] @context is correctly specified
- [ ] @type matches intended schema
- [ ] All required properties are included
- [ ] Property values are correctly formatted
- [ ] URLs are complete and valid
- [ ] Dates follow ISO standards
- [ ] Structured data is placed in head section
- [ ] No conflicting markup exists
- [ ] Tested with validation tools
- [ ] Appears correctly in page source

## When to Seek Help

Contact a technical SEO specialist if:

1. Errors persist after multiple validation attempts
2. Rich results are not appearing in search
3. Complex nested structures are required
4. Integration with CMS presents challenges
5. Large-scale implementation is needed

Regular monitoring and maintenance of structured data will ensure your adventure tourism website continues to benefit from enhanced search visibility and rich results.