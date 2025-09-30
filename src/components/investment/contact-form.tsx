"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentRange: "",
    investorType: "",
    message: "",
    newsletter: false,
    confidentiality: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.confidentiality) {
      alert("Please accept the confidentiality agreement to proceed.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="glass-card animate-fade-in hover-glow max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">Thank You for Your Interest</h3>
          <p className="text-muted-foreground mb-4">
            We've received your inquiry and will be in touch within 24-48 hours with detailed investment information and next steps.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Investment deck and financial projections</p>
            <p>• Technical due diligence materials</p>
            <p>• Partnership and collaboration opportunities</p>
            <p>• Virtual meeting scheduling</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card animate-fade-in hover-glow max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Investor Inquiry Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="investmentRange">Investment Range</Label>
              <Select value={formData.investmentRange} onValueChange={(value) => handleInputChange("investmentRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                  <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                  <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investorType">Investor Type</Label>
            <Select value={formData.investorType} onValueChange={(value) => handleInputChange("investorType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select investor type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="angel">Angel Investor</SelectItem>
                <SelectItem value="vc">Venture Capital</SelectItem>
                <SelectItem value="corporate">Corporate Investor</SelectItem>
                <SelectItem value="family-office">Family Office</SelectItem>
                <SelectItem value="private-equity">Private Equity</SelectItem>
                <SelectItem value="strategic">Strategic Partner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message / Specific Interests</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your investment interests, questions about the technology, or any specific areas you'd like to discuss..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to Oracle850B-MoE development updates
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="confidentiality"
                checked={formData.confidentiality}
                onCheckedChange={(checked) => handleInputChange("confidentiality", !!checked)}
                required
              />
              <Label htmlFor="confidentiality" className="text-sm">
                I agree to maintain confidentiality of shared materials *
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || !formData.confidentiality}
          >
            {isSubmitting ? "Submitting..." : "Submit Investment Inquiry"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted/20 rounded-lg">
          <h5 className="font-semibold mb-2">What Happens Next?</h5>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>1. We'll send you our detailed investment deck and financial projections</p>
            <p>2. Schedule a technical deep-dive call with our founding team</p>
            <p>3. Provide access to due diligence materials and technical documentation</p>
            <p>4. Discuss partnership opportunities and strategic alignment</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
