'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Facebook, Phone, Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WidgetSettings {
  whatsappNumber?: string;
  zaloNumber?: string;
  facebookUrl?: string;
  aiLawyerEnabled?: boolean;
}

export default function FloatingWidgets() {
  const [settings, setSettings] = useState<WidgetSettings>({
    whatsappNumber: '+84354658272',
    zaloNumber: '0354658272',
    facebookUrl: 'https://facebook.com',
    aiLawyerEnabled: true,
  });
  const [showAiChat, setShowAiChat] = useState(false);

  useEffect(() => {
    // Fetch widget settings from API
    fetch('/api/settings/widgets')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSettings(data.settings);
        }
      })
      .catch((error) => {
        console.error('Failed to load widget settings:', error);
      });
  }, []);

  const widgets = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      href: settings.whatsappNumber
        ? `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`
        : null,
      visible: !!settings.whatsappNumber,
    },
    {
      id: 'zalo',
      name: 'Zalo',
      icon: Phone,
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      href: settings.zaloNumber
        ? `https://zalo.me/${settings.zaloNumber.replace(/[^0-9]/g, '')}`
        : null,
      visible: !!settings.zaloNumber,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      href: settings.facebookUrl,
      visible: !!settings.facebookUrl,
    },
  ];

  return (
    <>
      {/* Floating Widget Buttons */}
      <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-3">
        {widgets
          .filter((widget) => widget.visible)
          .map((widget, index) => (
            <motion.a
              key={widget.id}
              href={widget.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${widget.bgColor} ${widget.hoverColor} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group`}
              title={widget.name}
            >
              <widget.icon className="w-6 h-6" />
              <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {widget.name}
              </span>
            </motion.a>
          ))}

        {/* AI Lawyer Widget */}
        {settings.aiLawyerEnabled && (
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: widgets.filter((w) => w.visible).length * 0.1 }}
            onClick={() => setShowAiChat(!showAiChat)}
            className="bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group relative"
            title="Free AI Lawyer"
          >
            <Bot className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Free AI Lawyer
            </span>
          </motion.button>
        )}
      </div>

      {/* AI Lawyer Chat Window */}
      <AnimatePresence>
        {showAiChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-6 bottom-24 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Legal Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowAiChat(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 h-96 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-700">
                      Hello! I'm your AI Legal Assistant for Vietnam business law. How can I help you today?
                    </p>
                    <div className="mt-3 space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors">
                        📋 TRC Application Process
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors">
                        🏢 Business Registration
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors">
                        💼 Work Permits & Visas
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors">
                        ⚖️ Corporate Legal Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                For urgent matters, please{' '}
                <a href="#contact-form" className="text-primary hover:underline">
                  contact us directly
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
