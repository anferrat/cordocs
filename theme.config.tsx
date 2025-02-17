import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        viewBox="0 0 56 56" width="24" height="24">
        <path fill="#7186C7" d="M46.7,56.4H9.2c-5.2,0-9.3-4.2-9.3-9.3V9.5c0-5.2,4.2-9.3,9.3-9.3h37.5c5.2,0,9.3,4.2,9.3,9.3V47
	C56,52.2,51.8,56.4,46.7,56.4z"/>
        <path fill="#FFFFFF" d="M44,16.7L30,8.8c-1.2-0.7-2.8-0.7-4,0l-14,7.9c-1.3,0.7-2,2.1-2,3.5v0.3c0,10.9,5.9,21,15.4,26.4l0.6,0.3
	c0.6,0.3,1.3,0.5,2,0.5s1.4-0.2,2-0.5l0.6-0.3C40.1,41.5,46,31.4,46,20.5v-0.3C46,18.7,45.3,17.4,44,16.7z M32.5,34.9
	c-1.2,1.5-2.8,2.3-4.6,2.2c-1.7,0-3.3-0.9-4.5-2.3c-2.5-3.1-2.4-7.9,0.1-11l3.9-4.7c0.2-0.2,0.4-0.3,0.6-0.3s0.4,0.1,0.6,0.3
	l3.9,4.8C35,27,35,31.9,32.5,34.9z"/>
        <path fill="#FFFFFF" d="M32.8,29.4c0,0.4,0.2,3.5-2.3,5.5c-0.9,0.7-1.9,1-2.6,1.2" />
      </svg>
      <span style={{ marginLeft: 8 }}>Corpad Docs</span>
    </>
  ),
  project: {
    link: "https://github.com/anferrat/cordocs",
    icon: null
  },
  docsRepositoryBase: "https://github.com/anferrat/cordocs",
  footer: {
    text: "Corpad, 2024. Created by Andrei Lomtev",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/')
      return {
        titleTemplate: '%s – Corpad Docs'
      }
    else
      return {
        titleTemplate: "Corpad Docs"
      }
  },
  darkMode: true,
  faviconGlyph: 'C'
};

export default config;
