'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Lottie from 'lottie-react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animationData, setAnimationData] = useState(null);

  // Load JSON from CDN
  useEffect(() => {
    fetch(
      'https://lottie.host/4982ead8-62a3-4d64-b793-ec4b1d353dda/MgGwz4oCDp.json'
      // 'https://cdn.prod.website-files.com/673ac568ac902aab789fdf43/67e6e9d9614ce51c330104a3_background-wave-lines%20(1).json'
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, []);

  if (!animationData) return null; // or a placeholder

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section - Premium Dark with Split Layout */}
        <section className='relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48'>
          <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Left Content */}
              <div className='space-y-8' data-aos='fade-up'>
                <div className='space-y-4'>
                  <div className='inline-block'>
                    <span className='px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium'>
                      Healthcare Intelligence Platform
                    </span>
                  </div>
                  <h1 className='text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight'>
                    Transform How{' '}
                    <span className='bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent'>
                      Primary Care
                    </span>{' '}
                    Operates
                  </h1>
                </div>

                <p className='text-xl text-muted-foreground leading-relaxed text-balance max-w-lg'>
                  Eliminate clinician burnout, streamline workflows, and build
                  sustainable practice infrastructure with our integrated
                  solutions for GPs and pharmacies.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                  <Link
                    href='/contact'
                    className='px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 group'
                  >
                    Schedule Call{' '}
                    <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </Link>
                  <Link
                    href='#solutions'
                    className='px-8 py-4 border border-border text-foreground rounded-xl hover:bg-card hover:border-primary/30 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2'
                  >
                    View Solutions <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className='pt-8 border-t border-border/50 flex gap-6'>
                  <div>
                    <p className='text-2xl font-bold text-primary'>500+</p>
                    <p className='text-sm text-muted-foreground'>
                      Healthcare Professionals
                    </p>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-secondary'>98%</p>
                    <p className='text-sm text-muted-foreground'>
                      Satisfaction Rate
                    </p>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-accent'>40%</p>
                    <p className='text-sm text-muted-foreground'>
                      Admin Time Saved
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - SVG Visual */}
              <div
                className='relative lg:h-full hidden lg:flex items-center justify-center'
                data-aos='fade-left'
              >
                {/* Lottie Animation */}
                <div className='relative w-full h-full'>
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section - Three Pillars */}
        <section
          id='solutions'
          className='py-20 lg:py-32 border-t border-border/50'
        >
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16' data-aos='fade-up'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                Our Integrated Solutions
              </h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                Three complementary services designed to address the core
                challenges in modern healthcare delivery
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Solution 1 */}
              <Link
                href='/services/digital-gp-pharmacy-integration'
                className='group'
                data-aos='fade-up'
                data-aos-delay='0'
              >
                <div className='relative h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'>
                  <div className='absolute -top-4 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center'>
                    <Shield className='h-6 w-6 text-primary-foreground' />
                  </div>

                  <h3 className='text-2xl font-bold mb-3 mt-4 group-hover:text-primary transition-colors'>
                    Digital GP-Pharmacy
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    Streamline referrals between GPs and pharmacies with secure,
                    compliant workflows. Reduce administrative burden by 40% and
                    accelerate patient care delivery.
                  </p>

                  <ul className='space-y-3 mb-8'>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Secure data sharing with SLA protection
                      </span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Automated referral processing
                      </span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Real-time tracking and reporting
                      </span>
                    </li>
                  </ul>

                  <div className='flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all'>
                    Explore <ArrowRight className='h-4 w-4' />
                  </div>
                </div>
              </Link>

              {/* Solution 2 */}
              <Link
                href='/services/life-leadership-coaching'
                className='group'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='relative h-full bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300'>
                  <div className='absolute -top-4 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center'>
                    <Lightbulb className='h-6 w-6 text-primary-foreground' />
                  </div>

                  <h3 className='text-2xl font-bold mb-3 mt-4 group-hover:text-secondary transition-colors'>
                    Leadership Coaching
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    Combat clinician burnout with personalized 1-on-1 and group
                    coaching. Develop resilience, decision-making clarity, and
                    sustainable practice management.
                  </p>

                  <ul className='space-y-3 mb-8'>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-secondary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        1-on-1 personalized coaching
                      </span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-secondary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>Group cohort programs</span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-secondary flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Healthcare-specific strategies
                      </span>
                    </li>
                  </ul>

                  <div className='flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all'>
                    Explore <ArrowRight className='h-4 w-4' />
                  </div>
                </div>
              </Link>

              {/* Solution 3 */}
              <Link
                href='/services/social-media-visibility'
                className='group'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='relative h-full bg-card border border-border rounded-2xl p-8 hover:border-accent/50 hover:bg-card/80 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300'>
                  <div className='absolute -top-4 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center'>
                    <TrendingUp className='h-6 w-6 text-primary-foreground' />
                  </div>

                  <h3 className='text-2xl font-bold mb-3 mt-4 group-hover:text-accent transition-colors'>
                    Social Media Visibility
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    Build trusted community presence and patient relationships
                    through strategic content. Position your practice as a local
                    healthcare authority.
                  </p>

                  <ul className='space-y-3 mb-8'>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Strategic content calendars
                      </span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>
                        Community engagement strategies
                      </span>
                    </li>
                    <li className='flex gap-3 items-start'>
                      <Check className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                      <span className='text-sm'>Analytics and insights</span>
                    </li>
                  </ul>

                  <div className='flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all'>
                    Explore <ArrowRight className='h-4 w-4' />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Capacity+ Section */}
        <section className='overflow-x-hidden py-20 lg:py-32 bg-card/30 border-t border-border/50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div className='space-y-8' data-aos='fade-right'>
                <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                  Why Healthcare Leaders Choose Capacity+
                </h2>

                <div className='space-y-6'>
                  {[
                    {
                      icon: Award,
                      title: 'Proven Results',
                      description:
                        'Trusted by 500+ healthcare professionals across the UK with measurable outcomes.',
                    },
                    {
                      icon: Users,
                      title: 'Healthcare Expertise',
                      description:
                        'Our team deeply understands NHS workflows, compliance, and the real challenges clinicians face.',
                    },
                    {
                      icon: Shield,
                      title: 'Data Security',
                      description:
                        'Enterprise-grade security with full GDPR and NHS compliance built in from day one.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Measurable Impact',
                      description:
                        'Track progress with comprehensive analytics and regular performance reviews.',
                    },
                  ].map((item, i) => (
                    <div key={i} className='flex gap-4'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary'>
                          <item.icon className='h-6 w-6' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1'>
                          {item.title}
                        </h3>
                        <p className='text-muted-foreground'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-6' data-aos='fade-left'>
                <StatCard
                  label='Healthcare Professionals'
                  value='500+'
                  color='primary'
                />
                <StatCard
                  label='Satisfaction Rate'
                  value='98%'
                  color='secondary'
                />
                <StatCard label='Admin Time Saved' value='40%' color='accent' />
                <StatCard
                  label='Referral Speed +'
                  value='3x Faster'
                  color='primary'
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className='py-20 lg:py-32 border-t border-border/50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16' data-aos='fade-up'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                How Capacity+ Works
              </h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                A simple, proven process to transform your practice
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {[
                {
                  step: 1,
                  title: 'Discovery Call',
                  desc: 'Understand your unique challenges and goals',
                },
                {
                  step: 2,
                  title: 'Custom Plan',
                  desc: 'Tailored solutions for your practice',
                },
                {
                  step: 3,
                  title: 'Implementation',
                  desc: 'Seamless onboarding and setup',
                },
                {
                  step: 4,
                  title: 'Support & Growth',
                  desc: 'Ongoing guidance and optimization',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className='relative'
                  data-aos='fade-up'
                  data-aos-delay={`${(item.step - 1) * 100}`}
                >
                  <div className='bg-card border border-border rounded-xl p-6 h-full'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4'>
                      <span className='text-lg font-bold text-primary-foreground'>
                        {item.step}
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                    <p className='text-muted-foreground text-sm'>{item.desc}</p>
                  </div>
                  {item.step < 4 && (
                    <div className='hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 translate-x-1/2'>
                      <ArrowRight className='h-5 w-5 text-primary/30' />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className='py-20 lg:py-32 bg-card/30 border-t border-border/50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16' data-aos='fade-up'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                Success Stories
              </h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                See how healthcare leaders are transforming their practices
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  quote:
                    'Capacity+ reduced our administrative burden by 40%. Our team now focuses on patient care instead of paperwork.',
                  author: 'Dr. Sarah Johnson',
                  role: 'GP Practice Director',
                  metric: '40% time saved',
                },
                {
                  quote:
                    'The coaching program transformed how I approach leadership. I feel energized rather than burned out.',
                  author: 'James Mitchell',
                  role: 'Pharmacy Manager',
                  metric: 'Better work-life balance',
                },
                {
                  quote:
                    "Our practice visibility increased significantly. We're now the trusted healthcare partner in our community.",
                  author: 'Emma Chen',
                  role: 'Practice Manager',
                  metric: '3x patient inquiries',
                },
              ].map((story, i) => (
                <div
                  key={i}
                  className='bg-background border border-border rounded-xl p-8'
                  data-aos='fade-up'
                  data-aos-delay={`${i * 100}`}
                >
                  <div className='flex gap-1 mb-4'>
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className='text-accent text-lg'>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className='text-muted-foreground mb-6 italic'>
                    "{story.quote}"
                  </p>
                  <div className='border-t border-border pt-4'>
                    <p className='font-semibold text-foreground'>
                      {story.author}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {story.role}
                    </p>
                    <p className='text-sm text-primary font-medium mt-2'>
                      {story.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className='py-20 lg:py-32 border-t border-border/50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16' data-aos='fade-up'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                Powerful Features Built for Healthcare
              </h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                Everything you need to succeed
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  desc: 'NHS-compliant, GDPR-ready, data protection guaranteed',
                },
                {
                  icon: TrendingUp,
                  title: 'Real-Time Analytics',
                  desc: 'Track progress with comprehensive dashboards and insights',
                },
                {
                  icon: Users,
                  title: 'Team Collaboration',
                  desc: 'Built-in tools for seamless team communication',
                },
                {
                  icon: Award,
                  title: 'Expert Support',
                  desc: 'Dedicated support from healthcare professionals',
                },
                {
                  icon: Lightbulb,
                  title: 'Custom Solutions',
                  desc: 'Tailored approaches for your unique needs',
                },
                {
                  icon: Check,
                  title: 'Proven Results',
                  desc: 'Measurable outcomes backed by real data',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className='bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300'
                  data-aos='fade-up'
                  data-aos-delay={`${i * 100}`}
                >
                  <div className='w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4'>
                    <feature.icon className='h-6 w-6' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 lg:py-32 bg-card/30 border-t border-border/50'>
          <div className='mx-auto max-w-4xl px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16' data-aos='fade-up'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-muted-foreground'>
                Everything you need to know about Capacity+
              </p>
            </div>

            <div className='space-y-4'>
              {[
                {
                  q: 'How long does implementation take?',
                  a: 'Most practices are fully onboarded within 2-4 weeks. We provide dedicated support every step of the way to ensure a smooth transition.',
                },
                {
                  q: 'Is our data secure with Capacity+?',
                  a: 'Yes. We maintain enterprise-grade security with full NHS compliance, GDPR certification, and regular security audits. Your data is always encrypted and protected.',
                },
                {
                  q: 'Can we customize the solutions for our practice?',
                  a: 'Absolutely. Every solution is tailored to your specific needs, workflows, and goals. Our team works closely with you to ensure perfect fit.',
                },
                {
                  q: 'What kind of support do you provide?',
                  a: 'We offer 24/5 dedicated support, regular check-ins, training sessions, and continuous optimization based on your feedback and metrics.',
                },
                {
                  q: 'Do you integrate with existing systems?',
                  a: 'Yes, we integrate seamlessly with major NHS systems, practice management software, and pharmacy platforms. Our API is flexible and well-documented.',
                },
                {
                  q: "What's the pricing structure?",
                  a: 'Pricing is based on your practice size and chosen services. We offer flexible monthly or annual plans with no long-term contracts. Contact us for a personalized quote.',
                },
              ].map((faq, i) => (
                <div key={i} data-aos='fade-up' data-aos-delay={`${i * 100}`}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className='py-20 lg:py-32 border-t border-border/50'>
          <div
            className='mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-8'
            data-aos='fade-up'
          >
            <div className='space-y-4'>
              <h2 className='text-4xl lg:text-5xl font-bold tracking-tight'>
                Ready to Transform Your Practice?
              </h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                Join hundreds of healthcare leaders who are reducing burnout,
                improving outcomes, and building sustainable practices with
                Capacity+.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-linear-to-r from-primary/80 to-secondary/90 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 group'
              >
                Schedule a Call{' '}
                <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-border text-foreground rounded-xl hover:bg-card transition-all duration-300 font-semibold'
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  const colorClasses = {
    primary: 'from-primary/10 to-primary/5 text-primary',
    secondary: 'from-secondary/10 to-secondary/5 text-secondary',
    accent: 'from-accent/10 to-accent/5 text-accent',
  };
  const classes = colorClasses[color as keyof typeof colorClasses];

  return (
    <div
      className={`bg-gradient-to-br ${classes} border border-border rounded-2xl p-6 text-center`}
    >
      <p className={`text-3xl font-bold mb-1`}>{value}</p>
      <p className='text-sm font-medium text-muted-foreground'>{label}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full px-6 py-4 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors'
      >
        <h3 className='text-lg font-semibold text-left'>{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='border-t border-border px-6 py-4 bg-muted/20 animate-in fade-in slide-in-from-top-2 duration-200'>
          <p className='text-muted-foreground leading-relaxed'>{answer}</p>
        </div>
      )}
    </div>
  );
}
