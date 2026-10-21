import React, { useState } from 'react';
import { JOB_OPENINGS_DATA } from '../data/mockData';
import { JobOpening } from '../types';
import { Briefcase, MapPin, Clock, CheckCircle2, Upload, Send, Sparkles, ShieldCheck } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [cvFileName, setCvFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setSubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Careers at Power of Markets
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B3A] tracking-tight">
            Build the Future of Financial Market Education in India.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#61748D] leading-relaxed">
            Join a mission-driven team dedicated to mathematical rigor, quantitative clarity, and honest financial literacy. We don't build speculative hype; we build enduring knowledge.
          </p>
        </div>

        {/* Culture & Values Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
            <h3 className="font-bold text-[#071F49] mb-2">Pedagogical Integrity</h3>
            <p className="text-xs text-[#61748D] leading-relaxed">
              We never compromise educational standards for short-term sales. Every lesson is rigorously vetted against first-principles logic.
            </p>
          </div>
          <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
            <h3 className="font-bold text-[#071F49] mb-2">Remote-First Flexibility</h3>
            <p className="text-xs text-[#61748D] leading-relaxed">
              We value deep focused work over arbitrary desk presence. Work flexibly from anywhere in India with collaborative sprint cadences.
            </p>
          </div>
          <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
            <h3 className="font-bold text-[#071F49] mb-2">Continuous Learning Stipend</h3>
            <p className="text-xs text-[#61748D] leading-relaxed">
              Team members receive dedicated annual budgets for certifications (CFA, NISM, CQF), books, and quantitative research papers.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#071F49]">Open Positions</h2>
              <p className="text-xs text-[#61748D] mt-0.5">
                Current opportunities across research, curriculum, and learner mentorship.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {JOB_OPENINGS_DATA.map((job) => (
              <div
                key={job.id}
                className="neu-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEAF8] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-[#0767DF]">
                    <span className="bg-[#EEF6FF] px-2.5 py-0.5 rounded font-bold">
                      {job.department}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#61748D]">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#61748D]">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071F49] mb-2">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-1.5">
                    {job.responsibilities.slice(0, 2).map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#081B3A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    Apply for Role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal / Drawer */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DCEAF8] max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#EEF6FF] text-[#61748D] cursor-pointer"
              >
                ✕
              </button>

              {!submitted ? (
                <div>
                  <div className="text-xs font-mono font-bold text-[#0767DF] uppercase mb-1">
                    Job Application
                  </div>
                  <h3 className="text-xl font-bold text-[#071F49] mb-1">
                    Apply: {selectedJob.title}
                  </h3>
                  <p className="text-xs text-[#61748D] mb-6">
                    {selectedJob.department} · {selectedJob.location}
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#071F49] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Neha Verma"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="neha@example.com"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+91 98765 00000"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Simulation */}
                    <div>
                      <label className="block text-xs font-semibold text-[#071F49] mb-1">
                        Resume / CV (PDF or DOCX) *
                      </label>
                      <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-[#DCEAF8] rounded-xl bg-[#EEF6FF]/30 hover:bg-[#EEF6FF] cursor-pointer transition-colors text-xs text-[#0767DF]">
                        <Upload className="w-4 h-4" />
                        <span>{cvFileName || 'Click to select resume file (Max 5MB)'}</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071F49] mb-1">
                        Why are you excited to teach markets with POM?
                      </label>
                      <textarea
                        rows={3}
                        value={applicantNote}
                        onChange={(e) => setApplicantNote(e.target.value)}
                        placeholder="Tell us about your market background or teaching experience..."
                        className="w-full px-3.5 py-2 text-xs bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting Application...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-[#159B72]/10 text-[#159B72] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071F49] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-xs text-[#61748D] leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you, {applicantName}. Our recruitment team and faculty coordinator will review your CV and respond to <strong>{applicantEmail}</strong> within 3 business days.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0767DF] rounded-xl"
                  >
                    Close
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
