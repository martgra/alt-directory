# Submission Flow Documentation

## Overview

Users can now suggest alternatives to established platforms through a modal form. This creates a community-driven approach to discovering new platforms.

## User Experience

### 1. Triggering the Form

- A "Suggest Alternative" button appears in the section header
- Prominent placement with a plus icon
- Opens a modal dialog when clicked

### 2. Form Fields

**Required Fields:**

- **Established Platform** (dropdown) - Select from existing platforms
- **Alternative Name** - Name of the suggested platform
- **Website URL** - Must be a valid URL
- **Category** - Select from available tags (Federated, Privacy-Focused, etc.)
- **Description** - Why this is a good alternative

**Optional Fields:**

- **Email** - For follow-up questions (with privacy notice)

### 3. Validation

- Real-time error clearing as user types
- URL validation
- Required field checking
- User-friendly error messages

### 4. Submission States

**Idle:**

```
[Submit Suggestion]
```

**Submitting:**

```
[⏳ Submitting...]
```

**Success:**

```
[✓ Submitted!]
```

After success:

- Shows checkmark animation
- Auto-closes after 2 seconds
- Resets form for next submission

## Technical Implementation

### Frontend Components

```
src/features/suggestions/
├── components/
│   ├── suggest-alternative-form.tsx  # Main form component
│   └── index.ts                       # Exports
```

### Form Data Structure

```ts
interface SuggestionFormData {
  establishedPlatform: string; // ID of the platform
  alternativeName: string; // e.g., "Mastodon"
  url: string; // e.g., "https://joinmastodon.org"
  description: string; // Why it's a good alternative
  tag: string; // Category tag
  submitterEmail?: string; // Optional contact
}
```

## Backend Integration

### Current Implementation

The form currently simulates an API call and logs to console:

```ts
// Simulate API call
await new Promise((resolve) => setTimeout(resolve, 1500));
console.log("Suggestion submitted:", formData);
```

### Production Implementation

Replace the simulation with a real API call:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    setIsSuccess(true);

    // Reset and close
    setTimeout(() => {
      setIsSuccess(false);
      setOpen(false);
      resetForm();
    }, 2000);
  } catch (error) {
    // Handle error - show error message to user
    console.error("Submission error:", error);
    setErrors({
      description: "Failed to submit. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Backend API Endpoint

Example endpoint structure:

```ts
// POST /api/suggestions
{
  establishedPlatform: "twitter",
  alternativeName: "Mastodon",
  url: "https://joinmastodon.org",
  description: "Decentralized social network...",
  tag: "Federated",
  submitterEmail: "user@example.com"
}

// Response
{
  success: true,
  message: "Suggestion received. We'll review it shortly!",
  suggestionId: "abc123"
}
```

### Storage Options

**Simple:**

- Store in JSON file on disk
- Easy to review and manually approve

**Database:**

- PostgreSQL, MongoDB, etc.
- Track status: pending, approved, rejected
- Add moderation workflow

**Airtable/Google Sheets:**

- Quick setup with form builder
- Easy for non-technical team members to review
- Export submissions as spreadsheet

**Example Schema:**

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  established_platform VARCHAR(100) NOT NULL,
  alternative_name VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  tag VARCHAR(50) NOT NULL,
  submitter_email VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  reviewed_by VARCHAR(100)
);
```

## Moderation Workflow

### Suggested Process

1. **Submission** - User submits suggestion
2. **Review** - Admin reviews submission
3. **Approval** - Admin approves/rejects
4. **Integration** - Approved suggestions added to main data
5. **Notification** - (Optional) Email submitter about status

### Admin Dashboard Ideas

- List all pending suggestions
- Quick approve/reject buttons
- Edit fields before approving
- Bulk actions
- Search and filter

## Future Enhancements

### User-Facing

- **Preview** - Show how suggestion will look before submitting
- **Duplicate Detection** - Warn if alternative already exists
- **Vote System** - Let users upvote suggestions
- **Track Status** - Let users check status with submission ID

### Technical

- **Rate Limiting** - Prevent spam
- **CAPTCHA** - Anti-bot protection
- **Image Upload** - Let users suggest custom icons
- **Rich Text** - Better formatting for descriptions
- **Internationalization** - Multi-language support

## Analytics

Track these metrics:

- Submission volume (daily/weekly)
- Most suggested platforms
- Most common categories
- Approval rate
- Time to approval

## Security Considerations

- **Input Sanitization** - Prevent XSS attacks
- **Rate Limiting** - 5 submissions per IP per day
- **URL Validation** - Ensure URLs are safe
- **Email Validation** - Verify email format
- **Spam Detection** - Check for suspicious patterns
- **Content Moderation** - Review descriptions for inappropriate content

## Testing

Test cases to cover:

- ✓ All required fields validated
- ✓ URL validation works
- ✓ Form resets after submission
- ✓ Error messages display correctly
- ✓ Modal closes on backdrop click
- ✓ Can't submit while submitting
- ✓ Success animation plays
- ✓ Optional email field works

## Accessibility

The form includes:

- Proper label associations
- Keyboard navigation support
- Focus management in modal
- Required field indicators
- Error announcements
- Loading states
