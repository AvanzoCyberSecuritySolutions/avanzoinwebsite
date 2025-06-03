const servicesControl = [
    {
        title: "Cyber Law Consultancy",
        description: "Our cyber law consulting services ensure your website is legally compliant in India. We provide expert advice on legal rights and obligations, especially if you've received a warning letter. Focus on your business while we handle legal complexities related to IT and electronic commerce.",
        image: "src/images/service-image/cyber-law.png"
    },
    {
        title: "Internet Law and Regulations",
        description: "We help businesses comply with Indian internet laws. Whether you're starting out or facing legal challenges, our experts ensure your operations meet regulatory standards and your digital assets are protected.",
        image: "src/images/service-image/internet-law.png"
    },
    {
        title: "Data Recovery and Validation",
        description: "We design cyber security solutions like IAM, SIEM, and DLP. We analyze existing technical security infrastructures and suggest improvements based on industry standards and regulatory requirements. We also manage project activities and reporting.",
        image: "src/images/service-image/data-recovery.png"
    },
    {
        title: "IPR Consultancy",
        description: "We advise on website legal compliance, competitor warning letters, and other cyber law challenges related to intellectual property rights (IPR). Get cost-effective solutions tailored to IT and e-commerce regulations.",
        image: "src/images/service-image/ipr.png"
    },
    {
        title: "Data Security and Documentation",
        description: "We provide expert services in designing and analyzing cyber security systems, especially IAM, SIEM, and DLP. We recommend actions based on regulatory guidelines and manage project documentation and reporting.",
        image: "src/images/service-image/data-security.png"
    },
    {
        title: "Data Protection Law Consultancy",
        description: "We offer legal advisory services on data protection, including audits, compliance, and due diligence. Our experienced consultants help address your data privacy challenges without the need for in-house hiring.",
        image: "src/images/service-image/data-protection.png"
    },
    {
        title: "Privacy Policy Drafting",
        description: "We create enforceable and legally sound privacy policies for websites, mobile apps, and platforms. Our services ensure compliance with data protection laws and help avoid FTC or legal issues due to misleading policies.",
        image: "src/images/service-image/privacy-policy-draffting.png"
    },
    {
        title: "E-Commerce Consultancy",
        description: "Our ecommerce experts help you grow your online business by analyzing your store, developing marketing strategies, and increasing conversion rates. We offer tailored advice based on your niche, platform, and budget.",
        image: "src/images/service-image/e-commerce.png"
    },
    {
        title: "Digital Evidence",
        description: "We specialize in digital forensics investigations, including data recovery, documentation, and preservation of digital evidence for court use. Our expertise covers network intrusions, hacks, data breaches, and malware cases.",
        image: "src/images/service-image/digital-evidence.png"
    } 
]

const services = document.getElementById("services")

// Create and append service cards
servicesControl.forEach(service => {
    const serviceCard = document.createElement("div")
    serviceCard.className = "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8 flex flex-col items-center"
    
    const imageContainer = document.createElement("div")
    imageContainer.className = "w-24 h-24 mb-6 bg-blue-50 rounded-full p-4 flex items-center justify-center"
    
    const image = document.createElement("img")
    image.src = service.image
    image.alt = service.title
    image.className = "w-16 h-16 object-contain"
    
    const title = document.createElement("h3")
    title.className = "text-xl font-semibold text-gray-900 mb-3 text-center"
    title.textContent = service.title
    
    const description = document.createElement("p")
    description.className = "text-gray-600 text-center text-sm leading-relaxed"
    description.textContent = service.description
    
    imageContainer.appendChild(image)
    serviceCard.appendChild(imageContainer)
    serviceCard.appendChild(title)
    serviceCard.appendChild(description)
    
    services.appendChild(serviceCard)
})

// Update the services container to use grid layout
services.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 justify-items-center"