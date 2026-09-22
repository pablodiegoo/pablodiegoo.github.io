/**
 * telemetry.js — Lightweight client-side telemetry engine for GA4.
 *
 * Tracks high-intent professional and academic interactions:
 * - Curriculum Vitae PDF downloads (`download_cv`)
 * - Site language switches (`switch_language`)
 * - Publication abstract view / BibTeX copy (`explore_publication`)
 * - Outbound credential / institutional verification clicks (`verify_credential`)
 *
 * Designed with zero external dependencies and safe guards for ad-blocked environments.
 */

(function () {
  "use strict";

  function sendEvent(eventName, params) {
    if (typeof window.gtag === "function") {
      try {
        window.gtag("event", eventName, params);
      } catch (err) {
        // Fail silently in restricted or sandboxed contexts
      }
    }
  }

  function initTelemetry() {
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!target) return;

      // 1. Curriculum Vitae Downloads
      const cvLink = target.closest('a[href*=".pdf"], a[data-pdf-pt], a[data-pdf-en]');
      if (cvLink) {
        const href = cvLink.getAttribute("href") || "";
        if (href.includes("/assets/pdf/") || href.includes("CV_PabloDiego")) {
          const fileName = href.split("/").pop() || "";
          const isPt = href.includes("_PTBR") || href.includes("_pt");
          const isEn = href.includes("_EN") || href.includes("_en");
          const lang = isPt ? "pt-br" : isEn ? "en" : "unknown";
          let cvType = "custom";
          if (fileName.includes("Full")) cvType = "full";
          else if (fileName.includes("DataScience")) cvType = "data_science";
          else if (fileName.includes("MercadoFinanceiro")) cvType = "financial_markets";
          else if (fileName.includes("PesquisaOperacional")) cvType = "operations_research";

          sendEvent("download_cv", {
            file_name: fileName,
            cv_language: lang,
            cv_type: cvType,
            link_url: href,
          });
        }
      }

      // 2. Language Switcher
      const langLink = target.closest("a[title*='Switch to English'], a[title*='Mudar para Português'], .cv-lang-switcher button");
      if (langLink) {
        let targetLang = "unknown";
        if (langLink.hasAttribute("data-lang-btn")) {
          targetLang = langLink.getAttribute("data-lang-btn");
        } else {
          const text = (langLink.textContent || "").trim().toUpperCase();
          if (text === "EN") targetLang = "en";
          else if (text === "PT" || text === "PT-BR") targetLang = "pt-br";
        }
        sendEvent("switch_language", {
          target_language: targetLang,
        });
      }

      // 3. Publication Interactions (Abstracts & BibTeX)
      const abstractBtn = target.closest(".abstract.action-btn-pill");
      if (abstractBtn) {
        const pubItem = abstractBtn.closest(".pub-item");
        const pubKey = pubItem ? pubItem.id : "unknown";
        sendEvent("explore_publication", {
          action: "toggle_abstract",
          publication_id: pubKey,
        });
      }

      const bibtexBtn = target.closest(".bibtex.action-btn-pill");
      if (bibtexBtn) {
        const pubItem = bibtexBtn.closest(".pub-item");
        const pubKey = pubItem ? pubItem.id : "unknown";
        sendEvent("explore_publication", {
          action: "toggle_bibtex",
          publication_id: pubKey,
        });
      }

      // 4. Credential & External Authority Links
      const externalLink = target.closest("a[href^='http://'], a[href^='https://']");
      if (externalLink) {
        const href = externalLink.getAttribute("href") || "";
        let credentialType = null;

        if (href.includes("lattes.cnpq.br")) credentialType = "lattes";
        else if (href.includes("orcid.org")) credentialType = "orcid";
        else if (href.includes("ancord.org.br")) credentialType = "ancord";
        else if (href.includes("cvm.gov.br")) credentialType = "cvm";
        else if (href.includes("kaggle.com/pablodiegoo")) credentialType = "kaggle";
        else if (href.includes("github.com/pablodiegoo")) credentialType = "github_profile";

        if (credentialType) {
          sendEvent("verify_credential", {
            credential_type: credentialType,
            link_url: href,
          });
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTelemetry);
  } else {
    initTelemetry();
  }
})();
