import emailjs from "@emailjs/browser";

const requiredEnvVars = {
  serviceId: "VITE_APP_EMAILJS_SERVICE_ID",
  templateId: "VITE_APP_EMAILJS_TEMPLATE_ID",
  publicKey: "VITE_APP_EMAILJS_PUBLIC_KEY",
};

const validateEnvironment = () => {
  const missing = [];

  Object.entries(requiredEnvVars).forEach(([key, envVar]) => {
    if (!import.meta.env[envVar]) {
      missing.push(envVar);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};

export const sendEmail = async (formData) => {
  try {
    validateEnvironment();

    const response = await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: "Abhishek Kumar",
        from_email: formData.email,
        to_email: "abhishekbit2002@gmail.com",
        message: formData.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      message: "Email sent successfully!",
      data: response,
    };
  } catch (error) {
    console.error("Email service error:", error);
    return {
      success: false,
      message:
        error.message || "Failed to send email. Please try again later.",
      error,
    };
  }
};
