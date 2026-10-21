import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Course Inquiry');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (captchaAnswer.trim() !== '8') {
      setErrorMessage('Please answer the security verification correctly (5 + 3 = 8).');
      return;
    }

    if (!consent) {
      setErrorMessage('Please agree to receive educational communication.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Direct Communication
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Contact Power of Markets
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#61748D]">
            Have inquiries regarding the Option Greeks Masterclass, corporate workshops, or enrollment support? Our team is here to assist.
          </p>
        </div>

        {/* 2-Column Split: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Verified Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#071F49] mb-6">
                  Institutional Contact
                </h3>

                <div className="space-y-6 text-xs sm:text-sm text-[#081B3A]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0767DF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#071F49]">Registered Office</div>
                      <p className="text-[#61748D] mt-0.5 leading-relaxed">
                        Sector 62, Institutional Area, Noida, Uttar Pradesh 201309, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0767DF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#071F49]">Direct Email Support</div>
                      <a href="mailto:support@powerofmarket.com" className="text-[#0767DF] hover:underline mt-0.5 block font-mono">
                        support@powerofmarket.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0767DF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#071F49]">Helpline / WhatsApp</div>
                      <span className="text-[#081B3A] font-mono mt-0.5 block">
                        +91 98112 04510
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0AA8EF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#071F49]">Operational Hours</div>
                      <p className="text-[#61748D] mt-0.5">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DCEAF8]">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#0767DF] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
                  <span>Direct 24/7 Student LMS Support & Enrollment Assistance</span>
                </div>
              </div>
            </div>

            {/* Regulatory Notice */}
            <div className="p-4 rounded-2xl bg-[#EEF6FF] border border-[#DCEAF8] text-xs text-[#61748D]">
              <div className="flex items-center gap-1.5 text-[#071F49] font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#159B72]" />
                <span>Strict Non-Advisory Notice:</span>
              </div>
              Power of Markets does not provide buy/sell stock tips, calls, or investment advice. Queries asking for trade recommendations will not be entertained.
            </div>
          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="neu-card rounded-3xl p-8 sm:p-10 bg-white border border-[#DCEAF8]">
              
              {!submitted ? (
                <div>
                  <h3 className="text-xl font-bold text-[#071F49] mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-[#61748D] mb-6">
                    Fill out the form below and an educational advisor will respond within 24 business hours.
                  </p>

                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Patel"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ramesh@example.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Subject of Inquiry
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                        >
                          <option>Option Greeks Masterclass</option>
                          <option>Price Action & Market Structure</option>
                          <option>POM Pro Membership Inquiry</option>
                          <option>Live Webinar RSVP Query</option>
                          <option>Corporate Workshop / Institutional</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071F49] mb-1">
                        Your Message / Questions *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Let us know what you would like to know regarding our curriculum or methodology..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                      />
                    </div>

                    {/* Anti-Spam Verification */}
                    <div className="p-3 bg-[#EEF6FF] rounded-xl border border-[#DCEAF8] flex items-center justify-between gap-4">
                      <div className="text-xs text-[#071F49] font-mono">
                        Security verification: <strong className="text-[#0767DF]">5 + 3 = ?</strong>
                      </div>
                      <input
                        type="text"
                        required
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder="Answer"
                        className="w-24 px-3 py-1.5 text-xs bg-white border border-[#DCEAF8] rounded-lg text-center font-mono font-bold text-[#071F49] focus:outline-none focus:border-[#0767DF]"
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent-check"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded text-[#0767DF] focus:ring-[#0767DF]"
                      />
                      <label htmlFor="consent-check" className="text-[11px] text-[#61748D] leading-tight cursor-pointer">
                        I agree to be contacted by Power of Markets regarding educational programs and curriculum updates.
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] active:bg-[#071F49] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#159B72]/10 text-[#159B72] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071F49] mb-2">
                    Message Successfully Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you, <strong className="text-[#071F49]">{name}</strong>. An educational advisor has received your request and will contact you at <strong>{email}</strong> or <strong>{phone}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                      setCaptchaAnswer('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0767DF] rounded-xl hover:bg-[#0654b7] cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
