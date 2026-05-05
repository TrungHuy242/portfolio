import { useState, type FormEvent } from 'react';
import { Github, Facebook, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, WEB3FORMS_KEY } from '@/data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');

    // If Web3Forms key is configured, use API; otherwise fallback to mailto
    if (WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: 'Portfolio Contact',
          }),
        });
        const data = await res.json();
        if (data.success) {
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setFormStatus('error');
        }
      } catch {
        setFormStatus('error');
      }
    } else {
      // Fallback to mailto
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }

    setTimeout(() => setFormStatus('idle'), 4000);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 relative z-10 border-t border-white/5"
      aria-label="Contact"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 items-center">
        {/* Left — CTA text */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-8">
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-accent-2">TOGETHER.</span>
          </h2>
          <p className="text-xl text-white/60 font-light mb-12 max-w-md leading-relaxed">
            Hiện tại mình đang tìm kiếm cơ hội Intern/Fresher. Nếu bạn có dự án hay cơ hội phù hợp, hãy liên hệ nhé!
          </p>

          {/* Contact info */}
          <div className="space-y-4 mb-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors hover-target">
              <Mail size={18} />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors hover-target">
              <Phone size={18} />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={18} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover-target"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:border-[#1877f2] transition-all hover-target"
              aria-label="Facebook profile"
            >
              <Facebook size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all hover-target"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-16 md:mt-0">
          <div className="bg-surface/50 p-8 md:p-12 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" aria-hidden="true" />

            <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                  Họ tên
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-transparent border-b border-white/20 py-4 font-display outline-none focus:border-accent transition-colors placeholder:text-white/20 text-lg hover-target"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 font-display outline-none focus:border-accent transition-colors placeholder:text-white/20 text-lg hover-target"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                  Tin nhắn
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Nội dung tin nhắn..."
                  className="w-full bg-transparent border-b border-white/20 py-4 font-display outline-none focus:border-accent transition-colors placeholder:text-white/20 text-lg resize-none hover-target"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="group mt-4 px-8 py-4 bg-white text-black font-bold font-display tracking-widest uppercase flex items-center justify-between hover:bg-accent transition-colors duration-500 hover-target disabled:opacity-50"
              >
                <span>
                  {formStatus === 'success' && 'Đã gửi thành công!'}
                  {formStatus === 'sending' && 'Đang gửi...'}
                  {formStatus === 'error' && 'Lỗi — thử lại!'}
                  {formStatus === 'idle' && 'Gửi tin nhắn'}
                </span>
                {formStatus === 'success' ? (
                  <CheckCircle size={18} className="text-green-600" />
                ) : formStatus === 'error' ? (
                  <AlertCircle size={18} className="text-red-600" />
                ) : (
                  <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
