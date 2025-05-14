import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Import a checkmark icon

const ServicesList: React.FC = () => {
  const preContractServices = [
    { name: 'Design', benefit: 'Innovative and cost-effective design solutions that optimize project outcomes and minimize risks.' },
    { name: 'Cost Plan/Cost Estimate throughout design stages', benefit: 'Accurate cost planning and estimation to maintain budget control from project inception.' },
    { name: 'Tender Documents (Bills of Quantities & Prime Document)', benefit: 'Comprehensive tender documents that ensure clarity and attract competitive bids.' },
    { name: 'Tender Packaging Strategy', benefit: 'Effective tender packaging strategies to maximize project value and efficiency.' },
    { name: 'Design Queries, Addendums, Post-Tender Clarifications', benefit: 'Expert handling of design queries and addendums for smooth project progression.' },
    { name: 'Tender Evaluations and Report', benefit: 'Thorough tender evaluations and reports to select the best contractors and suppliers.' },
    { name: 'Contract Documentation', benefit: 'Robust contract documentation that protects your interests and minimizes disputes.' },
    { name: 'Value Engineering', benefit: 'Value engineering techniques to optimize project costs without compromising quality or function.' },
    { name: 'Risk Management', benefit: 'Proactive risk management strategies to identify and mitigate potential project risks.' },
  ];

  const postContractServices = [
    { name: 'Supervision', benefit: 'Expert supervision to ensure quality workmanship and adherence to project specifications.' },
    { name: 'Managing Variations/Change Order', benefit: 'Efficient management of variations and change orders to control costs and maintain project timelines.' },
    { name: 'Cost Control and Monitoring', benefit: 'Rigorous cost control and monitoring to prevent budget overruns and ensure financial accountability.' },
    { name: 'Prepare Engineer Instruction', benefit: 'Clear and concise engineer instructions to guide construction activities and resolve technical issues.' },
    { name: 'Variation Order', benefit: 'Proper handling of variation orders to manage changes effectively and fairly.' },
    { name: 'Maintain Variation Log', benefit: 'Meticulous maintenance of variation logs for accurate record-keeping and dispute resolution.' },
    { name: 'Risk Registry', benefit: 'Comprehensive risk registry to track and manage potential project risks throughout the construction phase.' },
    { name: 'Payment Certificate', benefit: 'Timely and accurate payment certificates to ensure smooth contractor payments and maintain project momentum.' },
    { name: 'Monthly Financial Statement', benefit: 'Detailed monthly financial statements providing clear insights into project costs and financial performance.' },
    { name: 'Final Account', benefit: 'Accurate and comprehensive final account preparation for project closure and financial reconciliation.' },
    { name: 'As-Built drawings', benefit: 'Detailed as-built drawings that accurately reflect the completed project for future reference and maintenance.' },
  ];

  const ServiceItem: React.FC<{ service: { name: string; benefit: string } }> = ({ service }) => (
    <li className="flex items-start space-x-3 py-2">
      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
      <div>
        <span className="text-gray-700 font-ibm-plex-sans text-base font-semibold">{service.name}</span>
        <p className="text-gray-500 font-ibm-plex-sans text-sm">{service.benefit}</p>
      </div>
    </li>
  );

  return (
    <section className="py-8 lg:py-12"> {/* Adjusted padding as the main title is removed */}
      <div className="container mx-auto px-4">
        {/* The main title "Our Comprehensive Services" is removed from here */}
        {/* It's now handled in the parent ServicesPage.tsx */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-lato font-bold text-[#181D27] mb-6 text-center md:text-left">
              Pre-Contract Services
            </h3>
            <ul className="space-y-3">
              {preContractServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-lato font-bold text-[#181D27] mb-6 text-center md:text-left">
              Post-Contract Services
            </h3>
            <ul className="space-y-3">
              {postContractServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
