"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, Bot, User, Mail } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface ContactForm {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Ibraheem's AI assistant. Ask me about his experience, projects, or skills! You can also use the contact form to send him a direct message.",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Hide pulse after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  // Log chat interaction
  const logChatInteraction = async (userMessage: string, botResponse: string) => {
    try {
      await fetch("/api/chat-logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "chat_interaction",
          userMessage,
          botResponse,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      })
    } catch (error) {
      console.error("Failed to log chat interaction:", error)
    }
  }

  // Log contact form submission
  const logContactSubmission = async (formData: ContactForm) => {
    try {
      await fetch("/api/chat-logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact_form",
          formData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      })
    } catch (error) {
      console.error("Failed to log contact submission:", error)
    }
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Contact form trigger
    if (
      message.includes("contact") ||
      message.includes("message") ||
      message.includes("email") ||
      message.includes("reach out") ||
      message.includes("get in touch")
    ) {
      setTimeout(() => setShowContactForm(true), 1000)
      return "I'd be happy to help you get in touch with Ibraheem! I'm opening a contact form where you can send him a direct message. You can also reach him at IbraheemMuhammad117@gmail.com or LinkedIn."
    }

    // Experience questions
    if (message.includes("experience") || message.includes("work") || message.includes("job")) {
      return "Ibraheem currently works as an Associate Business Analyst at L3Harris Technologies. He previously interned at USAID as a Digital Process Automation & Analyst Intern, and has experience at NITCO Inc. as an RPA Developer. He specializes in automation, data analysis, and business intelligence."
    }

    // Skills questions
    if (message.includes("skill") || message.includes("tool") || message.includes("technology")) {
      return "Ibraheem's key skills include UiPath RPA development, Tableau & Power BI for analytics, Microsoft Excel automation, OCR with Tesseract, web scraping, and business process mapping. He's also pursuing Microsoft PL-300 Power BI certification."
    }

    // Projects questions
    if (message.includes("project") || message.includes("automation") || message.includes("bot")) {
      return "Ibraheem has built several impressive automation projects including: PDF Invoice Data Scraping Bot (1000+ invoices in 15 min), OCR Receipt Digitization Bot, Real Estate Scraper Bot, Multi-Platform Car Deal Analyzer, and the VCare Senior Care UX Prototype. He also created a Retail Analytics Dashboard using Tableau."
    }

    // Education questions
    if (
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("university") ||
      message.includes("school")
    ) {
      return "Ibraheem graduated from The University of Texas at Dallas with a B.S. in Information Technology, specializing in Business Intelligence and Analytics (Jan 2023 – Dec 2024)."
    }

    // RPA/UiPath specific
    if (message.includes("uipath") || message.includes("rpa") || message.includes("robotic")) {
      return "Ibraheem is highly skilled in UiPath RPA development. He's built multiple production bots including invoice processing, OCR receipt digitization, and web scraping automations. He has experience with UiPath Studio, Assistant, and Orchestrator for enterprise deployments."
    }

    // Analytics/BI questions
    if (
      message.includes("analytics") ||
      message.includes("tableau") ||
      message.includes("power bi") ||
      message.includes("dashboard")
    ) {
      return "Ibraheem excels in business intelligence and analytics using Tableau, Power BI, and Alteryx. He created a comprehensive Retail Analytics Dashboard that was praised for its clarity and storytelling. He's currently pursuing Microsoft PL-300 Power BI certification."
    }

    // Hiring/availability questions
    if (message.includes("hire") || message.includes("available") || message.includes("opportunity")) {
      setTimeout(() => setShowContactForm(true), 1000)
      return "Ibraheem is always interested in discussing new opportunities! I'm opening a contact form so you can reach out directly with details about your opportunity. He typically responds within 24 hours."
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Ibraheem has extensive experience in automation and business analysis. Would you like to know about his specific projects or skills? Or would you like to contact him directly?",
      "I'd be happy to help! You can ask me about Ibraheem's work experience, automation projects, technical skills, or use the contact form to send him a message.",
      "Great question! Ibraheem specializes in RPA development, data analytics, and business intelligence. What specific area interests you most? I can also help you get in touch with him directly.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      async () => {
        const botResponseText = getBotResponse(currentInput)
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)

        // Log the interaction
        await logChatInteraction(currentInput, botResponseText)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send contact form data
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        // Log the contact form submission
        await logContactSubmission(contactForm)

        // Add success message to chat
        const successMessage: Message = {
          id: Date.now().toString(),
          text: `Thanks ${contactForm.name}! Your message has been sent to Ibraheem. He'll get back to you at ${contactForm.email} within 24 hours.`,
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, successMessage])

        // Reset form
        setContactForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        })
        setShowContactForm(false)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, there was an error sending your message. Please try emailing Ibraheem directly at IbraheemMuhammad117@gmail.com",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactFormChange = (field: keyof ContactForm, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* AI Chatbot Notification Banner */}
      {!isOpen && showPulse && (
        <div className="fixed bottom-28 right-6 z-40 max-w-xs">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-3 rounded-lg shadow-2xl border border-slate-600/50 animate-pulse">
            <div className="flex items-center gap-2 mb-1">
              <Bot className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-semibold">AI Assistant Available</span>
            </div>
            <p className="text-xs text-slate-300">Ask me about Ibraheem's experience!</p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-slate-800 transform rotate-45 border-r border-b border-slate-600/50"></div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowPulse(false)
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 shadow-2xl border-2 border-slate-400/20 group"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-6 z-40 w-96 h-[500px] bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <CardHeader className="pb-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-lg">
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-slate-300" />
                <span>Chat with Ibraheem's AI</span>
              </div>
              <Button
                onClick={() => setShowContactForm(!showContactForm)}
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 relative group"
              >
                <Mail className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse group-hover:bg-yellow-400"></div>
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[420px]">
            {!showContactForm ? (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? "bg-slate-800 text-slate-200 border border-slate-700/50"
                            : "bg-gradient-to-r from-slate-600 to-slate-500 text-white"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.isBot && <Bot className="w-4 h-4 mt-0.5 text-slate-400" />}
                          {!message.isBot && <User className="w-4 h-4 mt-0.5 text-slate-200" />}
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800 text-slate-200 border border-slate-700/50 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-slate-400" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about Ibraheem's experience..."
                      className="flex-1 bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400"
                      size="icon"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Contact Form */
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Ibraheem a Message
                  </h3>
                  <p className="text-slate-400 text-sm">He'll respond within 24 hours!</p>
                </div>

                <form onSubmit={handleContactFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={contactForm.name}
                      onChange={(e) => handleContactFormChange("name", e.target.value)}
                      required
                      className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email *"
                      value={contactForm.email}
                      onChange={(e) => handleContactFormChange("email", e.target.value)}
                      required
                      className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <Input
                      placeholder="Company (Optional)"
                      value={contactForm.company}
                      onChange={(e) => handleContactFormChange("company", e.target.value)}
                      className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <Input
                      placeholder="Phone (Optional)"
                      value={contactForm.phone}
                      onChange={(e) => handleContactFormChange("phone", e.target.value)}
                      className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message *"
                      value={contactForm.message}
                      onChange={(e) => handleContactFormChange("message", e.target.value)}
                      required
                      rows={4}
                      className="bg-slate-900/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-slate-500 resize-none"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      Back to Chat
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !contactForm.name || !contactForm.email || !contactForm.message}
                      className="flex-1 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}
