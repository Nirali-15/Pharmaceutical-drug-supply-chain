import React from "react";

const AboutPage = () => {
  return (
    <div style={{ padding: "50px", fontFamily: "Poppins, sans-serif", color: "#213555" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About PharmaTrust</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
      <b>Pharmaceutical Drug Supply Chain: Ensuring Safety and Trust in Medicine Distribution</b>
<p>The pharmaceutical drug supply chain plays a crucial role in the global healthcare system, ensuring that medicines are safely manufactured, transported, and delivered to patients. It is a complex process that involves multiple stakeholders, including manufacturers, distributors, pharmacies, and consumers. Any disruption or compromise in this chain can lead to serious issues, such as counterfeit drugs, theft, or mishandling of medicines.</p>

<h3>Why is the Project Needed?</h3>
<p>This project is designed to tackle two significant problems in the pharmaceutical industry: counterfeit drugs and improper storage conditions.</p>

<h3>Combatting Counterfeit Drugs</h3>
<p>Counterfeit medications are fake drugs that may contain harmful or inactive ingredients. The World Health Organization (WHO) estimates that one in ten medical products in low- and middle-income countries is substandard or falsified. These fake drugs not only fail to treat illnesses but can also cause severe health complications or death.

By using blockchain technology, your project aims to ensure the authenticity of medicines by allowing each transaction in the supply chain to be verified and recorded. Every stakeholder in the chain can trace the drug’s journey from manufacturing to the pharmacy, ensuring transparency and trust.</p>
By addressing these challenges, your project ensures a safer, more transparent, and reliable pharmaceutical supply chain.

<h3>How It Works</h3>
<p>The project consists of different roles—Manufacturer, Distributor, Pharmacy, and Consumer—with specific functionalities for each role

Manufacturers: Register new drugs and update details on production.
Distributors: Track shipments and verify drug authenticity during transportation.
Pharmacies: Ensure that received medicines are authentic and safe to sell.
Consumers: Verify the authenticity of medicines using QR or RFID codes.
Blockchain technology enables secure, immutable record-keeping for drug authenticity, while IoT monitoring enhances safety by ensuring proper storage conditions</p>

<h3>Why Now?</h3>
<p>The importance of drug traceability has grown significantly in recent years due to global crises like the COVID-19 pandemic. The distribution of vaccines highlighted the need for better tracking and transparency in pharmaceutical supply chains. Moreover, governments worldwide are enacting stricter regulations for drug traceability. For instance, the US Drug Supply Chain Security Act (DSCSA) mandates serialization and electronic tracking of prescription drugs across the supply chain to ensure authenticity.

Technological innovations like blockchain and IoT integration have gained widespread attention for their ability to transform the pharmaceutical supply chain. Companies like IBM and Pfizer are experimenting with blockchain networks to enhance transparency and accountability in drug distribution.</p>

<h3>Impact of the Project</h3>
<p>By implementing a Blockchain-Based Pharmaceutical Drug Supply Chain system, you can:

Protect Public Health: Ensure patients receive only authentic medicines.
Enhance Trust: Increase transparency for all stakeholders in the supply chain.
Improve Efficiency: Streamline operations and reduce the risk of errors or fraud.
Comply with Regulations: Help companies adhere to evolving legal requirements for drug tracking.</p>
      </p>
    </div>
  );
};

export default AboutPage;
