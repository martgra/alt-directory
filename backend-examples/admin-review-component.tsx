// Example Admin Review Component
// This would be a separate admin dashboard page

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Suggestion {
  id: string;
  establishedPlatform: string;
  alternativeName: string;
  url: string;
  description: string;
  tag: string;
  submitterEmail?: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

export function AdminSuggestionsReview() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSuggestions();
  }, [filter]);

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/suggestions?status=${filter}`);
      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async (id: string, action: "approve" | "reject") => {
    try {
      await fetch(`/api/admin/suggestions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: action === "approve" ? "approved" : "rejected" }),
      });

      // Refresh list
      fetchSuggestions();
    } catch (error) {
      console.error("Failed to update suggestion:", error);
    }
  };

  const handleAddToSite = async (suggestion: Suggestion) => {
    // This would add the approved suggestion to alternatives-grouped.ts
    // You could implement this as a copy-to-clipboard feature or auto-generation
    const code = `
{
  name: '${suggestion.alternativeName}',
  url: '${suggestion.url}',
  tag: ALTERNATIVE_TAGS.${suggestion.tag.toUpperCase().replace(/[^A-Z]/g, "_")},
  icon: 'help', // TODO: Choose appropriate icon
  bgColor: 'bg-slate-800', // TODO: Choose color
}`;

    await navigator.clipboard.writeText(code);
    alert("Code copied to clipboard! Add it to alternatives-grouped.ts");
  };

  if (loading) {
    return <div className="p-8 text-center">Loading suggestions...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Review Suggestions</h1>
        <p className="mt-2 text-slate-600">
          Review and approve user-submitted alternative platforms
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          variant={filter === "approved" ? "default" : "outline"}
          onClick={() => setFilter("approved")}
        >
          Approved
        </Button>
        <Button
          variant={filter === "rejected" ? "default" : "outline"}
          onClick={() => setFilter("rejected")}
        >
          Rejected
        </Button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.length === 0 ? (
          <Card className="p-8 text-center text-slate-500">
            No {filter !== "all" ? filter : ""} suggestions found
          </Card>
        ) : (
          suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{suggestion.alternativeName}</h3>
                    <Badge
                      variant={
                        suggestion.status === "approved"
                          ? "default"
                          : suggestion.status === "rejected"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {suggestion.status}
                    </Badge>
                    <Badge variant="outline">{suggestion.tag}</Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">Alternative to:</span>{" "}
                      <span className="text-slate-600">{suggestion.establishedPlatform}</span>
                    </div>

                    <div>
                      <span className="font-medium text-slate-700">URL:</span>{" "}
                      <a
                        href={suggestion.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {suggestion.url}
                      </a>
                    </div>

                    <div>
                      <span className="font-medium text-slate-700">Description:</span>
                      <p className="mt-1 text-slate-600">{suggestion.description}</p>
                    </div>

                    {suggestion.submitterEmail && (
                      <div>
                        <span className="font-medium text-slate-700">Contact:</span>{" "}
                        <span className="text-slate-600">{suggestion.submitterEmail}</span>
                      </div>
                    )}

                    <div className="text-xs text-slate-500">
                      Submitted on {new Date(suggestion.submittedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {suggestion.status === "pending" && (
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => handleReview(suggestion.id, "approve")}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleReview(suggestion.id, "reject")}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:bg-red-50"
                    >
                      Reject
                    </Button>
                  </div>
                )}

                {suggestion.status === "approved" && (
                  <Button onClick={() => handleAddToSite(suggestion)} size="sm" variant="outline">
                    Copy Code
                  </Button>
                )}
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">
            {suggestions.filter((s) => s.status === "pending").length}
          </div>
          <div className="text-sm text-slate-600">Pending</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {suggestions.filter((s) => s.status === "approved").length}
          </div>
          <div className="text-sm text-slate-600">Approved</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-red-600">
            {suggestions.filter((s) => s.status === "rejected").length}
          </div>
          <div className="text-sm text-slate-600">Rejected</div>
        </Card>
      </div>
    </div>
  );
}

// ============================================================================
// Backend API endpoint for admin
// ============================================================================

// GET /api/admin/suggestions?status=pending
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "all";

  // TODO: Add authentication check
  // if (!isAdmin(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  let query = "SELECT * FROM suggestions";
  const params: string[] = [];

  if (status !== "all") {
    query += " WHERE status = $1";
    params.push(status);
  }

  query += " ORDER BY created_at DESC";

  const result = await pool.query(query, params);

  return Response.json({
    suggestions: result.rows,
  });
}

// PATCH /api/admin/suggestions/:id
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { status } = await req.json();

  // TODO: Add authentication check
  // if (!isAdmin(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  await pool.query("UPDATE suggestions SET status = $1, reviewed_at = NOW() WHERE id = $2", [
    status,
    params.id,
  ]);

  // Optional: Send email to submitter
  // if (submitterEmail) await notifySubmitter(params.id, status);

  return Response.json({ success: true });
}
