import { motion } from "framer-motion";
import { Check, Loader2, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ALTERNATIVE_TAGS, copy, siteConfig } from "@/config";
import { alternativeGroups } from "@/data/alternatives-grouped";

interface SuggestionFormData {
  establishedPlatform: string;
  alternativeName: string;
  url: string;
  description: string;
  tag: string;
  submitterEmail?: string;
}

export function SuggestAlternativeForm() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<SuggestionFormData>({
    establishedPlatform: "",
    alternativeName: "",
    url: "",
    description: "",
    tag: "",
    submitterEmail: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SuggestionFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof SuggestionFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof SuggestionFormData, string>> = {};

    if (!formData.establishedPlatform) {
      newErrors.establishedPlatform = copy.suggestForm.validation.establishedPlatform;
    }
    if (!formData.alternativeName.trim()) {
      newErrors.alternativeName = copy.suggestForm.validation.alternativeName;
    }
    if (!formData.url.trim()) {
      newErrors.url = copy.suggestForm.validation.url.required;
    } else if (!isValidUrl(formData.url)) {
      newErrors.url = copy.suggestForm.validation.url.invalid;
    }
    if (!formData.description.trim()) {
      newErrors.description = copy.suggestForm.validation.description;
    }
    if (!formData.tag) {
      newErrors.tag = copy.suggestForm.validation.category;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(siteConfig.api.submitSuggestion, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || copy.errors.submission);
      }

      setIsSuccess(true);

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setIsSuccess(false);
        setOpen(false);
        setFormData({
          establishedPlatform: "",
          alternativeName: "",
          url: "",
          description: "",
          tag: "",
          submitterEmail: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({
        description: error instanceof Error ? error.message : "Failed to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!isSubmitting) {
      setOpen(newOpen);
      if (!newOpen) {
        // Reset form when closing
        setErrors({});
        setIsSuccess(false);
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="flex w-full items-center justify-center gap-2 shadow-lg shadow-slate-200 transition-all hover:-translate-y-0.5 md:w-auto"
      >
        <Plus className="size-5" />
        {copy.suggestForm.buttonText}
      </Button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader onClose={() => handleOpenChange(false)}>
            <div>
              <DialogTitle>{copy.suggestForm.title}</DialogTitle>
              <DialogDescription>{copy.suggestForm.description}</DialogDescription>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {/* Established Platform */}
            <div className="space-y-2">
              <Label htmlFor="establishedPlatform">
                {copy.suggestForm.fields.establishedPlatform.label}
                <span className="text-red-500">{copy.suggestForm.validation.required}</span>
              </Label>
              <select
                id="establishedPlatform"
                name="establishedPlatform"
                value={formData.establishedPlatform}
                onChange={handleChange}
                className="flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              >
                <option value="">{copy.suggestForm.fields.establishedPlatform.placeholder}</option>
                {alternativeGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.original.name}
                  </option>
                ))}
              </select>
              {errors.establishedPlatform && (
                <p className="text-sm text-red-500">{errors.establishedPlatform}</p>
              )}
            </div>

            {/* Alternative Name */}
            <div className="space-y-2">
              <Label htmlFor="alternativeName">
                {copy.suggestForm.fields.alternativeName.label}
                <span className="text-red-500">{copy.suggestForm.validation.required}</span>
              </Label>
              <Input
                id="alternativeName"
                name="alternativeName"
                placeholder={copy.suggestForm.fields.alternativeName.placeholder}
                value={formData.alternativeName}
                onChange={handleChange}
              />
              {errors.alternativeName && (
                <p className="text-sm text-red-500">{errors.alternativeName}</p>
              )}
            </div>

            {/* URL */}
            <div className="space-y-2">
              <Label htmlFor="url">
                {copy.suggestForm.fields.url.label}
                <span className="text-red-500">{copy.suggestForm.validation.required}</span>
              </Label>
              <Input
                id="url"
                name="url"
                type="url"
                placeholder={copy.suggestForm.fields.url.placeholder}
                value={formData.url}
                onChange={handleChange}
              />
              {errors.url && <p className="text-sm text-red-500">{errors.url}</p>}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="tag">
                {copy.suggestForm.fields.category.label}
                <span className="text-red-500">{copy.suggestForm.validation.required}</span>
              </Label>
              <select
                id="tag"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                className="flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              >
                <option value="">{copy.suggestForm.fields.category.placeholder}</option>
                {Object.entries(ALTERNATIVE_TAGS).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.tag && <p className="text-sm text-red-500">{errors.tag}</p>}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">
                {copy.suggestForm.fields.description.label}
                <span className="text-red-500">{copy.suggestForm.validation.required}</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder={copy.suggestForm.fields.description.placeholder}
                value={formData.description}
                onChange={handleChange}
                className="min-h-[120px]"
              />
              {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </div>

            {/* Optional Email */}
            <div className="space-y-2">
              <Label htmlFor="submitterEmail">{copy.suggestForm.fields.email.label}</Label>
              <Input
                id="submitterEmail"
                name="submitterEmail"
                type="email"
                placeholder={copy.suggestForm.fields.email.placeholder}
                value={formData.submitterEmail}
                onChange={handleChange}
              />
              <p className="text-xs text-slate-500">{copy.suggestForm.fields.email.helpText}</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                disabled={isSubmitting}
              >
                {copy.suggestForm.buttons.cancel}
              </Button>
              <Button type="submit" disabled={isSubmitting || isSuccess} className="min-w-[140px]">
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                {isSuccess && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Check className="size-5" />
                  </motion.div>
                )}
                {!isSubmitting && !isSuccess && copy.suggestForm.buttons.submit}
                {isSubmitting && copy.suggestForm.buttons.submitting}
                {isSuccess && copy.suggestForm.buttons.submitted}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
