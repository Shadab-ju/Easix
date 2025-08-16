const menuItems = [
    
    {
    name: "Services",
    path:"/services",
    src:"/images/icons/ChevronRight.png"
    },
        {
    name: "About Us",
    path:"/about_us",
    src:"/images/icons/ChevronRight.png"
    },
        {
    name: "Career",
    path:"/career",
    src:"/images/icons/ChevronRight.png"
    },
        {
    name: "Contact Us",
    path:"/contact_us",
    src:"/images/icons/ChevronRight.png"
    },
]

const serviceItems  = [
    {
        heading: "Hybrid Mobile App Development",
        src: "/images/assets/mobile development.svg",
        reasons : [
            "Build powerful, scalable apps with a seamless user experience across devices. We leverage technologies like Flutter and React Native to create feature-rich mobile applications",
            "Design is at the heart of user engagement. Our UI/UX team crafts interfaces that are not only visually appealing but also highly intuitive and user-friendly",
            "Have a legacy native app? We help you migrate it to a modern hybrid framework without compromising performance or features",
            "We build secure and scalable backend systems and APIs to power your app’s functionality and ensure seamless integration with third-party services",
            "Our job doesn’t end at launch. We provide ongoing maintenance, performance monitoring, and feature updates to keep your hybrid apps running smoothly"
        ]
    },
    {
        heading: "Custom Website Development",
        src: "/images/assets/web_development.svg",
        reasons : [
            "We build dynamic, responsive websites from the ground up — no templates, no shortcuts. Every site is tailored to your brand identity and business needs",
            "We develop powerful, interactive web applications that offer seamless experiences across browsers and devices — built for performance and scalability",
            "Launch a secure, high-converting online store with our custom e-commerce development services. We work with platforms like Shopify, WooCommerce, Magento, and custom builds",
            "Breathe new life into your outdated website with modern design, improved UX, and better performance",
            "Keep your site running smoothly with our ongoing support, updates, backups, and security checks"
        ]
    },
    {
        heading: "Vulnerability Assessment & Penetration Testing",
        src: "/images/assets/cybersecurity.svg",
        reasons : [
            "We simulate real-world cyberattacks to identify vulnerabilities in your systems, applications, and networks",
            "Focus on your business while we monitor and protect your IT environment around the clock",
            "Evaluate your current security posture and develop a strategy to mitigate business risks",
            "Secure your cloud infrastructure across AWS, Azure, and Google Cloud with best-in-class tools and practices",
            "When security incidents happen, speed and expertise matter. We act fast to contain threats and investigate breaches"
        ]
    },
    {
        heading: "Cloud Infrastructure Setup & Management",
        src: "/images/assets/cloud_architect.jpg",
        reasons : [
            "We design, deploy, and manage secure, high-performance cloud environments tailored to your business needs",
            "Seamlessly move your on-premise applications, data, and workloads to the cloud with minimal disruption",
            "Protect your cloud assets with end-to-end security frameworks and industry-aligned compliance protocols",
            "We build cloud-native and serverless applications that are resilient, scalable, and easy to manage",
            "Minimize downtime and ensure business continuity with robust disaster recovery plans"
        ]
    },
    {
        heading: "Data Science and Analytics",
        src: "/images/assets/data_science.svg",
        reasons : [
            "We help you define a clear roadmap for data maturity and transformation. From data readiness assessments to enterprise-wide data strategy — we have got you covered",
            "Go beyond reporting with models that forecast future outcomes and recommend optimal actions",
            "Launch a secure, high-converting online store with our custom e-commerce development services. Build intelligent systems that learn, adapt, and improve — from recommendation engines to fraud detection",
            "We ensure your data is clean, accessible, and scalable with robust architecture and automation",
            "Turn complex data into clear insights with dashboards and interactive reports"
        ]
    },
    {
        heading: "DevOps Consulting & Assessment",
        src: "/images/assets/devops.jpg",
        reasons : [
            "Understand where you stand and how to evolve. We provide tailored DevOps strategies aligned with your business goals",
            "Automate your build, test, and deployment workflows for faster and more reliable software releases",
            "Eliminate manual provisioning with infrastructure automation using modern IaC tools",
            "Package, deploy, and scale applications consistently across environments with Docker and Kubernetes",
            "Stay proactive with real-time system visibility and performance analytics"
        ]
    },
    {
        heading: "Custom Website Development",
        src: "/images/assets/web_development.svg",
        reasons : [
            "We build dynamic, responsive websites from the ground up — no templates, no shortcuts. Every site is tailored to your brand identity and business needs",
            "We develop powerful, interactive web applications that offer seamless experiences across browsers and devices — built for performance and scalability",
            "Launch a secure, high-converting online store with our custom e-commerce development services. We work with platforms like Shopify, WooCommerce, Magento, and custom builds",
            "Breathe new life into your outdated website with modern design, improved UX, and better performance",
            "Keep your site running smoothly with our ongoing support, updates, backups, and security checks"
        ]
    },
    {
        heading: "Custom Website Development",
        src: "/images/assets/web_development.svg",
        reasons : [
            "We build dynamic, responsive websites from the ground up — no templates, no shortcuts. Every site is tailored to your brand identity and business needs",
            "We develop powerful, interactive web applications that offer seamless experiences across browsers and devices — built for performance and scalability",
            "Launch a secure, high-converting online store with our custom e-commerce development services. We work with platforms like Shopify, WooCommerce, Magento, and custom builds",
            "Breathe new life into your outdated website with modern design, improved UX, and better performance",
            "Keep your site running smoothly with our ongoing support, updates, backups, and security checks"
        ]
    },
]
const homeServiceItems=[
    {
        src: "/images/assets/mobile development.svg",
        heading: "Mobile App Development",
        description: "From iOS to Android, we build native and cross-platform mobile applications that deliver seamless user experiences"
    },
    {
        src: "/images/assets/web_development.svg",
        heading: "Web Development",
        description: "We create responsive, fast, and secure websites and web apps using modern frameworks and best practices"
    },
    {
        src: "/images/assets/cybersecurity.svg",
        heading: "Cyber Security",
        description: "Comprehensive security assessments, threat mitigation, and compliance strategies to protect your digital assets"
    },
    {
        src: "/images/assets/cloud_architect.jpg",
        heading: "Cloud Solutions",
        description: "Cloud architecture design, migration, and management on AWS, Azure, and Google Cloud for scalable and secure infrastructure"
    },
    {
        src: "/images/assets/data_science.svg",
        heading: "Data Science",
        description: "Turn raw data into actionable insights with machine learning, data visualization, and predictive analytics solutions"
    },
    {
        src: "/images/assets/devops.jpg",
        heading: "Devops and CI/CD",
        description: "We automate and optimize development pipelines, ensuring faster deployments, better testing, and improved scalability"
    },
]
export {menuItems, serviceItems, homeServiceItems}