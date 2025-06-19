"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, GraduationCap, Briefcase, Code, Award, ExternalLink, Zap, Brain, Database, Bot } from "lucide-react"
import Chatbot from "./components/chatbot"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Custom CSS for slower pulse animation */}
      <style jsx>{`
        @keyframes slow-pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-slow-pulse {
          animation: slow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Subtle Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 backdrop-blur-sm bg-black/20 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-12">
              <div className="relative inline-block group">
                {/* Slower glowing ring effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-slow-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                <img
                  src="/images/linkedin-profile.jpg"
                  alt="Ibraheem Muhammad"
                  className="relative w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent mb-6">
              Ibraheem Muhammad
            </h1>
            <p className="text-2xl text-slate-300 mb-10 font-light">
              <span className="text-slate-200">Automation Developer</span> |{" "}
              <span className="text-slate-200">Business Analyst</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:IbraheemMuhammad117@gmail.com"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-slate-600/50 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-slate-300" />
                <span className="group-hover:text-slate-200 transition-colors">IbraheemMuhammad117@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/ibraheemmuhammad117"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-full border border-slate-500/30 text-white hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 text-slate-300" />
                <span className="group-hover:text-slate-200 transition-colors">
                  linkedin.com/in/ibraheemmuhammad117
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* About Me Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8 space-y-6 text-slate-300 leading-relaxed text-lg">
              <p className="hover:text-white transition-colors duration-300">
                As a tech-savvy Business Analyst with a background in Information Technology Systems from UT Dallas, I
                bring hands-on experience in data analysis, automation, and business intelligence. I've delivered
                results across both government and corporate environments—interning at USAID as a Data Analyst and RPA
                Developer, and now contributing at L3Harris Technologies.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                My toolkit includes Tableau, Alteryx, Microsoft Power BI, Microsoft Excel, and UiPath—tools I've used to
                drive process improvements, automate workflows, and transform raw data into actionable insights. I enjoy
                solving complex problems, streamlining operations, and enabling smarter decisions through data and
                automation.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                I'm passionate about continuous learning and building tech solutions that create real impact—for teams,
                organizations, and communities. Whether it's optimizing performance or developing tools that save hours
                of manual work, I thrive at the intersection of data, innovation, and meaningful change.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">The University of Texas at Dallas</h3>
                <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                  Jan 2023 – Dec 2024
                </Badge>
              </div>
              <p className="text-xl text-slate-300 mb-3">B.S. in Information Technology</p>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Specialization: Business Intelligence and Analytics</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Experience Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Professional Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            {/* L3Harris Technologies */}
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-slate-200 transition-colors">
                    L3Harris Technologies
                  </h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                    Jan 2025 – Present
                  </Badge>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-4">Associate Business Analyst</p>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">Tools:</span> Microsoft Power BI, Microsoft Excel, SAP,
                  Earned Value Metrics (CPI, SPI, EAC)
                </p>
              </CardContent>
            </Card>

            {/* USAID */}
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-slate-200 transition-colors">
                    USAID
                  </h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                    Jun 2024 – Dec 2024
                  </Badge>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-4">Digital Process Automation & Analyst Intern</p>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">Tools:</span> UiPath, Tableau, Excel, HR Connect, Process
                  Mapping
                </p>
              </CardContent>
            </Card>

            {/* NITCO Inc. */}
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-slate-200 transition-colors">
                    NITCO Inc.
                  </h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                    Aug 2023 – May 2024
                  </Badge>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-4">Robotic Process Automation Developer Intern</p>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">Skills:</span> Process Analysis, Data Manipulation,
                  Automation Design
                </p>
              </CardContent>
            </Card>

            {/* T-Mobile */}
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-slate-200 transition-colors">
                    T-Mobile
                  </h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                    Oct 2022 – Jan 2023
                  </Badge>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-4">Mobile Expert</p>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">Skills:</span> Sales Presentations, Negotiation, Customer
                  Service
                </p>
              </CardContent>
            </Card>

            {/* SecureIT Solutions */}
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-slate-200 transition-colors">
                    SecureIT Solutions
                  </h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 w-fit">
                    Apr 2021 – Aug 2021
                  </Badge>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-4">Social Media Marketing Intern</p>
                <p className="text-slate-400">
                  <span className="text-white font-semibold">Skills:</span> Content Creation, Digital Marketing, Project
                  Management, CRM, Social Media Analytics
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  Retail Analytics Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    In a Business Intelligence & Analytics course, the assignment involved converting a complex retail
                    dataset into a dashboard that tells a meaningful story. The data included product sales, returns,
                    and customer demographics but lacked clear insights.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Created an interactive Tableau dashboard that broke down performance by category, time period, and
                    region. Applied calculated fields and filters to highlight trends in customer behavior, seasonal
                    demand, and product return patterns. Focused on intuitive design and effective visual storytelling.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    The final dashboard was praised for its clarity, usability, and ability to guide decisions. It
                    helped uncover key insights and served as a strong example of how visualization can bring data to
                    life in business contexts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  VCare – Senior Care UX Prototype
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    A health-tech startup needed an intuitive application to help caregivers manage patient interactions
                    in senior living and hospice environments. The goal was to streamline robotic workflows while
                    capturing meaningful conversations between caregivers and patients.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">My Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Collaborated with a 6-person team to design a dark-themed mobile interface using Figma. Focused on
                    ease of use for elderly caregivers. Integrated advanced AI features to transcribe caregiver-patient
                    conversations in real-time and link that data to robotic task flows.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    Delivered complete low-fidelity wireframes 2 weeks ahead of project charter deadlines. Client chose
                    dark mode design unanimously. App design now serves as a blueprint for the next phase of
                    development, merging AI, RPA, and UX seamlessly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  PDF Invoice Data Scraping Bot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    Built an automation to simulate invoice processing by extracting structured data from thousands of
                    PDF files, aiming to eliminate repetitive data entry.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Designed a UiPath bot to loop through invoices, extract key fields using Read PDF Text and
                    Regex.Matches, and export the cleaned data into Excel.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    Processed over 1,000 invoices in under 15 minutes with zero errors, demonstrating how automation can
                    replace manual tasks and save significant time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  OCR-Based Receipt Digitization Bot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    Needed a way to digitize scanned receipts embedded in image-based PDFs that couldn't be processed
                    with standard extraction tools.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Utilized UiPath with Tesseract OCR to convert image-based receipts into machine-readable .txt files,
                    enabling downstream usage and compliance archiving.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    Converted 500+ receipts per run, enabling searchable digital documentation and reducing manual data
                    transcription.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  Real Estate Listings Scraper Bot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    Created an automation to track new real estate listings filtered by property type, price per square
                    foot, and location to assist with timely investment decisions.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Developed a UiPath bot that scraped property sites daily, calculated cost-per-sqft, and saved
                    results to Excel; automated via Orchestrator scheduling.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    Collected 100+ listings per day, streamlined the property scouting process, and delivered
                    prioritized investment insights.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group/card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover/card:text-slate-200 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  Multi-Platform Car Deal Analyzer Bot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Scenario:</h4>
                  <p className="text-slate-400 text-sm">
                    Aimed to automate the daily process of finding competitive used car deals across Cars.com, Carfax,
                    and Carvana.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Solution:</h4>
                  <p className="text-slate-400 text-sm">
                    Built a UiPath bot with filters for make, model, price, and mileage; extracted listings from three
                    platforms, compared options, and emailed daily summaries.
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h4 className="font-bold text-slate-200 mb-2">Results:</h4>
                  <p className="text-slate-400 text-sm">
                    Enabled consistent access to top deals with zero manual effort, automating the car comparison
                    process and improving decision-making.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Skills & Tools</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    RPA Platforms:
                  </h3>
                  <p className="text-slate-400">• UiPath (Studio, Assistant, Orchestrator)</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Analytics Tools:
                  </h3>
                  <p className="text-slate-400">• Power BI, Tableau, Alteryx, Microsoft Excel</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Automation Techniques:
                  </h3>
                  <p className="text-slate-400">
                    • Excel Automation, Regex, Email Automation (IMAP), OCR with Tesseract
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Web/Data:
                  </h3>
                  <p className="text-slate-400">• Web scraping, Data manipulation</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Process Design:
                  </h3>
                  <p className="text-slate-400">• Business Process Mapping, Change Management</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI Integration:
                  </h3>
                  <p className="text-slate-400">• AI Chatbot Concepts and Integration</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="group">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-600 to-slate-500 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Certifications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
          </div>
          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Microsoft PL-300 – Power BI Data Analyst</h3>
                  <Badge className="bg-gradient-to-r from-slate-600 to-slate-500 text-white border-0 animate-pulse">
                    In Progress
                  </Badge>
                </div>
                <div className="mt-4 lg:mt-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center animate-spin-slow">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm bg-black/20 border-t border-slate-700/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400">© 2025 Ibraheem Muhammad. All rights reserved.</p>
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
