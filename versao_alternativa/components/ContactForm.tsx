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
  } = useForm<FormData>({ mode: "onBlur" });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Obrigado! Entraremos em contato nas próximas 24 horas.");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Erro ao enviar. Tente novamente ou envie um email.");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Nome
        </label>
        <input
          type="text"
          {...register("name", { required: "Nome é obrigatório" })}
          className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
          placeholder="Seu nome"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido" },
            })}
            className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Empresa
          </label>
          <input
            type="text"
            {...register("company", { required: "Empresa é obrigatória" })}
            className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
            placeholder="Sua empresa"
          />
          {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Setor
        </label>
        <select
          {...register("industry", { required: "Setor é obrigatório" })}
          className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
        >
          <option value="" className="bg-gray-900 text-white">Selecione seu setor</option>
          <option value="healthcare" className="bg-gray-900 text-white">Saúde</option>
          <option value="engineering" className="bg-gray-900 text-white">Engenharia</option>
          <option value="saas" className="bg-gray-900 text-white">SaaS</option>
          <option value="retail" className="bg-gray-900 text-white">Varejo</option>
          <option value="financial" className="bg-gray-900 text-white">Financeiro</option>
          <option value="other" className="bg-gray-900 text-white">Outro</option>
        </select>
        {errors.industry && <p className="text-red-400 text-sm mt-1">{errors.industry.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Mensagem
        </label>
        <textarea
          {...register("message", {
            required: "Mensagem é obrigatória",
            minLength: { value: 10, message: "Mínimo 10 caracteres" },
          })}
          rows={4}
          className="w-full px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-100 resize-none"
          placeholder="Conte-nos sobre suas necessidades..."
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {submitStatus !== "idle" && (
        <div className={`p-4 rounded-lg text-sm ${
          submitStatus === "success"
            ? "bg-green-900/30 text-green-300 border border-green-500/50"
            : submitStatus === "error"
            ? "bg-red-900/30 text-red-300 border border-red-500/50"
            : "bg-blue-900/30 text-blue-300 border border-blue-500/50"
        }`}>
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "loading"}
        className="w-full button-primary disabled:opacity-50"
      >
        {isSubmitting || submitStatus === "loading" ? "Enviando..." : "Agendar Auditoria Gratuita"}
      </button>
    </form>
  );
}
