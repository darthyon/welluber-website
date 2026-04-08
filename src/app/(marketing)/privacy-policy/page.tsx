import { Container } from '@/components/shared/Container'
import Link from 'next/link'

type PurposeRow = {
  purpose: string
  basis: string
}

const purposeRows: PurposeRow[] = [
  { purpose: 'Creating and managing user accounts', basis: 'Consent / Contractual necessity' },
  {
    purpose: 'Delivering the benefits platform to HR Clients and their employees',
    basis: 'Contractual necessity',
  },
  { purpose: 'Processing transactions and settlements', basis: 'Contractual necessity' },
  { purpose: 'Enforcing benefit policy rules configured by HR Clients', basis: 'Contractual necessity' },
  { purpose: 'Sending transactional notifications (wallet activity, payouts)', basis: 'Consent' },
  { purpose: 'Compliance, audit, and fraud prevention', basis: 'Legal obligation' },
  {
    purpose: 'Platform improvement and analytics (aggregated, non-identifiable)',
    basis: 'Legitimate interest',
  },
]

type RetentionRow = {
  dataType: string
  retention: string
}

const retentionRows: RetentionRow[] = [
  { dataType: 'Account and profile data', retention: 'Duration of account + 7 years' },
  { dataType: 'Transaction and settlement records', retention: '7 years (for regulatory compliance)' },
  { dataType: 'Audit logs', retention: '7 years' },
  { dataType: 'Inactive accounts', retention: '3 years from last activity, then deleted' },
]

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

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-600">
          <span className="font-semibold text-gray-900">Welluber Sdn Bhd</span>
          <br />
          Last updated: April 2026
        </p>

        <SectionTitle>1. Who We Are</SectionTitle>
        <BodyP>
          Welluber Sdn Bhd (&quot;Welluber&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates a corporate wellness
          benefits platform that connects organisations, employees, and service providers. We are the data processor acting on behalf of
          the organisations (&quot;HR Clients&quot;) that use our platform to manage employee benefits.
        </BodyP>
        <BodyP>
          This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, and your rights under
          the <span className="font-semibold text-gray-900">Personal Data Protection Act 2010 (PDPA)</span> of Malaysia.
        </BodyP>
        <BodyP>By using the Welluber platform, you consent to the practices described in this policy.</BodyP>

        <SectionTitle>2. The Data We Collect</SectionTitle>
        <BodyP>We collect the following categories of personal data depending on your role on the platform:</BodyP>

        <SubTitle>2.1 All Users</SubTitle>
        <BulletList items={['Full name', 'Email address', 'Phone number', 'Account credentials (encrypted)']} />

        <SubTitle>2.2 Employees</SubTitle>
        <BulletList
          items={[
            'Employer organisation and branch',
            'Role, department, and employment type',
            'Salary band (where provided by the HR Client for policy eligibility purposes)',
            'Benefit wallet balance and transaction history',
            'Health and wellness spending categories (e.g. fitness, mental health, medical)',
          ]}
        />

        <SubTitle>2.3 HR Administrators</SubTitle>
        <BulletList
          items={[
            'Name and work contact details',
            'Role and access permissions within the platform',
            'Audit logs of policy changes and administrative actions',
          ]}
        />

        <SubTitle>2.4 Service Providers</SubTitle>
        <BulletList
          items={[
            'Business registration details',
            'Bank account information for settlement purposes',
            'Transaction and payout history',
            'Service categories and listings',
          ]}
        />

        <SubTitle>2.5 Payment Data</SubTitle>
        <BodyP>
          We do not store full payment card details. Payment transactions are processed by authorised third-party payment gateways. We
          retain transaction references, amounts, timestamps, and status records for reconciliation and audit purposes.
        </BodyP>

        <SectionTitle>3. Why We Collect This Data</SectionTitle>
        <BodyP>We collect and process personal data for the following purposes:</BodyP>

        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-gray-600">
                  Purpose
                </th>
                <th className="px-4 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-gray-600">
                  Legal Basis (PDPA)
                </th>
              </tr>
            </thead>
            <tbody>
              {purposeRows.map((row) => (
                <tr key={row.purpose} className="border-t border-gray-200">
                  <td className="px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-gray-700">
                    {row.purpose}
                  </td>
                  <td className="px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-gray-700">
                    {row.basis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BodyP>We do not use your personal data for advertising or sell it to third parties.</BodyP>

        <SectionTitle>4. Data Processed on Behalf of HR Clients</SectionTitle>
        <BodyP>
          Where an HR Client uploads or submits employee data to Welluber — including names, roles, departments, and salary bands —
          Welluber acts as a <span className="font-semibold text-gray-900">data processor</span> on behalf of that HR Client, who is the{' '}
          <span className="font-semibold text-gray-900">data controller</span>.
        </BodyP>
        <BodyP>HR Clients are responsible for:</BodyP>
        <BulletList
          items={[
            'Obtaining lawful consent from their employees to share such data with Welluber',
            'Ensuring the accuracy of employee data submitted to the platform',
            'Notifying Welluber of any data correction or deletion requests from employees',
          ]}
        />
        <BodyP>
          Welluber will process such data only as instructed by the HR Client and as necessary to deliver the platform services.
        </BodyP>

        <SectionTitle>5. How We Share Your Data</SectionTitle>
        <BodyP>We share personal data only where necessary:</BodyP>
        <BulletList
          items={[
            'Payment gateways — to process transactions on your behalf',
            'Cloud infrastructure providers — for platform hosting and data storage (see Section 6)',
            "HR Clients — employees' utilisation data is visible to their HR administrators within the scope of the configured benefit policy",
            'Regulatory and law enforcement authorities — where required by Malaysian law',
          ]}
        />
        <BodyP>We do not share personal data with unaffiliated third parties for marketing purposes.</BodyP>

        <SectionTitle>6. Where Your Data Is Stored</SectionTitle>
        <BodyP>
          Your data is hosted on infrastructure located in{' '}
          <span className="font-semibold text-gray-900">Malaysia and Singapore</span> (e.g. AWS Singapore region). Cross-border transfers to
          Singapore are made in compliance with Section 129 of the PDPA, and we apply appropriate safeguards to ensure your data receives
          equivalent protection.
        </BodyP>

        <SectionTitle>7. How Long We Keep Your Data</SectionTitle>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-gray-600">
                  Data Type
                </th>
                <th className="px-4 py-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-gray-600">
                  Retention Period
                </th>
              </tr>
            </thead>
            <tbody>
              {retentionRows.map((row) => (
                <tr key={row.dataType} className="border-t border-gray-200">
                  <td className="px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-gray-700">
                    {row.dataType}
                  </td>
                  <td className="px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-gray-700">
                    {row.retention}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <BodyP>
          Upon written request for account deletion, we will remove identifiable personal data except where retention is required by law.
        </BodyP>

        <SectionTitle>8. Your Rights Under PDPA</SectionTitle>
        <BodyP>You have the right to:</BodyP>
        <BulletList
          items={[
            'Access the personal data we hold about you',
            'Correct inaccurate or incomplete data',
            'Withdraw consent for non-essential processing (note: this may affect your ability to use certain platform features)',
            'Request deletion of your data, subject to legal retention requirements',
          ]}
        />
        <BodyP>
          To exercise any of these rights, contact us at{' '}
          <span className="font-semibold text-gray-900">privacy@welluber.com</span>. We will respond within{' '}
          <span className="font-semibold text-gray-900">21 days</span>.
        </BodyP>
        <BodyP>If you are an employee, your HR administrator may also submit data correction or deletion requests on your behalf.</BodyP>

        <SectionTitle>9. Data Security</SectionTitle>
        <BodyP>We implement technical and organisational measures to protect your personal data, including:</BodyP>
        <BulletList
          items={[
            'Encryption in transit (TLS) and at rest',
            'Role-based access controls',
            'Immutable audit logs',
            'Regular security assessments',
          ]}
        />
        <BodyP>
          No system is completely secure. In the event of a data breach affecting your personal data, we will notify affected parties in
          accordance with our obligations under Malaysian law.
        </BodyP>

        <SectionTitle>10. Cookies</SectionTitle>
        <BodyP>
          We use cookies and similar technologies to maintain session state, prevent fraud, and improve platform performance. We do not use
          third-party advertising cookies. You may disable cookies in your browser settings, though this may affect platform functionality.
        </BodyP>

        <SectionTitle>11. Changes to This Policy</SectionTitle>
        <BodyP>
          We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or in-platform
          notification at least <span className="font-semibold text-gray-900">14 days</span> before changes take effect. Continued use of the
          platform after that date constitutes acceptance of the updated policy.
        </BodyP>

        <SectionTitle>12. Contact Us</SectionTitle>
        <BodyP>
          <span className="font-semibold text-gray-900">Data Protection Officer</span>
          <br />
          Welluber Sdn Bhd
          <br />
          Kuala Lumpur, Malaysia
        </BodyP>
        <BodyP>
          Email: <span className="font-semibold text-gray-900">contact@welluber.com</span>
        </BodyP>

        <p className="mt-10 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-gray-500">
          <em>
            This Privacy Policy is governed by the laws of Malaysia. Any disputes arising from this policy shall be subject to the
            exclusive jurisdiction of the courts of Kuala Lumpur.
          </em>
        </p>
      </Container>
    </main>
  )
}

