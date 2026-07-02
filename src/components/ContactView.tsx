/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactViewProps {
  language: Language;
}

export default function ContactView({ language }: ContactViewProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setName('');
      setEmail('');
      setMsg('');
    }, 1200);
  };

  return (
    <div className="py-16 bg-slate-50 text-slate-900 min-h-screen" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page title */}
        <div className={`max-w-3xl ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1">
            {t.contact}
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-blue-900 tracking-tight">
            {t.contactUsToday}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-2 font-light">
            {t.contactUsSub}
          </p>
        </div>

        {/* Contact Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Call card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-orange-500">
                <Phone size={20} />
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">{t.phone}</span>
                <a href="tel:+212600000000" className="block text-lg font-bold text-slate-900 hover:text-orange-500 transition-colors">
                  +212 600 000 000
                </a>
                <span className="block text-xs text-slate-500 font-light">Mon - Sun, 24 Hours open line</span>
              </div>
            </div>

            {/* WhatsApp direct card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-emerald-500">
                <MessageSquare size={20} className="fill-emerald-500/10" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">WhatsApp</span>
                <a 
                  href="https://wa.me/212600000000?text=Hello%20LuxDrive,%20I%20have%20a%20general%20rental%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-lg font-bold text-slate-900 hover:text-emerald-500 transition-colors flex items-center gap-1"
                >
                  <span>Chat Now</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                </a>
                <span className="block text-xs text-slate-500 font-light">Average response time: &lt; 2 mins</span>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-orange-500">
                <Mail size={20} />
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">{t.email}</span>
                <a href="mailto:info@luxdrive.ma" className="block text-lg font-bold text-slate-900 hover:text-orange-500 transition-colors">
                  info@luxdrive.ma
                </a>
                <span className="block text-xs text-slate-500 font-light">We reply to general emails in 1 hour</span>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-orange-500">
                <MapPin size={20} />
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">{t.address}</span>
                <span className="block text-sm text-slate-700 font-medium">
                  {t.officeAddress}
                </span>
                <span className="block text-xs text-slate-500 font-light">Casablanca Head Office</span>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-12 space-y-4 animate-fade-in" id="contact-success-state">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-full inline-flex text-emerald-500 mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Delivered</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto font-light leading-relaxed">
                  {t.msgSuccess}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors border border-slate-200/60 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.fullName}</label>
                    <input 
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.email}</label>
                    <input 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.message}</label>
                  <textarea 
                    rows={5}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Describe your requested vehicle, dates, and pick-up airport terminal..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-600/50 text-white font-black rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer"
                  id="contact-submit-btn"
                >
                  <Send size={16} />
                  <span>{loading ? t.submitting : t.sendMessage}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* SECTION: Google Map iframe */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden p-2 shadow-sm">
          <div className="h-96 w-full rounded-2xl overflow-hidden relative">
            <iframe 
              title="Google Map Morocco Location"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d106368.53424194488!2d-7.669395276332155!3d33.572234720979854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1064f778fd4!2sCasablanca%2020250%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="google-maps-iframe"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
