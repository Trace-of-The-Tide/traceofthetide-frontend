"use client"

import React from "react"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from "lucide-react"

interface FooterLinkProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

interface FooterSectionProps {
  title: string
  children: React.ReactNode
}

interface FooterItemProps {
  icon?: React.ReactNode
  primaryText: string
  secondaryText?: string
  href?: string
  onClick?: () => void
}

/**
 * Footer link component for navigation and external links
 */
function FooterLink({ children, href, onClick }: FooterLinkProps): React.JSX.Element {
  if (href) {
    return (
      <a
        href={href}
        className="text-white text-xs font-normal leading-none hover:text-gray-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className="text-white text-xs font-normal leading-none hover:text-gray-300 transition-colors text-left"
      type="button"
    >
      {children}
    </button>
  )
}

/**
 * Footer section component for organizing content
 */
function FooterSection({ title, children }: FooterSectionProps): React.JSX.Element {
  return (
    <div className="flex-1 flex flex-col justify-start items-start gap-4">
      <h3 className="text-gray-400 text-xs font-medium leading-none">
        {title}
      </h3>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        {children}
      </div>
    </div>
  )
}

/**
 * Footer item component for individual list items
 */
function FooterItem({ icon, primaryText, secondaryText, href, onClick }: FooterItemProps): React.JSX.Element {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <div className="w-5 h-5 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex flex-col justify-start items-start gap-2">
        <FooterLink href={href} onClick={onClick}>
          {primaryText}
        </FooterLink>
        {secondaryText && (
          <span className="text-gray-400 text-xs font-normal leading-none">
            {secondaryText}
          </span>
        )}
      </div>
    </div>
  )
}

/**
 * Social media icon component
 */
function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }): React.JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
      aria-label={label}
    >
      <div className="w-4 h-4 text-gray-400 hover:text-white transition-colors">
        {icon}
      </div>
    </a>
  )
}

/**
 * Main footer component
 */
export function Footer(): React.JSX.Element {
  const handlePrivacyPolicy = (): void => {
    // TODO: Implement privacy policy navigation
    console.log("Privacy Policy clicked")
  }

  const handleTermsOfService = (): void => {
    // TODO: Implement terms of service navigation
    console.log("Terms of Service clicked")
  }

  const handleGDPR = (): void => {
    // TODO: Implement GDPR navigation
    console.log("GDPR clicked")
  }

  return (
    <footer className="w-full p-10 flex flex-col justify-start items-start gap-6">
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        {/* Brand Section */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="w-12 h-6 bg-gradient-to-r from-[#C9A96E] to-transparent rounded-sm" />
          <div className="w-full max-w-80">
            <p className="text-white text-sm font-medium leading-tight">
              Trace of the tide{" "}
              <span className="text-gray-400 text-sm font-normal leading-tight">
                Preserving our collective memory through stories, testimonies, and cultural artifacts.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SocialIcon
              icon={<Facebook className="w-4 h-4" />}
              href="https://facebook.com"
              label="Facebook"
            />
            <SocialIcon
              icon={<Twitter className="w-4 h-4" />}
              href="https://twitter.com"
              label="Twitter"
            />
            <SocialIcon
              icon={<Instagram className="w-4 h-4" />}
              href="https://instagram.com"
              label="Instagram"
            />
            <SocialIcon
              icon={<Youtube className="w-4 h-4" />}
              href="https://youtube.com"
              label="YouTube"
            />
          </div>
        </div>
        {/* Palestine Section */}
        <FooterSection title="Palestine (Architecture of stories)">
          <FooterItem
            primaryText="🪨 Stone"
            secondaryText="Witness of life"
          />
          <FooterItem
            primaryText="🧂 Salt"
            secondaryText="Trace of time"
          />
          <FooterItem
            primaryText="🗺️ Compass"
            secondaryText="Trace of place"
          />
        </FooterSection>

        {/* Fields Section */}
        <FooterSection title="Fields (Mosaic of Baʿli trails)">
          <FooterItem
            primaryText="⚓ Harbour trails"
            secondaryText="Mujaawarah with Culture"
          />
          <FooterItem
            primaryText="🌿 Courtyard trails"
            secondaryText="Mujaawarah with Knowledge"
          />
          <FooterItem
            primaryText="🌕 Hill trails"
            secondaryText="Mujaawarah with Arts"
          />
        </FooterSection>

        {/* Contact Section */}
        <FooterSection title="Contact">
          <FooterItem
            icon={<Mail className="w-4 h-4 text-[#C9A96E]" />}
            primaryText="director@traceofthetides.org"
            href="mailto:director@traceofthetides.org"
          />
          <FooterItem
            icon={<MapPin className="w-4 h-4 text-[#C9A96E]" />}
            primaryText="Everywhere"
          />
        </FooterSection>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700" />

      {/* Bottom Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-xs font-normal leading-none">
          © 2025 Trace of the Tides. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <FooterLink onClick={handlePrivacyPolicy}>
            Privacy Policy
          </FooterLink>
          <span className="text-white text-xs font-normal leading-none">·</span>
          <FooterLink onClick={handleTermsOfService}>
            Terms of Service
          </FooterLink>
          <span className="text-white text-xs font-normal leading-none">·</span>
          <FooterLink onClick={handleGDPR}>
            GDPR
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}
