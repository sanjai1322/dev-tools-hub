import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import Landing from "./pages/Landing.tsx";
import NotFound from "./pages/NotFound.tsx";
import Tools from "./pages/Tools.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import JsonFormatter from "./pages/tools/JsonFormatter.tsx";
import RegexTester from "./pages/tools/RegexTester.tsx";
import UuidGenerator from "./pages/tools/UuidGenerator.tsx";
import Base64Tool from "./pages/tools/Base64Tool.tsx";
import CodeDiff from "./pages/tools/CodeDiff.tsx";
import MarkdownPreview from "./pages/tools/MarkdownPreview.tsx";
import JwtDecoder from "./pages/tools/JwtDecoder.tsx";
import HashGenerator from "./pages/tools/HashGenerator.tsx";
import LoremGenerator from "./pages/tools/LoremGenerator.tsx";
import ColorConverter from "./pages/tools/ColorConverter.tsx";
import TimestampConverter from "./pages/tools/TimestampConverter.tsx";
import JwtGenerator from "./pages/tools/JwtGenerator.tsx";
import TextCaseConverter from "./pages/tools/TextCaseConverter.tsx";
import PasswordGenerator from "./pages/tools/PasswordGenerator.tsx";
import "./types/global.d.ts";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools/json" element={<JsonFormatter />} />
            <Route path="/tools/regex" element={<RegexTester />} />
            <Route path="/tools/uuid" element={<UuidGenerator />} />
            <Route path="/tools/base64" element={<Base64Tool />} />
            <Route path="/tools/diff" element={<CodeDiff />} />
            <Route path="/tools/markdown" element={<MarkdownPreview />} />
            <Route path="/tools/jwt" element={<JwtDecoder />} />
            <Route path="/tools/jwt-generator" element={<JwtGenerator />} />
            <Route path="/tools/hash" element={<HashGenerator />} />
            <Route path="/tools/lorem" element={<LoremGenerator />} />
            <Route path="/tools/color" element={<ColorConverter />} />
            <Route path="/tools/timestamp" element={<TimestampConverter />} />
            <Route path="/tools/text-case" element={<TextCaseConverter />} />
            <Route path="/tools/password" element={<PasswordGenerator />} />
            <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);