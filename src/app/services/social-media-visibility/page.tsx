import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ArrowRight, Award, BookOpen, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SocialMediaPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-accent/10 to-transparent py-16 sm:py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl' data-aos='fade-up'>
              <h1 className='text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance'>
                AI-Powered Visibility for Primary Care
              </h1>
              <p className='text-xl text-muted-foreground mb-8 text-balance'>
                Deploy AI-driven digital agents that create hyper-realistic, consistent content across Facebook, Instagram, and LinkedIn—at scale, without increasing workload.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className='py-16 sm:py-24 bg-muted/20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
              The Visibility Challenge
            </h2>
            <p
              className='text-lg text-muted-foreground mb-8 max-w-3xl'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Pharmacies and GP practices struggle to build digital presence without adding to already stretched teams. Creating consistent, credible content across social platforms requires time and expertise clinicians simply don't have. As AI becomes increasingly indistinguishable from reality, Capacity+ enables primary care teams to leverage this technology responsibly—improving patient education, visibility, and trust without increasing workload.
            </p>
            <div
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-2'>Limited Bandwidth</h3>
                <p className='text-muted-foreground text-sm'>
                  Creating quality content consistently is impossible when teams are already stretched.
                </p>
              </div>
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-2'>
                  Inconsistent Presence
                </h3>
                <p className='text-muted-foreground text-sm'>
                  Without a strategy, social media efforts are sporadic and fail to build momentum or authority.
                </p>
              </div>
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-2'>Lost Patient Trust</h3>
                <p className='text-muted-foreground text-sm'>
                  Lack of visibility and education means patients turn to less credible sources for guidance.
                </p>
              </div>
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-2'>Missed Service Growth</h3>
                <p className='text-muted-foreground text-sm'>
                  Clinical services remain unknown to local patients who could benefit from them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className='py-16 sm:py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
              AI Agents That Mirror Your Voice
            </h2>
            <p
              className='text-lg text-muted-foreground mb-12 max-w-3xl'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Capacity+ deploys AI-driven digital agents that learn your voice, values, and expertise. These agents create hyper-realistic, consistent educational content across Facebook, Instagram, and LinkedIn—producing months of engaging posts in days. Content mirrors the pharmacist or GP's perspective, allowing your team to maintain presence and authority without the time commitment.
            </p>

            {/* Content Strategy */}
            <h3 className='text-2xl font-bold mb-6' data-aos='fade-up'>
              What AI Agents Create
            </h3>
            <div
              className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='bg-card border border-accent/20 rounded-lg p-6'>
                <h4 className='font-bold mb-3 flex items-center gap-2'>
                  <BookOpen className='h-5 w-5 text-accent' />
                  Educational Content
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Guides on medication management, seasonal health, wellness
                  tips, and pharmacy services. Build trust by helping your
                  community stay informed.
                </p>
              </div>
              <div className='bg-card border border-accent/20 rounded-lg p-6'>
                <h4 className='font-bold mb-3 flex items-center gap-2'>
                  <Zap className='h-5 w-5 text-accent' />
                  Service Awareness
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Highlight blood pressure checks, ABPM, contraception reviews,
                  Pharmacy First, and other clinical services available at your
                  practice.
                </p>
              </div>
              <div className='bg-card border border-accent/20 rounded-lg p-6'>
                <h4 className='font-bold mb-3 flex items-center gap-2'>
                  <Award className='h-5 w-5 text-accent' />
                  Community Stories
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Celebrate patient outcomes, team achievements, and your role
                  in the local healthcare ecosystem.
                </p>
              </div>
              <div className='bg-card border border-accent/20 rounded-lg p-6'>
                <h4 className='font-bold mb-3 flex items-center gap-2'>
                  <Users className='h-5 w-5 text-accent' />
                  Community Engagement
                </h4>
                <p className='text-muted-foreground text-sm'>
                  Q&A sessions, wellness events, and responsive engagement that
                  builds relationships with your local audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Calendar & Process */}
        <section className='py-16 sm:py-24 bg-muted/20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
              How We Deliver
            </h2>
            <div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div data-aos='fade-up' data-aos-delay='0'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground font-bold'>
                    1
                  </div>
                  <h3 className='text-lg font-bold'>Strategy</h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  We develop a tailored content strategy aligned with your
                  services, audience, and brand voice.
                </p>
              </div>

              <div data-aos='fade-up' data-aos-delay='100'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground font-bold'>
                    2
                  </div>
                  <h3 className='text-lg font-bold'>Creation</h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  Professional content creation—graphics, copy, videos—scheduled
                  and optimized for engagement.
                </p>
              </div>

              <div data-aos='fade-up' data-aos-delay='200'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground font-bold'>
                    3
                  </div>
                  <h3 className='text-lg font-bold'>Growth</h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  Community engagement, analytics, and continuous optimization
                  to grow your reach and impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className='py-16 sm:py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
              What You'll Achieve
            </h2>
            <div
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='flex gap-4'>
                <span className='text-accent text-2xl font-bold flex-shrink-0'>
                  →
                </span>
                <div>
                  <h3 className='font-bold mb-1'>Local Authority</h3>
                  <p className='text-muted-foreground text-sm'>
                    Be recognized as the trusted healthcare expert in your
                    community.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <span className='text-accent text-2xl font-bold flex-shrink-0'>
                  →
                </span>
                <div>
                  <h3 className='font-bold mb-1'>Increased Foot Traffic</h3>
                  <p className='text-muted-foreground text-sm'>
                    Drive more patient visits through service awareness and
                    engagement.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <span className='text-accent text-2xl font-bold flex-shrink-0'>
                  →
                </span>
                <div>
                  <h3 className='font-bold mb-1'>Service Growth</h3>
                  <p className='text-muted-foreground text-sm'>
                    Clinical services gain visibility and patient demand
                    increases.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <span className='text-accent text-2xl font-bold flex-shrink-0'>
                  →
                </span>
                <div>
                  <h3 className='font-bold mb-1'>Sustainable Visibility</h3>
                  <p className='text-muted-foreground text-sm'>
                    A content engine that continues to drive results month after
                    month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Content */}
        <section className='py-16 sm:py-24 bg-muted/20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
              Sample Content Themes
            </h2>
            <div
              className='grid grid-cols-1 md:grid-cols-3 gap-6'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-3'>Monday: Service Spotlight</h3>
                <p className='text-muted-foreground text-sm'>
                  "Did you know? Our blood pressure monitoring service takes
                  just 15 minutes..."
                </p>
              </div>
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-3'>Wednesday: Wellness Tip</h3>
                <p className='text-muted-foreground text-sm'>
                  "Beat the winter blues: 5 ways to maintain your health during
                  the season..."
                </p>
              </div>
              <div className='bg-card border border-border rounded-lg p-6'>
                <h3 className='font-bold mb-3'>Friday: Community Win</h3>
                <p className='text-muted-foreground text-sm'>
                  "This week we helped 15 patients with Pharmacy First—here's
                  how..."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 sm:py-24 bg-accent text-accent-foreground'>
          <div
            className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'
            data-aos='fade-up'
          >
            <h2 className='text-3xl font-bold mb-4'>
              Build Your Healthcare Credibility
            </h2>
            <p className='text-lg mb-8 opacity-90 max-w-2xl mx-auto'>
              Let's create a social media strategy that positions your pharmacy
              as the trusted healthcare destination in your community.
            </p>
            <Link
              href='/contact'
              className='px-8 py-3 bg-accent-foreground text-accent rounded-lg hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2'
            >
              Schedule a Strategy Call <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
