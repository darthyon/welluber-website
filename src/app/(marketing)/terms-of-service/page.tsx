import { Container } from '@/components/shared/Container'
import Link from 'next/link'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-[family-name:var(--font-bricolage)] text-xl font-bold tracking-[-0.03em] text-gray-900 sm:text-2xl">
      {children}
    </h2>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 font-[family-name:var(--font-bricolage)] text-base font-semibold text-gray-900">
      {children}
    </h3>
  )
}

function BodyP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-600">
      {children}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function TermsOfServicePage() {
  return (
    <main id="main-content" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[720px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        <p className="mt-8 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">
          LEGAL
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-bricolage)] text-3xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-4xl">
          Terms and Conditions
        </h1>

        <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-600">
          <span className="font-semibold text-gray-900">Welluber Sdn Bhd</span>
          <br />
          Last updated: April 2026
        </p>

        <SectionTitle>1. About These Terms</SectionTitle>
        <BodyP>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Welluber platform operated by{' '}
          <span className="font-semibold text-gray-900">Welluber Sdn Bhd</span> (Company No. [XXXXXXX-X]), a company incorporated in
          Malaysia (&quot;Welluber&quot;, &quot;we&quot;, &quot;us&quot;).
        </BodyP>
        <BodyP>
          By registering for or using the Welluber platform, you agree to be bound by these Terms. If you do not agree, you must not use
          the platform.
        </BodyP>
        <BodyP>These Terms apply to all users of the platform, including:</BodyP>
        <BulletList
          items={[
            'HR Clients — organisations that subscribe to Welluber to manage employee benefits',
            'Members — employees whose accounts are activated by an HR Client',
            'Service Providers (SPs) — businesses listed on the Welluber network',
          ]}
        />
        <BodyP>
          Where a separate written agreement exists between Welluber and an HR Client or Service Provider, that agreement takes precedence
          over these Terms to the extent of any conflict.
        </BodyP>

        <SectionTitle>2. Platform Access</SectionTitle>

        <SubTitle>2.1 Account Registration</SubTitle>
        <BodyP>
          To use the platform, you must register an account with accurate and complete information. You are responsible for maintaining the
          confidentiality of your login credentials and for all activity that occurs under your account.
        </BodyP>

        <SubTitle>2.2 Authorised Use</SubTitle>
        <BodyP>You may only use the platform for its intended purposes as described in these Terms. You must not:</BodyP>
        <BulletList
          items={[
            'Access or attempt to access accounts that do not belong to you',
            'Reverse-engineer, copy, or replicate any part of the platform',
            'Use the platform to transmit unlawful, harmful, or fraudulent content',
            'Circumvent any access controls, spending limits, or policy rules configured on the platform',
            'Use automated scripts or bots to interact with the platform without prior written consent from Welluber',
          ]}
        />

        <SubTitle>2.3 Account Suspension</SubTitle>
        <BodyP>
          Welluber reserves the right to suspend or terminate any account that violates these Terms, without prior notice where
          circumstances require immediate action. We will notify affected parties as soon as practicable.
        </BodyP>

        <SubTitle>2.4 Platform Availability</SubTitle>
        <BodyP>
          We aim to maintain platform availability at all times but do not guarantee uninterrupted access. We may take the platform offline
          for scheduled maintenance, upgrades, or to address security issues. We will provide advance notice of scheduled downtime where
          reasonably practicable.
        </BodyP>

        <SectionTitle>3. HR Client Terms</SectionTitle>

        <SubTitle>3.1 Subscription and Onboarding</SubTitle>
        <BodyP>
          HR Clients subscribe to the Welluber platform under a separate service agreement. These Terms apply in addition to that
          agreement.
        </BodyP>

        <SubTitle>3.2 Benefit Policy Configuration</SubTitle>
        <BodyP>
          HR Clients are solely responsible for the benefit policies they configure on the platform, including spending limits, eligible
          categories, policy periods, and employee eligibility rules. Welluber executes policies as configured — we do not validate whether
          a policy complies with the HR Client&apos;s internal HR policies or employment contracts.
        </BodyP>

        <SubTitle>3.3 Employee Data</SubTitle>
        <BodyP>
          By uploading employee data to Welluber, the HR Client warrants that it has obtained all necessary consents and authorisations
          under Malaysian law to share that data with Welluber for the purposes of operating the benefits platform.
        </BodyP>

        <SubTitle>3.4 Policy Changes</SubTitle>
        <BodyP>
          Changes to benefit policies take effect from the date of change going forward. Past transactions and records are immutable and
          will not be retroactively altered.
        </BodyP>

        <SubTitle>3.5 Reporting</SubTitle>
        <BodyP>
          HR Clients have access to real-time utilisation and audit reports. These reports are provided for internal management purposes
          and do not constitute tax or legal advice. HR Clients remain responsible for their own regulatory compliance obligations.
        </BodyP>

        <SectionTitle>4. Member Terms</SectionTitle>

        <SubTitle>4.1 Wallet and Entitlements</SubTitle>
        <BodyP>
          Members&apos; wallet balances and benefit entitlements are determined entirely by the benefit policy configured by their HR Client.
          Welluber has no discretion over the amount, category, or duration of a member&apos;s entitlements.
        </BodyP>

        <SubTitle>4.2 Spending</SubTitle>
        <BodyP>
          Members may spend their wallet balance with listed Service Providers, subject to the categories and limits set by their HR
          Client&apos;s policy. Wallet balances may not be withdrawn as cash, transferred to another person, or used outside the Welluber
          network.
        </BodyP>

        <SubTitle>4.3 Unspent Balances</SubTitle>
        <BodyP>
          The treatment of unspent balances (rollover, expiry, or redistribution) is determined by the HR Client&apos;s policy
          configuration. Members should refer to their HR administrator for details.
        </BodyP>

        <SubTitle>4.4 Disputes on Transactions</SubTitle>
        <BodyP>
          If a Member believes a transaction has been incorrectly charged or recorded, they must raise a dispute within{' '}
          <span className="font-semibold text-gray-900">14 days</span> of the transaction date by contacting{' '}
          <span className="font-semibold text-gray-900">support@welluber.com</span>. Welluber will investigate and respond within{' '}
          <span className="font-semibold text-gray-900">10 business days</span>.
        </BodyP>

        <SectionTitle>5. Service Provider Terms</SectionTitle>

        <SubTitle>5.1 Listing and Approval</SubTitle>
        <BodyP>
          Service Providers must apply to join the Welluber network and are subject to Welluber&apos;s verification and approval process.
          Welluber reserves the right to decline or remove any Service Provider at its discretion, including for breach of these Terms or
          conduct detrimental to the platform or its users.
        </BodyP>

        <SubTitle>5.2 Accurate Listings</SubTitle>
        <BodyP>
          Service Providers are responsible for ensuring that their service listings, categories, pricing, and business information on the
          platform are accurate and kept up to date. Welluber is not liable for any loss arising from inaccurate listings.
        </BodyP>

        <SubTitle>5.3 Service Delivery</SubTitle>
        <BodyP>
          Service Providers are solely responsible for the quality and delivery of services to Members. Welluber facilitates payment and
          listing only — we are not a party to the service transaction between a Service Provider and a Member.
        </BodyP>

        <SubTitle>5.4 Commission</SubTitle>
        <BodyP>
          By joining the Welluber network, Service Providers agree to Welluber deducting an agreed commission rate from each transaction
          before settlement. The applicable commission rate is set out in the Service Provider&apos;s onboarding agreement. Welluber reserves
          the right to revise commission rates with <span className="font-semibold text-gray-900">30 days&apos; written notice</span>.
        </BodyP>

        <SubTitle>5.5 Settlement</SubTitle>
        <BodyP>
          Welluber settles outstanding amounts to Service Providers on a{' '}
          <span className="font-semibold text-gray-900">monthly cycle</span>, to the bank account registered during onboarding. Settlement is
          subject to:
        </BodyP>
        <BulletList
          items={[
            'Verification of completed transactions',
            'Deduction of agreed commission',
            'Resolution of any active disputes relating to the settlement period',
          ]}
        />
        <BodyP>
          Service Providers can view pending payouts, transaction history, and settlement status in real time through the SP portal.
        </BodyP>

        <SubTitle>5.6 Settlement Disputes</SubTitle>
        <BodyP>
          If a Service Provider believes a settlement amount is incorrect, they must raise a dispute within{' '}
          <span className="font-semibold text-gray-900">14 days</span> of the settlement date. Welluber will investigate and respond within{' '}
          <span className="font-semibold text-gray-900">10 business days</span>. Undisputed amounts will be treated as accepted.
        </BodyP>

        <SubTitle>5.7 Tax Obligations</SubTitle>
        <BodyP>
          Service Providers are solely responsible for their own tax obligations arising from payments received through the platform.
          Welluber does not provide tax advice and is not liable for any tax liability incurred by a Service Provider.
        </BodyP>

        <SectionTitle>6. Payments and Third-Party Gateways</SectionTitle>
        <BodyP>
          Payment transactions on the platform are processed by authorised third-party payment gateways. By using the platform, you agree
          to be bound by the relevant payment gateway&apos;s terms and conditions in addition to these Terms.
        </BodyP>
        <BodyP>
          Welluber is not responsible for any failure, error, or delay caused by a third-party payment gateway, though we will take
          reasonable steps to assist in resolving such issues.
        </BodyP>

        <SectionTitle>7. Intellectual Property</SectionTitle>
        <BodyP>
          All content, software, trademarks, and materials on the Welluber platform are the intellectual property of Welluber Sdn Bhd or its
          licensors. Nothing in these Terms grants you any right to use Welluber&apos;s intellectual property without prior written consent.
        </BodyP>
        <BodyP>You may not reproduce, distribute, or create derivative works from any part of the platform.</BodyP>

        <SectionTitle>8. Liability Limitations</SectionTitle>

        <SubTitle>8.1 No Warranty</SubTitle>
        <BodyP>
          The platform is provided on an &quot;as is&quot; basis. To the fullest extent permitted by Malaysian law, Welluber makes no
          warranties — express or implied — regarding the platform&apos;s fitness for a particular purpose, uninterrupted availability, or
          freedom from errors.
        </BodyP>

        <SubTitle>8.2 Limitation of Liability</SubTitle>
        <BodyP>
          To the maximum extent permitted by law, Welluber&apos;s aggregate liability to any user arising out of or in connection with these
          Terms or the use of the platform shall not exceed the total fees paid by that user to Welluber in the{' '}
          <span className="font-semibold text-gray-900">three (3) months</span> preceding the event giving rise to the claim.
        </BodyP>

        <SubTitle>8.3 Excluded Losses</SubTitle>
        <BodyP>Welluber shall not be liable for:</BodyP>
        <BulletList
          items={[
            'Loss of profits, revenue, or business opportunity',
            'Loss of data (beyond what is recoverable from our backups)',
            'Indirect, consequential, or special loss of any kind',
            "Any loss arising from a user's reliance on benefit policy configurations they have set themselves",
            'Any loss arising from the acts or omissions of third-party payment gateways or service providers',
          ]}
        />

        <SubTitle>8.4 Indemnity</SubTitle>
        <BodyP>
          You agree to indemnify and hold harmless Welluber, its directors, employees, and agents from any claim, liability, or expense
          (including legal fees) arising from your breach of these Terms or your misuse of the platform.
        </BodyP>

        <SectionTitle>9. Termination</SectionTitle>

        <SubTitle>9.1 By the User</SubTitle>
        <BodyP>
          HR Clients may terminate their subscription in accordance with their service agreement. Service Providers may deactivate their
          listing by providing <span className="font-semibold text-gray-900">30 days&apos; written notice</span>. Members may request account
          deactivation through their HR administrator.
        </BodyP>

        <SubTitle>9.2 By Welluber</SubTitle>
        <BodyP>
          Welluber may suspend or terminate access to the platform at any time for breach of these Terms, non-payment, or conduct that poses
          a risk to the platform or other users. We will provide reasonable notice except where immediate action is necessary.
        </BodyP>

        <SubTitle>9.3 Effect of Termination</SubTitle>
        <BodyP>
          Upon termination, outstanding settlements owed to Service Providers will be processed in the next available cycle. Wallet
          balances belonging to Members will be handled in accordance with the HR Client&apos;s policy. Welluber&apos;s data retention
          obligations survive termination.
        </BodyP>

        <SectionTitle>10. Changes to These Terms</SectionTitle>
        <BodyP>
          We may update these Terms from time to time. We will notify registered users of material changes via email or in-platform
          notification at least <span className="font-semibold text-gray-900">14 days</span> before they take effect. Continued use of the
          platform after that date constitutes acceptance of the updated Terms.
        </BodyP>

        <SectionTitle>11. Governing Law and Dispute Resolution</SectionTitle>
        <BodyP>
          These Terms are governed by the laws of <span className="font-semibold text-gray-900">Malaysia</span>. Any dispute arising out of
          or in connection with these Terms shall first be referred to good-faith negotiation between the parties. If unresolved within{' '}
          <span className="font-semibold text-gray-900">30 days</span>, the dispute shall be subject to the exclusive jurisdiction of the{' '}
          <span className="font-semibold text-gray-900">courts of Kuala Lumpur, Malaysia</span>.
        </BodyP>

        <SectionTitle>12. General</SectionTitle>
        <BulletList
          items={[
            'Entire Agreement — These Terms, together with any applicable service agreement, constitute the entire agreement between the parties with respect to the platform.',
            'Severability — If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force.',
            'Waiver — Failure to enforce any provision of these Terms does not constitute a waiver of that provision.',
            'No Agency — Nothing in these Terms creates a partnership, joint venture, or agency relationship between the parties.',
          ]}
        />

        <SectionTitle>13. Contact Us</SectionTitle>
        <BodyP>
          <span className="font-semibold text-gray-900">Welluber Sdn Bhd</span>
          <br />
          Kuala Lumpur, Malaysia
        </BodyP>
        <BodyP>
          Email: <span className="font-semibold text-gray-900">contact@welluber.com</span>
        </BodyP>

        <p className="mt-10 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-gray-500">
          <em>
            These Terms and Conditions are governed by the laws of Malaysia. Disputes are subject to the exclusive jurisdiction of the
            courts of Kuala Lumpur.
          </em>
        </p>
      </Container>
    </main>
  )
}

