"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, RefreshCw, Calendar, User, Globe } from "lucide-react"

interface ChatLog {
  type: "chat_interaction" | "contact_form"
  timestamp: string
  userAgent: string
  url: string
  userMessage?: string
  botResponse?: string
  formData?: any
}

interface LogsResponse {
  success: boolean
  logs: ChatLog[]
  totalInteractions: number
  totalContactForms: number
}

export default function AdminLogs() {
  const [logs, setLogs] = useState<ChatLog[]>([])
  const [stats, setStats] = useState({ totalInteractions: 0, totalContactForms: 0 })
  const [loading, setLoading] = useState(true)

  const fetchLogs = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/chat-logs")
      const data: LogsResponse = await response.json()

      if (data.success) {
        setLogs(data.logs.reverse()) // Show newest first
        setStats({
          totalInteractions: data.totalInteractions,
          totalContactForms: data.totalContactForms,
        })
      }
    } catch (error) {
      console.error("Failed to fetch logs:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [])

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  const getBrowserInfo = (userAgent: string) => {
    if (userAgent.includes("Chrome")) return "Chrome"
    if (userAgent.includes("Firefox")) return "Firefox"
    if (userAgent.includes("Safari")) return "Safari"
    if (userAgent.includes("Edge")) return "Edge"
    return "Unknown"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Chatbot Analytics</h1>
            <p className="text-slate-400">Monitor visitor interactions and contact form submissions</p>
          </div>
          <Button
            onClick={fetchLogs}
            disabled={loading}
            className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Chat Interactions</p>
                  <p className="text-2xl font-bold text-white">{stats.totalInteractions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Contact Forms</p>
                  <p className="text-2xl font-bold text-white">{stats.totalContactForms}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Total Visitors</p>
                  <p className="text-2xl font-bold text-white">{logs.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logs */}
        <Card className="bg-white/5 backdrop-blur-sm border border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-2 border-slate-600 border-t-white rounded-full mx-auto mb-4"></div>
                <p className="text-slate-400">Loading logs...</p>
              </div>
            ) : logs.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No interactions yet</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`${
                            log.type === "chat_interaction"
                              ? "bg-blue-600/20 text-blue-300 border-blue-600/30"
                              : "bg-green-600/20 text-green-300 border-green-600/30"
                          }`}
                        >
                          {log.type === "chat_interaction" ? (
                            <>
                              <MessageCircle className="w-3 h-3 mr-1" /> Chat
                            </>
                          ) : (
                            <>
                              <Mail className="w-3 h-3 mr-1" /> Contact
                            </>
                          )}
                        </Badge>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(log.timestamp)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Globe className="w-3 h-3" />
                        {getBrowserInfo(log.userAgent)}
                      </div>
                    </div>

                    {log.type === "chat_interaction" ? (
                      <div className="space-y-2">
                        <div className="p-2 bg-slate-700/50 rounded text-sm">
                          <span className="text-slate-400">User: </span>
                          <span className="text-white">{log.userMessage}</span>
                        </div>
                        <div className="p-2 bg-slate-600/50 rounded text-sm">
                          <span className="text-slate-400">Bot: </span>
                          <span className="text-slate-200">{log.botResponse}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Name: </span>
                            <span className="text-white">{log.formData?.name}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Email: </span>
                            <span className="text-white">{log.formData?.email}</span>
                          </div>
                          {log.formData?.company && (
                            <div>
                              <span className="text-slate-400">Company: </span>
                              <span className="text-white">{log.formData.company}</span>
                            </div>
                          )}
                          {log.formData?.phone && (
                            <div>
                              <span className="text-slate-400">Phone: </span>
                              <span className="text-white">{log.formData.phone}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-2 bg-slate-700/50 rounded text-sm">
                          <span className="text-slate-400">Message: </span>
                          <span className="text-white">{log.formData?.message}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
