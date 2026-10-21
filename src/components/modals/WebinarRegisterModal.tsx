import React, { useState } from 'react';
import { Webinar } from '../../types';
import { X, Calendar, Clock, CheckCircle2, Download, ShieldCheck, Mail, Phone, User } from 'lucide-react';

interface WebinarRegisterModalProps {
  webinar: Webinar | null;
  onClose: () => void;
}

export const WebinarRegisterModal: React.FC<WebinarRegisterModalProps> = ({ webinar, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('Intermediate (1-3 yrs)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!webinar) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Power of Markets//Webinar//EN\nBEGIN:VEVENT\nSUMMARY:${webinar.title}\nDESCRIPTION:${webinar.description}\\nInstructor: ${webinar.instructor}\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `POM-Webinar-${webinar.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DCEAF8]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#EEF6FF] text-[#61748D] hover:text-[#071F49] transition-colors cursor-pointer"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-xs font-bold text-[#0767DF] uppercase font-mono tracking-wider mb-1">
              Live Masterclass RSVP
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#071F49] tracking-tight mb-2">
              Reserve Your Free Seat
            </h3>
            
            {/* Webinar Summary Pill */}
            <div className="p-3.5 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8] mb-6 text-xs text-[#081B3A]">
              <div className="font-bold text-[#071F49] mb-1">{webinar.title}</div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#61748D]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0767DF]" />
                  {webinar.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0767DF]" />
                  {webinar.timeIST}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#071F49] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aditya Sharma"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071F49] mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aditya@example.com"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071F49] mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071F49] mb-1">
                  Current Trading / Investing Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white transition-colors"
                >
                  <option>Beginner (0-1 yr in stock markets)</option>
                  <option>Intermediate (1-3 yrs active derivatives / cash)</option>
                  <option>Advanced (3+ yrs systematic trading)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Securing Seat...' : 'Confirm Free Registration'}
                </button>
              </div>

              <div className="text-[11px] text-[#61748D] text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
                <span>Zero Spam · Session join link will be emailed 1 hr prior</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#159B72]/10 text-[#159B72] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[#071F49] mb-2">
              Registration Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-[#071F49]">{name}</strong>. Your seat for <em>"{webinar.title}"</em> has been secured. An entry link has been dispatched to <strong>{email}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0767DF] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
