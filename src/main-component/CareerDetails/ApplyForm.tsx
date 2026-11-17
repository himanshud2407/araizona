"use client";
import React, { useState } from "react";
import { JobOpening } from "@/api/career";

interface ApplyFormProps {
  job: JobOpening;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ job }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    portfolioUrl: "",
    message: "",
    answers: {} as Record<string, string>,
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
    if (errors[questionId]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[questionId];
        return copy;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Validate file size (15MB)
      if (file.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File size exceeds 15 MB limit.",
        }));
        setResumeFile(null);
        return;
      }
      setResumeFile(file);
      if (errors.file) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy.file;
          return copy;
        });
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Full name is required (min 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = "Valid phone number is required (min 8 digits).";
    }

    if (!formData.address.trim() || formData.address.trim().length < 2) {
      newErrors.address = "Current location / address is required.";
    }

    if (!resumeFile) {
      newErrors.file = "Please upload your resume / CV (PDF or DOC).";
    }

    // Validate screening questions
    if (job.screeningQuestions && job.screeningQuestions.length > 0) {
      job.screeningQuestions.forEach((q) => {
        if (q.required && (!formData.answers[q.id] || !formData.answers[q.id].trim())) {
          newErrors[q.id] = "This qualification question is required.";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorEl = document.querySelector(".text-danger");
      firstErrorEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission (as requested to skip external backend endpoint for now)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div
        className="xb-contact-form details-contact-form xb-border mt-100 text-center"
        style={{
          background: "rgba(10, 14, 39, 0.95)",
          padding: "60px 40px",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            lineHeight: "72px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 61, 61, 0.15)",
            color: "var(--color-primary, #FF3D3D)",
            fontSize: "36px",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--color-primary, #FF3D3D)",
          }}
        >
          ✓
        </div>
        <h3 className="title mb-15" style={{ color: "#fff", fontSize: "32px" }}>
          Application Received!
        </h3>
        <p
          className="sub-title mb-30"
          style={{
            maxWidth: "600px",
            margin: "0 auto 30px",
            color: "var(--color-gray, #b2b3b7)",
            fontSize: "16px",
            lineHeight: "1.7",
          }}
        >
          Thank you, <strong style={{ color: "#fff" }}>{formData.name}</strong>. We have received your application for{" "}
          <strong style={{ color: "var(--color-primary, #FF3D3D)" }}>{job.title}</strong> at Araizona. Our technical hiring team will review your qualifications and reach out within 2–3 business days.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href={`mailto:contact@araizona.com?subject=Application Follow-up: ${encodeURIComponent(
              job.title
            )} - ${encodeURIComponent(formData.name)}`}
            className="thm-btn agency-btn"
          >
            <span className="text">Email Direct Inquiries</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                portfolioUrl: "",
                message: "",
                answers: {},
              });
              setResumeFile(null);
            }}
            className="thm-btn"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="xb-contact-form details-contact-form xb-border mt-100" id="apply-form-section">
      <div className="form-heading mb-30">
        <span
          style={{
            color: "var(--color-primary, #FF3D3D)",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "1.5px",
            fontSize: "13px",
            display: "block",
            marginBottom: "10px",
          }}
        >
          Direct Application
        </span>
        <h3 className="title">Apply for this position</h3>
        <p className="sub-title">
          Position: <strong style={{ color: "#fff" }}>{job.title}</strong> &bull; Location: {job.location} &bull; CTC: {job.salary}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="xb-contact-input-form details-contact-input-form">
        <div className="row mt-none-20">
          {/* Candidate Name */}
          <div className="col-lg-6 col-md-6 mt-20">
            <label htmlFor="name" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              Full Name <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>
            </label>
            <div className="xb-input-field">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: errors.name ? "1px solid #FF3D3D" : "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              {errors.name && (
                <span className="text-danger mt-1 d-block" style={{ fontSize: "13px" }}>
                  {errors.name}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-6 col-md-6 mt-20">
            <label htmlFor="email" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              Email Address <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>
            </label>
            <div className="xb-input-field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: errors.email ? "1px solid #FF3D3D" : "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              {errors.email && (
                <span className="text-danger mt-1 d-block" style={{ fontSize: "13px" }}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="col-lg-6 col-md-6 mt-20">
            <label htmlFor="phone" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              Phone Number <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>
            </label>
            <div className="xb-input-field">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. +91 9876543210"
                value={formData.phone}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: errors.phone ? "1px solid #FF3D3D" : "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              {errors.phone && (
                <span className="text-danger mt-1 d-block" style={{ fontSize: "13px" }}>
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Address / Location */}
          <div className="col-lg-6 col-md-6 mt-20">
            <label htmlFor="address" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              Current Location / City <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>
            </label>
            <div className="xb-input-field">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="e.g. Wanwadi, Pune"
                value={formData.address}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: errors.address ? "1px solid #FF3D3D" : "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              {errors.address && (
                <span className="text-danger mt-1 d-block" style={{ fontSize: "13px" }}>
                  {errors.address}
                </span>
              )}
            </div>
          </div>

          {/* GitHub / Portfolio / Published Apps link */}
          <div className="col-lg-12 mt-20">
            <label htmlFor="portfolioUrl" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              GitHub Profile / Published Apps / LinkedIn Link
            </label>
            <div className="xb-input-field">
              <input
                id="portfolioUrl"
                name="portfolioUrl"
                type="url"
                placeholder="e.g. https://github.com/username or Play Store / App Store link"
                value={formData.portfolioUrl}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
            </div>
          </div>

          {/* ================= SCREENING QUESTIONS SECTION ================= */}
          {job.screeningQuestions && job.screeningQuestions.length > 0 && (
            <div className="col-lg-12 mt-40">
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "30px",
                  marginBottom: "20px",
                }}
              >
                <h4 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
                  Screening Questions
                </h4>
                <p style={{ color: "var(--color-gray, #b2b3b7)", fontSize: "14px", marginBottom: "20px" }}>
                  Please answer these must-have qualification questions to help us evaluate your application faster.
                </p>
              </div>

              <div className="row g-4">
                {job.screeningQuestions.map((q, idx) => (
                  <div key={q.id} className="col-lg-6 col-md-12">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: errors[q.id]
                          ? "1px solid #FF3D3D"
                          : "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        padding: "20px",
                        height: "100%",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontWeight: 500,
                          fontSize: "15px",
                          display: "block",
                          marginBottom: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        <span style={{ color: "var(--color-primary, #FF3D3D)", marginRight: "6px" }}>
                          Q{idx + 1}.
                        </span>
                        {q.question}{" "}
                        {q.required && <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>}
                      </label>

                      {/* Select Dropdown */}
                      {q.type === "select" && q.options && (
                        <select
                          value={formData.answers[q.id] || ""}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#080c24",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "6px",
                            color: "#fff",
                            padding: "0 15px",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        >
                          <option value="" style={{ background: "#0A0E27", color: "#888" }}>
                            -- Select an option --
                          </option>
                          {q.options.map((opt) => (
                            <option key={opt} value={opt} style={{ background: "#0A0E27", color: "#fff" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      )}

                      {/* Radio buttons */}
                      {q.type === "radio" && q.options && (
                        <div className="d-flex flex-column gap-2">
                          {q.options.map((opt) => (
                            <label
                              key={opt}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: formData.answers[q.id] === opt ? "#fff" : "rgba(255,255,255,0.75)",
                                cursor: "pointer",
                                fontSize: "14px",
                                padding: "8px 12px",
                                borderRadius: "6px",
                                background:
                                  formData.answers[q.id] === opt
                                    ? "rgba(255, 61, 61, 0.12)"
                                    : "transparent",
                                border:
                                  formData.answers[q.id] === opt
                                    ? "1px solid var(--color-primary, #FF3D3D)"
                                    : "1px solid transparent",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <input
                                type="radio"
                                name={q.id}
                                value={opt}
                                checked={formData.answers[q.id] === opt}
                                onChange={() => handleAnswerChange(q.id, opt)}
                                style={{
                                  accentColor: "var(--color-primary, #FF3D3D)",
                                  cursor: "pointer",
                                }}
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )}

                      {/* Text Input */}
                      {q.type === "text" && (
                        <input
                          type="text"
                          placeholder={q.placeholder || "Enter your answer"}
                          value={formData.answers[q.id] || ""}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#080c24",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "6px",
                            color: "#fff",
                            padding: "0 15px",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        />
                      )}

                      {errors[q.id] && (
                        <span className="text-danger mt-2 d-block" style={{ fontSize: "13px" }}>
                          {errors[q.id]}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Message / Cover Note */}
          <div className="col-lg-12 col-md-12 mt-30">
            <label htmlFor="message" style={{ color: "#fff", marginBottom: "8px", display: "block" }}>
              Brief Cover Note / Why Araizona?
            </label>
            <div className="xb-input-field xb-massage-field">
              <textarea
                id="message"
                name="message"
                placeholder="Tell us briefly about yourself, key React Native projects, and why you'd like to build with us..."
                value={formData.message}
                onChange={handleTextChange}
                style={{
                  backgroundColor: "#080c24",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  minHeight: "120px",
                }}
              ></textarea>
            </div>
          </div>
        </div>

        {/* File Upload & Submit Section */}
        <div className="cp-contact-bottom ul_li_between mt-50 align-items-center">
          <div className="xb-upload_file">
            <label htmlFor="file">
              Upload your Resume / CV <span style={{ color: "var(--color-primary, #FF3D3D)" }}>*</span>
            </label>
            <input
              id="file"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{
                backgroundColor: "#080c24",
                border: errors.file ? "1px solid #FF3D3D" : "1px solid rgba(255,255,255,0.15)",
                padding: "10px",
                borderRadius: "6px",
                color: "#fff",
              }}
            />

            {resumeFile ? (
              <p className="xb-content" style={{ color: "#4ade80", fontWeight: 600 }}>
                Selected: {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            ) : (
              <p className="xb-content">
                <span>Accepted file types :</span> PDF, DOC, DOCX &bull; <span>Max size:</span> 15 MB.
              </p>
            )}

            {errors.file && (
              <span className="text-danger mt-1 d-block" style={{ fontSize: "13px" }}>
                {errors.file}
              </span>
            )}
          </div>

          {/* Submit & Email Buttons */}
          <div className="form-submit-btn d-flex align-items-center gap-3 flex-wrap">
            <button
              className="thm-btn agency-btn"
              type="submit"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.7 : 1 }}
            >
              <span className="text">{isSubmitting ? "Submitting..." : "Submit Application"}</span>
              <span className="arrow">
                <span className="arrow-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="5.065" y="19.978" width="20.571" height="2.612" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                    <rect x="7.97" y="7.244" width="2.612" height="2.612" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                    <rect x="11.65" y="7.548" width="2.612" height="2.612" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                    <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                    <rect x="18.711" y="11.837" width="2.612" height="2.612" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                    <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                    <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                  </svg>
                </span>
              </span>
            </button>
            <a
              href={`mailto:contact@araizona.com?subject=${encodeURIComponent(
                job.title
              )} Application`}
              className="thm-btn"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                padding: "16px 24px",
                borderRadius: "5px",
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Email contact@araizona.com
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
