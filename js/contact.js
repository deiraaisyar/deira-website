/* ===========================================================
   contact.js — form submit via fetch + Formspree
   initContact() is called by main.js after sections are loaded.
   =========================================================== */

function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector(".contact-submit");

  function setStatus(messageKey, type) {
    if (!status) return;
    status.textContent = t(messageKey);
    status.className = "form-status " + (type || "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Guard against the un-configured placeholder endpoint.
    if (form.action.includes("YOUR_FORM_ID")) {
      setStatus("contact.error", "error");
      console.warn(
        "Formspree endpoint not configured — replace YOUR_FORM_ID in sections/contact.html"
      );
      return;
    }

    const originalLabel = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.sending");
    }
    setStatus("", "");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("contact.success", "success");
        form.reset();
      } else {
        setStatus("contact.error", "error");
      }
    } catch (err) {
      setStatus("contact.error", "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel || t("contact.send");
      }
    }
  });
}
