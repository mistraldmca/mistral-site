import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { CheckCircle2, Loader2 } from 'lucide-react';

const LeakScanPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    onlyfans_username: '',
    stage_name: '',
    instagram: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mojnayon", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          onlyfans_username: '',
          stage_name: '',
          instagram: '',
          message: ''
        });
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all hover:border-slate-300";

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Section className="!py-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
             <h1 className="text-4xl font-bold text-slate-900 mb-4">Start Your Free Leak Scan</h1>
             <p className="text-slate-600">Secure your content. We'll identify leaks and get back to you with a comprehensive report.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600">Thanks! Your free leak scan request has been received. We’ll contact you shortly.</p>
                <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                >
                    Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="text" 
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">OnlyFans Username <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none">@</span>
                        <input 
                        required
                        type="text" 
                        name="onlyfans_username"
                        value={formData.onlyfans_username}
                        onChange={handleChange}
                        className={`${inputClasses} pl-8`}
                        placeholder="username"
                        />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Stage Name <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      name="stage_name"
                      value={formData.stage_name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Mistral"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Instagram <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none">@</span>
                        <input 
                        type="text" 
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className={`${inputClasses} pl-8`}
                        placeholder="instagram_handle"
                        />
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Notes / Message <span className="text-slate-400 font-normal">(Optional)</span></label>
                   <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} min-h-[120px]`}
                      placeholder="Any specific concerns or leaks you've already found..."
                   ></textarea>
                </div>

                <Button fullWidth size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </span>
                  ) : (
                    "Submit Free Leak Scan"
                  )}
                </Button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting, you agree to allow Mistral to perform a scan of public records for your content.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LeakScanPage;