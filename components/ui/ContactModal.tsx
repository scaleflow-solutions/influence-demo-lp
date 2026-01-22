"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/lib/contact-modal-context";

const services = [
  "Public Relations",
  "Influencer Marketing",
  "Event Management",
  "Digital Marketing",
  "Brand Strategy",
  "Crisis Communications",
  "Content Creation",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

// Hoisted SVG icons to prevent re-creation on every render
const CloseIcon = (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const CheckmarkIcon = (
  <svg
    className="w-10 h-10 text-influence-red"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const LoadingSpinner = (
  <svg
    className="animate-spin h-5 w-5"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Memoized Step 1 form fields to prevent re-renders on every keystroke
const Step1Fields = memo(({
  formData,
  onChange
}: {
  formData: { name: string; email: string; company: string; phone: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Full Name <span className="text-influence-red">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300"
        placeholder="John Doe"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Email Address <span className="text-influence-red">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300"
        placeholder="john@company.com"
      />
    </div>

    {/* Company */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Company / Organization <span className="text-influence-red">*</span>
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300"
        placeholder="Acme Inc."
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Phone Number <span className="text-influence-red">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300"
        placeholder="+1 (555) 000-0000"
      />
    </div>
  </>
));

Step1Fields.displayName = "Step1Fields";

// Memoized Step 2 form fields
const Step2Fields = memo(({
  formData,
  onChange,
  onServiceToggle
}: {
  formData: {
    services: string[];
    budget: string;
    timeline: string;
    message: string;
    referral: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onServiceToggle: (service: string) => void;
}) => (
  <>
    {/* Services */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-3">
        Services Interested In <span className="text-white/40">(Optional)</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <button
            key={service}
            type="button"
            onClick={() => onServiceToggle(service)}
            className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
              formData.services.includes(service)
                ? "bg-influence-red border-influence-red text-white"
                : "bg-transparent border-dark-border text-white/60 hover:border-influence-red/50 hover:text-white"
            }`}
          >
            {service}
          </button>
        ))}
      </div>
    </div>

    {/* Budget */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Budget Range <span className="text-white/40">(Optional)</span>
      </label>
      <select
        name="budget"
        value={formData.budget}
        onChange={onChange}
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300 appearance-none cursor-pointer"
      >
        <option value="" className="bg-dark">
          Select a range
        </option>
        {budgetRanges.map((range) => (
          <option key={range} value={range} className="bg-dark">
            {range}
          </option>
        ))}
      </select>
    </div>

    {/* Timeline */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Project Timeline <span className="text-white/40">(Optional)</span>
      </label>
      <select
        name="timeline"
        value={formData.timeline}
        onChange={onChange}
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300 appearance-none cursor-pointer"
      >
        <option value="" className="bg-dark">
          Select timeline
        </option>
        {timelines.map((timeline) => (
          <option key={timeline} value={timeline} className="bg-dark">
            {timeline}
          </option>
        ))}
      </select>
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        Tell Us About Your Project <span className="text-white/40">(Optional)</span>
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300 resize-none"
        placeholder="Share details about your goals, challenges, or any specific requirements..."
      />
    </div>

    {/* Referral */}
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        How Did You Hear About Us? <span className="text-white/40">(Optional)</span>
      </label>
      <input
        type="text"
        name="referral"
        value={formData.referral}
        onChange={onChange}
        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-influence-red/50 focus:ring-1 focus:ring-influence-red/50 transition-all duration-300"
        placeholder="Google, LinkedIn, Referral, etc."
      />
    </div>
  </>
));

Step2Fields.displayName = "Step2Fields";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Required fields
    name: "",
    email: "",
    company: "",
    phone: "",
    // Optional fields
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
    referral: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      closeModal();
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        services: [],
        budget: "",
        timeline: "",
        message: "",
        referral: "",
      });
    }, 3000);
  };

  const isStep1Valid =
    formData.name && formData.email && formData.company && formData.phone;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-[100]"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-dark-lighter border border-dark-border rounded-2xl overflow-hidden z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-dark-border">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {isSubmitted ? "Thank You!" : "Let's Work Together"}
                </h2>
                {!isSubmitted && (
                  <p className="text-sm text-white/50 mt-1">
                    Step {step} of 2 -{" "}
                    {step === 1 ? "Your Details" : "Project Info"}
                  </p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark hover:bg-influence-red/20 text-white/60 hover:text-white transition-all duration-300"
              >
                {CloseIcon}
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-influence-red/20 flex items-center justify-center">
                    {CheckmarkIcon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    We&apos;ve received your inquiry and will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <Step1Fields
                          formData={{
                            name: formData.name,
                            email: formData.email,
                            company: formData.company,
                            phone: formData.phone,
                          }}
                          onChange={handleInputChange}
                        />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <Step2Fields
                          formData={{
                            services: formData.services,
                            budget: formData.budget,
                            timeline: formData.timeline,
                            message: formData.message,
                            referral: formData.referral,
                          }}
                          onChange={handleInputChange}
                          onServiceToggle={handleServiceToggle}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>

            {/* Footer */}
            {!isSubmitted && (
              <div className="px-6 py-5 border-t border-dark-border flex items-center justify-between gap-4">
                {step === 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 text-white/60 hover:text-white font-medium transition-colors duration-300"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid}
                    className="px-8 py-3 bg-influence-red hover:bg-influence-red-light disabled:bg-white/10 disabled:cursor-not-allowed text-white font-semibold rounded-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <span>→</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-influence-red hover:bg-influence-red-light disabled:bg-influence-red/50 text-white font-semibold rounded-sm transition-all duration-300 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        {LoadingSpinner}
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
