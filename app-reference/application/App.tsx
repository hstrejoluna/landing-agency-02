import React from 'react';
import { Header } from '@/application/components/Header';
import { Hero } from '@/application/components/Hero';
import { ServicesOverview } from '@/application/components/ServicesOverview';
import { ServiceSection } from '@/application/components/ServiceSection';
import { Testimonials } from '@/application/components/Testimonials';
// Team component removed but still available in components folder
// import { Team } from '@/application/components/Team';
import { Contact } from '@/application/components/Contact';
import { Footer } from '@/application/components/Footer';
import { Helmet } from '@/application/components/Helmet';
import { ThemeProvider } from '@/application/components/ThemeProvider';
import { LanguageProvider } from '@/application/components/LanguageProvider';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Helmet />
          <Header />
          <main>
            <Hero />
            <ServicesOverview />
            <ServiceSection 
              id="frontend"
              title="Front-End Development"
              description="Creating exceptional user experiences across all platforms"
              services={[
                { title: "Progressive Web Apps", description: "Fast, reliable, and engaging applications that work offline" },
                { title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android" },
                { title: "Desktop Apps", description: "High-performance desktop applications for Windows, macOS, and Linux" },
                { title: "Static Web Sites", description: "Fast-loading, secure, and SEO-friendly websites" },
                { title: "Landing Pages", description: "Conversion-focused pages designed to drive action" },
                { title: "SEO Optimization", description: "Improving visibility and organic traffic through search engines" },
                { title: "Accessibility", description: "Ensuring your digital products are usable by everyone" },
                { title: "Website Optimization", description: "Enhancing performance, speed, and user experience" },
                { title: "Digital Marketing", description: "Strategies to reach and engage your target audience" }
              ]}
              icon="Code"
            />
            <ServiceSection 
              id="backend"
              title="Back-End Development"
              description="Building robust, scalable infrastructure to power your applications"
              services={[
                { title: "API Development", description: "GraphQL, gRPC, REST, and SOAP APIs for seamless integration" },
                { title: "Microservices", description: "Distributed systems designed for scalability and flexibility" },
                { title: "Cloud Computing", description: "Leveraging cloud resources for maximum efficiency" },
                { title: "Virtualization", description: "Optimizing resource utilization through virtualization" },
                { title: "Containerization", description: "Docker, Kubernetes, and other containerization solutions" },
                { title: "Data Streaming", description: "Real-time data processing for immediate insights" },
                { title: "Server DevOps", description: "Automating infrastructure and deployment processes" },
                { title: "Telemetry & Observability", description: "Monitoring systems for performance and issues" },
                { title: "App Migrations", description: "Seamlessly transitioning applications to modern platforms" }
              ]}
              icon="Server"
              reversed={true}
            />
            <ServiceSection 
              id="data"
              title="Data Engineering"
              description="Transforming raw data into valuable business insights"
              services={[
                { title: "Data Analysis", description: "Extracting meaningful patterns and insights from your data" },
                { title: "ETL / ELT", description: "Extract, Transform, Load pipelines for efficient data processing" },
                { title: "Data Lake", description: "Centralized repositories that allow for data analytics at scale" },
                { title: "Data Warehousing", description: "Structured data storage optimized for analytics" },
                { title: "BI Dashboards", description: "Interactive visualizations for data-driven decision making" },
                { title: "Power BI / QuickSight", description: "Custom solutions using leading BI platforms" },
                { title: "Data Governance", description: "Ensuring data quality, privacy, and compliance" },
                { title: "Scaling Databases", description: "Solutions for handling growing data volumes efficiently" }
              ]}
              icon="Database"
            />
            <ServiceSection 
              id="cloud"
              title="Cloud Services (AWS)"
              description="Harnessing the power of AWS to drive innovation and efficiency"
              services={[
                { title: "Security", description: "IAM, WAF, Cognito-idp, and other security solutions" },
                { title: "Networking", description: "VPC, CloudFront, API Gateway, Elastic Beanstalk" },
                { title: "Database", description: "Aurora & RDS, DynamoDB, Redshift for all your data needs" },
                { title: "Computing", description: "EC2, Fargate, EKS, ECR, Lambda for reliable processing" },
                { title: "Data Services", description: "Glue, Lake Formation, Redshift, Athena, and more" }
              ]}
              icon="Cloud"
              reversed={true}
            />
            <Testimonials />
            {/* Team section removed but component file is still available */}
            <Contact />
          </main>
          <Footer />
          
          {/* Google Tag Manager (noscript) - for analytics integration */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX" 
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            ></iframe>
          </noscript>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}