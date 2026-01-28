import { AlertCircle, CheckCircle2, ExternalLink, XCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlternativeDetails } from "@/types/AlternativeDetails";

interface AlternativeDetailsModalProps {
  details: AlternativeDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AlternativeDetailsModal({
  details,
  open,
  onOpenChange,
}: AlternativeDetailsModalProps) {
  if (!details) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader onClose={() => onOpenChange(false)}>
          <div>
            <DialogTitle>{details.name}</DialogTitle>
            <DialogDescription>{details.tagline}</DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-6 px-6 pb-6">
          {/* Overview */}
          <section>
            <p className="text-slate-600">{details.description}</p>
            <a
              href={details.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#2563eb] hover:underline"
            >
              Visit {details.name}
              <ExternalLink className="size-3" />
            </a>
          </section>

          {/* Ethics Score */}
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-3 font-semibold text-slate-800">Ethics Score</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <ScoreItem label="Privacy" score={details.ethics.privacy} />
              <ScoreItem label="Openness" score={details.ethics.openness} />
              <ScoreItem label="Sustainability" score={details.ethics.sustainability} />
              <ScoreItem label="User Rights" score={details.ethics.userRights} />
            </div>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">Overall Score</span>
                <span className="text-lg font-bold text-[#2563eb]">
                  {details.ethics.overall.toFixed(1)}/5
                </span>
              </div>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Privacy */}
            <InfoSection title="Privacy & Data">
              <InfoRow label="Data Collection" value={details.privacy.dataCollection} />
              <InfoRow label="Data Ownership" value={details.privacy.dataOwnership} />
              <InfoRow label="Encryption" value={details.privacy.encryption} />
              <InfoRow
                label="Third-party Sharing"
                value={details.privacy.thirdPartySharing ? "Yes" : "No"}
                variant={details.privacy.thirdPartySharing ? "negative" : "positive"}
              />
              <InfoRow
                label="GDPR Compliant"
                value={details.privacy.gdprCompliant ? "Yes" : "No"}
                variant={details.privacy.gdprCompliant ? "positive" : "negative"}
              />
            </InfoSection>

            {/* Business Model */}
            <InfoSection title="Business Model">
              <InfoRow label="Type" value={details.business.type} />
              <InfoRow label="Revenue" value={details.business.revenue} />
              <InfoRow
                label="Transparent"
                value={details.business.transparent ? "Yes" : "No"}
                variant={details.business.transparent ? "positive" : "negative"}
              />
              {details.business.funding && (
                <div className="text-sm">
                  <span className="font-medium text-slate-700">Funding:</span>
                  <ul className="ml-4 mt-1 list-disc text-slate-600">
                    {details.business.funding.map((funder) => (
                      <li key={funder}>{funder}</li>
                    ))}
                  </ul>
                </div>
              )}
            </InfoSection>

            {/* Technical */}
            <InfoSection title="Technical Details">
              <InfoRow
                label="Open Source"
                value={details.technical.openSource ? "Yes" : "No"}
                variant={details.technical.openSource ? "positive" : "negative"}
              />
              {details.technical.license && (
                <InfoRow label="License" value={details.technical.license} />
              )}
              <InfoRow
                label="Self-hostable"
                value={details.technical.selfHostable ? "Yes" : "No"}
                variant={details.technical.selfHostable ? "positive" : "neutral"}
              />
              <InfoRow label="Federation" value={details.technical.federation} />
              {details.technical.protocol && (
                <InfoRow label="Protocol" value={details.technical.protocol} />
              )}
            </InfoSection>

            {/* Maturity */}
            <InfoSection title="Maturity & Status">
              <InfoRow label="Status" value={details.maturity.status} />
              <InfoRow label="Founded" value={details.maturity.yearFounded.toString()} />
              {details.maturity.activeUsers && (
                <InfoRow label="Active Users" value={details.maturity.activeUsers} />
              )}
              <InfoRow
                label="Mobile Apps"
                value={
                  details.maturity.mobileApps.ios && details.maturity.mobileApps.android
                    ? "iOS & Android"
                    : details.maturity.mobileApps.ios
                      ? "iOS only"
                      : details.maturity.mobileApps.android
                        ? "Android only"
                        : "None"
                }
              />
            </InfoSection>
          </div>

          {/* Features */}
          <section>
            <h3 className="mb-3 font-semibold text-slate-800">Features</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <FeatureList title="Core Features" items={details.features.core} />
              <FeatureList
                title="Unique Features"
                items={details.features.unique}
                variant="positive"
              />
            </div>
          </section>

          {/* Pros & Cons */}
          <div className="grid gap-4 md:grid-cols-2">
            <ProConList title="Pros" items={details.pros} variant="positive" />
            <ProConList title="Cons" items={details.cons} variant="negative" />
          </div>

          {/* Best For */}
          <section>
            <h3 className="mb-3 font-semibold text-slate-800">Who is this for?</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-medium text-green-700">✓ Best for:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {details.bestFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium text-amber-700">⚠ Not recommended for:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {details.notRecommendedFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Migration */}
          <InfoSection title="Migration & Data">
            <InfoRow
              label="Import from original"
              value={details.migration.importFromOriginal ? "Yes" : "No"}
              variant={details.migration.importFromOriginal ? "positive" : "neutral"}
            />
            <InfoRow
              label="Export your data"
              value={details.migration.exportData ? "Yes" : "No"}
              variant={details.migration.exportData ? "positive" : "negative"}
            />
            {details.migration.migrationGuideUrl && (
              <a
                href={details.migration.migrationGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#2563eb] hover:underline"
              >
                View migration guide
                <ExternalLink className="size-3" />
              </a>
            )}
          </InfoSection>

          {/* Community Links */}
          {Object.keys(details.communityLinks).length > 0 && (
            <section>
              <h3 className="mb-3 font-semibold text-slate-800">Community & Support</h3>
              <div className="flex flex-wrap gap-2">
                {details.communityLinks.documentation && (
                  <LinkButton href={details.communityLinks.documentation} label="Documentation" />
                )}
                {details.communityLinks.support && (
                  <LinkButton href={details.communityLinks.support} label="Support" />
                )}
                {details.communityLinks.forum && (
                  <LinkButton href={details.communityLinks.forum} label="Forum" />
                )}
                {details.communityLinks.chat && (
                  <LinkButton href={details.communityLinks.chat} label="Chat" />
                )}
              </div>
            </section>
          )}

          {/* Last Reviewed */}
          <p className="text-xs text-slate-400">
            Last reviewed: {new Date(details.lastReviewed).toLocaleDateString()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Helper Components

function ScoreItem({ label, score }: { label: string; score: number }) {
  const color = score >= 4 ? "text-green-600" : score >= 3 ? "text-amber-600" : "text-red-600";

  return (
    <div className="flex flex-col">
      <span className="text-xs text-slate-600">{label}</span>
      <span className={`text-lg font-bold ${color}`}>{score}/5</span>
    </div>
  );
}

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  variant = "neutral",
}: {
  label: string;
  value: string;
  variant?: "positive" | "negative" | "neutral";
}) {
  const icon =
    variant === "positive" ? (
      <CheckCircle2 className="size-4 text-green-600" />
    ) : variant === "negative" ? (
      <XCircle className="size-4 text-red-600" />
    ) : null;

  return (
    <div className="flex items-start justify-between gap-2 text-sm">
      <span className="font-medium text-slate-700">{label}:</span>
      <span className="flex items-center gap-1 capitalize text-slate-600">
        {icon}
        {value}
      </span>
    </div>
  );
}

function FeatureList({
  title,
  items,
  variant = "neutral",
}: {
  title: string;
  items: string[];
  variant?: "positive" | "neutral";
}) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-slate-700">{title}</h4>
      <ul className="space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            {variant === "positive" && (
              <CheckCircle2 className="mt-0.5 size-4 flex-shrink-0 text-green-600" />
            )}
            <span>• {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProConList({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "positive" | "negative";
}) {
  const icon =
    variant === "positive" ? (
      <CheckCircle2 className="size-4 text-green-600" />
    ) : (
      <AlertCircle className="size-4 text-amber-600" />
    );

  return (
    <div>
      <h3 className="mb-3 font-semibold text-slate-800">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0">{icon}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
    >
      {label}
      <ExternalLink className="size-3" />
    </a>
  );
}
