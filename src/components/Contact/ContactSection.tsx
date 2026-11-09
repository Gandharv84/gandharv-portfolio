import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Linkedin, Github, Clock, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    opportunityType: 'Technical Internship',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`[${formData.opportunityType}] ${formData.subject || 'Opportunity Inquiry'}`);
    const body = encodeURIComponent(
      `Hello Gandharv,\n\nMy Name: ${formData.name}\nEmail: ${formData.email}\nOpportunity Type: ${formData.opportunityType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PROFILE_DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B1020] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#F07836] rounded-full inline-block" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F07836] font-mono">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Have an Opportunity? Let's Connect.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
            Interested in technical internship opportunities in software development. Let's connect.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1E2633]/60 border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#C5F467] uppercase tracking-wider">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Reach Out Directly
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B1020]/60 border border-white/5">
                  <Mail className="w-4 h-4 text-[#F07836] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      className="text-white hover:text-[#F07836] transition-colors font-medium break-all"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B1020]/60 border border-white/5">
                  <Linkedin className="w-4 h-4 text-[#5CC8FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                    <a
                      href={PROFILE_DATA.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#5CC8FF] transition-colors font-medium"
                    >
                      linkedin.com/in/gandharv-sankpale
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B1020]/60 border border-white/5">
                  <Github className="w-4 h-4 text-slate-200 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                    <a
                      href={PROFILE_DATA.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#C5F467] transition-colors font-medium"
                    >
                      github.com/Gandharv84
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B1020]/60 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#C47A50] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-white font-medium">{PROFILE_DATA.location}</div>
                  </div>
                </div>
              </div>

              {/* Hiring Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F07836]/15 via-[#C5F467]/10 to-transparent border border-[#F07836]/30 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F07836]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{PROFILE_DATA.availability}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Available for technical internship opportunities in software development and full-stack engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#1E2633]/60 border border-white/10 p-6 sm:p-8 space-y-6">
            {isSuccess ? (
              <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C5F467]/20 flex items-center justify-center text-[#C5F467]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Message Prepared!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your message inquiry regarding "{formData.subject}" is ready.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleMailtoFallback}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#F07836] hover:bg-[#d96728] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email Client Directly</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        opportunityType: 'Technical Internship',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-slate-300 font-medium">
                      Full Name <span className="text-[#F07836]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1020] border text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#F07836]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-slate-300 font-medium">
                      Email Address <span className="text-[#F07836]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1020] border text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#F07836]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-type" className="block text-slate-300 font-medium">
                      Opportunity Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B1020] border border-white/10 text-white focus:outline-none focus:border-[#F07836] transition-colors"
                    >
                      <option value="Technical Internship">Software Developer Technical Internship</option>
                      <option value="Full-Stack Project">Full-Stack Development Project</option>
                      <option value="General Technical Inquiry">Technical Discussion / Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-slate-300 font-medium">
                      Subject <span className="text-[#F07836]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Software Developer Technical Internship"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1020] border text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#F07836]'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-400">{errors.subject}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-slate-300 font-medium">
                    Message <span className="text-[#F07836]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Provide details about the role, team, or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1020] border text-white placeholder-slate-500 focus:outline-none transition-colors leading-relaxed ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#F07836]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-[#F07836] hover:bg-[#d96728] shadow-lg shadow-[#F07836]/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Dispatching...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
