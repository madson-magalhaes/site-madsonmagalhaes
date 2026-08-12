"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Obrigado! Entraremos em contato em breve."
        );
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Error sending message. Please try again or email us directly."
      );
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-brand-text-primary mb-2">
          Nome
        </label>
        <input
          type="text"
          {...register("name", { required: "Nome é obrigatório" })}
          className="w-full px-4 py-2 bg-brand-dark-secondary/50 border border-brand-orange/30 rounded-lg text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition"
          placeholder="Seu nome"
        />
        {errors.name && (
          <p className="text-semantic-red text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            className="w-full px-4 py-2 bg-brand-dark-secondary/50 border border-brand-orange/30 rounded-lg text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="text-semantic-red text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-text-primary mb-2">
            Empresa
          </label>
          <input
            type="text"
            {...register("company", { required: "Empresa é obrigatória" })}
            className="w-full px-4 py-2 bg-brand-dark-secondary/50 border border-brand-orange/30 rounded-lg text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition"
            placeholder="Sua empresa"
          />
          {errors.company && (
            <p className="text-semantic-red text-sm mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-text-primary mb-2">
          Setor
        </label>
        <select
          {...register("industry", { required: "Setor é obrigatório" })}
          className="w-full px-4 py-2 bg-brand-dark-secondary/50 border border-brand-orange/30 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-orange transition"
        >
          <option value="">Selecione seu setor</option>
          <option value="healthcare">Clínica de Saúde</option>
          <option value="engineering">Engenharia/Construção</option>
          <option value="saas">SaaS/Software</option>
          <option value="retail">Varejo/E-commerce</option>
          <option value="financial">Serviços Financeiros</option>
          <option value="other">Outro</option>
        </select>
        {errors.industry && (
          <p className="text-semantic-red text-sm mt-1">
            {errors.industry.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-text-primary mb-2">
          Mensagem
        </label>
        <textarea
          {...register("message", {
            required: "Mensagem é obrigatória",
            minLength: { value: 10, message: "Mensagem deve ter no mínimo 10 caracteres" },
          })}
          rows={4}
          className="w-full px-4 py-2 bg-brand-dark-secondary/50 border border-brand-orange/30 rounded-lg text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:border-brand-orange transition resize-none"
          placeholder="Conte-nos sobre seus desafios de atendimento..."
        />
        {errors.message && (
          <p className="text-semantic-red text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus !== "idle" && (
        <div
          className={`p-4 rounded-lg text-sm ${
            submitStatus === "success"
              ? "bg-semantic-green/20 text-semantic-green"
              : submitStatus === "error"
              ? "bg-semantic-red/20 text-semantic-red"
              : "bg-brand-orange/20 text-brand-orange"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "loading"}
        className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting || submitStatus === "loading"
          ? "Enviando..."
          : "Enviar Mensagem"}
      </button>

    </form>
  );
}
