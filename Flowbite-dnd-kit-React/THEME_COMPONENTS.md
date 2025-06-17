# Standardized Theme Components

This document outlines all available theme components for consistent text styling across the application.

## Component Categories

### 1. Layout Components

**ShowcaseCard** - Dark background wrapper for showcase sections
```tsx
<ShowcaseCard>
  {/* content */}
</ShowcaseCard>
```

**ShowcaseThemeProvider** - Theme context provider
```tsx
<ShowcaseThemeProvider>
  {/* app content */}
</ShowcaseThemeProvider>
```

### 2. Heading Components

**ShowcasePageTitle** - Main page titles (4xl, white)
```tsx
<ShowcasePageTitle>Production Orders</ShowcasePageTitle>
```

**ShowcaseTitle** - Section titles in showcases (4xl, white, large margin)
```tsx
<ShowcaseTitle>Flowbite Components</ShowcaseTitle>
```

**ShowcaseHeading** - Section headings (3xl, white)
```tsx
<ShowcaseHeading>Rating Components</ShowcaseHeading>
```

**ShowcaseSubheading** - Subsection headings (2xl, white)
```tsx
<ShowcaseSubheading>Default Pagination</ShowcaseSubheading>
```

**ShowcaseSubsection** - Component subsections (xl, white)
```tsx
<ShowcaseSubsection>Interactive Rating</ShowcaseSubsection>
```

**ShowcaseSectionHeader** - Small section headers (lg, white)
```tsx
<ShowcaseSectionHeader>Machine Status</ShowcaseSectionHeader>
```

**ShowcaseItemTitle** - Card/item titles (base, white)
```tsx
<ShowcaseItemTitle>Order Details</ShowcaseItemTitle>
```

**ShowcaseLabel** - Small labels/titles (sm, white)
```tsx
<ShowcaseLabel>Status</ShowcaseLabel>
```

### 3. Text Content Components

**ShowcaseDescription** - Large descriptive text (lg, gray-300)
```tsx
<ShowcaseDescription>
  Navigate through multiple pages of content with pagination controls.
</ShowcaseDescription>
```

**ShowcaseText** - Regular paragraph text (base, gray-300)
```tsx
<ShowcaseText>
  Manage and track production orders through their lifecycle.
</ShowcaseText>
```

**ShowcaseSmallText** - Small descriptive text (sm, gray-400)
```tsx
<ShowcaseSmallText>Last updated 5 minutes ago</ShowcaseSmallText>
```

**ShowcaseCaptionText** - Extra small captions/notes (xs, gray-500)
```tsx
<ShowcaseCaptionText>Machine ID: CNC-001</ShowcaseCaptionText>
```

### 4. Specialized Components

**ShowcaseMetricValue** - Large metric numbers (2xl, white)
```tsx
<ShowcaseMetricValue>{orderStats.total}</ShowcaseMetricValue>
<ShowcaseMetricValue className="text-green-600">{completed}</ShowcaseMetricValue>
```

**ShowcaseMetricLabel** - Metric descriptions (sm, gray-400)
```tsx
<ShowcaseMetricLabel>Total Orders</ShowcaseMetricLabel>
```

**ShowcaseFormLabel** - Form field labels (sm, gray-300)
```tsx
<ShowcaseFormLabel>Customer Name</ShowcaseFormLabel>
```

### 5. Status Text Components

**ShowcaseSuccessText** - Success messages (sm, green-400)
```tsx
<ShowcaseSuccessText>Order completed successfully</ShowcaseSuccessText>
```

**ShowcaseWarningText** - Warning messages (sm, yellow-400)
```tsx
<ShowcaseWarningText>Machine maintenance required</ShowcaseWarningText>
```

**ShowcaseErrorText** - Error messages (sm, red-400)
```tsx
<ShowcaseErrorText>Failed to process order</ShowcaseErrorText>
```

**ShowcaseInfoText** - Information messages (sm, blue-400)
```tsx
<ShowcaseInfoText>Scheduled for tomorrow</ShowcaseInfoText>
```

**ShowcaseMutedText** - Secondary/muted text (gray-500)
```tsx
<ShowcaseMutedText>Optional field</ShowcaseMutedText>
```

### 6. Colored Status Components

**ShowcaseGreenText** - Success/available/active status (green-400, medium weight)
```tsx
<ShowcaseGreenText>Available</ShowcaseGreenText>
```

**ShowcaseYellowText** - Warning/pending status (yellow-400, medium weight)
```tsx
<ShowcaseYellowText>Pending</ShowcaseYellowText>
```

**ShowcaseRedText** - Error/inactive/critical status (red-400, medium weight)
```tsx
<ShowcaseRedText>Critical</ShowcaseRedText>
```

**ShowcaseBlueText** - Info/scheduled status (blue-400, medium weight)
```tsx
<ShowcaseBlueText>Scheduled</ShowcaseBlueText>
```

### 7. Interactive Components

**ShowcaseLinkText** - Link styling (blue-400, hover:blue-300, underlined)
```tsx
<ShowcaseLinkText href="/orders">View Orders</ShowcaseLinkText>
```

**ShowcaseButtonText** - Button text styling (sm, medium weight)
```tsx
<ShowcaseButtonText>Create Order</ShowcaseButtonText>
```

## Usage Guidelines

### 1. Import Pattern
```tsx
import { 
  ShowcasePageTitle, 
  ShowcaseText, 
  ShowcaseMetricValue,
  // ... other components
} from '../components'
```

### 2. Consistency Rules

- **Always use theme components** instead of inline Tailwind classes for text
- **Use semantic naming** - choose components based on purpose, not appearance
- **Maintain hierarchy** - use appropriate heading levels
- **Color override when needed** - use className prop for specific colors

### 3. Common Patterns

**Page Header:**
```tsx
<ShowcasePageTitle>Page Name</ShowcasePageTitle>
<ShowcaseText>Page description</ShowcaseText>
```

**Metric Cards:**
```tsx
<ShowcaseMetricValue className="text-green-600">{value}</ShowcaseMetricValue>
<ShowcaseMetricLabel>Label</ShowcaseMetricLabel>
```

**Status Indicators:**
```tsx
{status === 'success' && <ShowcaseGreenText>Active</ShowcaseGreenText>}
{status === 'warning' && <ShowcaseYellowText>Pending</ShowcaseYellowText>}
{status === 'error' && <ShowcaseRedText>Failed</ShowcaseRedText>}
```

## Migration Checklist

When updating existing pages:

1. ✅ Replace `<h1-h6>` elements with appropriate ShowcaseHeading components
2. ✅ Replace `<p>` elements with ShowcaseText/ShowcaseDescription
3. ✅ Replace metric displays with ShowcaseMetricValue/ShowcaseMetricLabel
4. ✅ Replace status text with colored status components
5. ✅ Replace form labels with ShowcaseFormLabel
6. ✅ Update links to use ShowcaseLinkText or consistent link styling
7. ✅ Remove all `text-gray-900`, `text-gray-800`, `text-black` classes
8. ✅ Test dark theme compatibility

## Benefits

- **Consistent appearance** across the entire application
- **Better dark theme support** with proper contrast
- **Easier maintenance** - change themes globally
- **Better accessibility** with consistent text hierarchies
- **Cleaner code** with semantic component names
