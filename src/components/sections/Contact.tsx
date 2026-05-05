import { useState, type FormEvent } from 'react';
import {
  Github,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO, WEB3FORMS_KEY } from '@/data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const hasWeb3FormsKey = Boolean(WEB3FORMS_KEY);
  const hasErrors = Object.keys(errors).length > 0;

  const validateForm = (data: ContactFormData) => {
    const nextErrors: FormErrors = {};

    if (data.name.length < 2) {
      nextErrors.name = 'Vui lòng nhập họ tên từ 2 ký tự trở lên.';
    }

    if (!EMAIL_PATTERN.test(data.email)) {
      nextErrors.email = 'Email chưa đúng định dạng.';
    }

    if (data.message.length < 10) {
      nextErrors.message = 'Tin nhắn nên có ít nhất 10 ký tự.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (formStatus !== 'idle' && formStatus !== 'sending') {
      setFormStatus('idle');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const normalizedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!validateForm(normalizedData)) return;

    setFormData(normalizedData);
    setFormStatus('sending');

    if (hasWeb3FormsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name: normalizedData.name,
            email: normalizedData.email,
            message: normalizedData.message,
            from_name: 'Portfolio Contact',
            subject: `Portfolio Contact from ${normalizedData.name}`,
          }),
        });
        const data = (await res.json()) as { success?: boolean };

        if (res.ok && data.success) {
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setFormStatus('error');
        }
      } catch {
        setFormStatus('error');
      }
    } else {
      const subject = encodeURIComponent(`Portfolio Contact from ${normalizedData.name}`);
      const body = encodeURIComponent(
        `Name: ${normalizedData.name}\nEmail: ${normalizedData.email}\n\nMessage:\n${normalizedData.message}`,
      );

      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setFormStatus('success');
    }

    window.setTimeout(() => setFormStatus('idle'), 4000);
  };

  const submitLabel = (() => {
    if (formStatus === 'sending') return hasWeb3FormsKey ? 'Đang gửi...' : 'Đang mở email...';
    if (formStatus === 'success') return hasWeb3FormsKey ? 'Đã gửi thành công!' : 'Đã mở email';
    if (formStatus === 'error') return 'Lỗi - thử lại';
    return hasWeb3FormsKey ? 'Gửi tin nhắn' : 'Mở email để gửi';
  })();

  const feedbackMessage = (() => {
    if (hasErrors) return 'Vui lòng kiểm tra lại thông tin trước khi gửi.';
    if (formStatus === 'success' && hasWeb3FormsKey)
      return 'Cảm ơn bạn, mình sẽ phản hồi sớm nhất có thể.';
    if (formStatus === 'success') {
      return 'Ứng dụng email đã được mở. Hãy kiểm tra nội dung và bấm gửi trong email client.';
    }
    if (formStatus === 'error')
      return 'Chưa gửi được tin nhắn. Bạn có thể thử lại hoặc gửi email trực tiếp.';
    return '';
  })();

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 relative z-10 border-t border-white/5"
      aria-label="Contact"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left - CTA text */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-6 sm:mb-8">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-accent-2">TOGETHER.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 font-light mb-8 sm:mb-12 max-w-md leading-relaxed">
            Hiện tại mình đang tìm kiếm cơ hội Intern/Fresher. Nếu bạn có dự án hay cơ hội phù hợp,
            hãy liên hệ nhé!
          </p>

          {/* Contact info */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60 hover:text-accent transition-colors hover-target"
            >
              <Mail size={16} className="flex-shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60 hover:text-accent transition-colors hover-target"
            >
              <Phone size={16} className="flex-shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60">
              <MapPin size={16} className="flex-shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover-target"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:border-[#1877f2] transition-all hover-target"
              aria-label="Facebook profile"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all hover-target"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right - Contact form */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-8 sm:mt-12 lg:mt-0">
          <div className="bg-surface/50 p-5 sm:p-8 md:p-12 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-accent/5 rounded-full blur-[60px] sm:blur-[80px]"
              aria-hidden="true"
            />

            <form
              className="relative z-10 flex flex-col gap-5 sm:gap-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-1.5 sm:mb-2"
                >
                  Họ tên
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Nguyễn Văn A"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`w-full bg-transparent border-b py-3 sm:py-4 font-display outline-none transition-colors placeholder:text-white/20 text-base sm:text-lg hover-target ${
                    errors.name
                      ? 'border-red-400 focus:border-red-300'
                      : 'border-white/20 focus:border-accent'
                  }`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-2 text-xs text-red-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-1.5 sm:mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="email@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={`w-full bg-transparent border-b py-3 sm:py-4 font-display outline-none transition-colors placeholder:text-white/20 text-base sm:text-lg hover-target ${
                    errors.email
                      ? 'border-red-400 focus:border-red-300'
                      : 'border-white/20 focus:border-accent'
                  }`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-2 text-xs text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-1.5 sm:mb-2"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Nội dung tin nhắn..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`w-full bg-transparent border-b py-3 sm:py-4 font-display outline-none transition-colors placeholder:text-white/20 text-base sm:text-lg resize-none hover-target ${
                    errors.message
                      ? 'border-red-400 focus:border-red-300'
                      : 'border-white/20 focus:border-accent'
                  }`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-2 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="group mt-2 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold font-display text-sm sm:text-base tracking-widest uppercase flex items-center justify-between hover:bg-accent transition-colors duration-500 hover-target disabled:opacity-50"
              >
                <span>{submitLabel}</span>
                {formStatus === 'success' ? (
                  <CheckCircle size={16} className="text-green-600" />
                ) : formStatus === 'error' ? (
                  <AlertCircle size={16} className="text-red-600" />
                ) : (
                  <Send
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>

              {feedbackMessage && (
                <p
                  className={`text-xs leading-relaxed ${
                    hasErrors || formStatus === 'error' ? 'text-red-300' : 'text-white/50'
                  }`}
                  aria-live="polite"
                >
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
