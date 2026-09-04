"use client";

export default function WhatsAppButton({
  phone = "244974636955",
  size = 60,
  tooltip = "Fale connosco no WhatsApp",
  message = "Olá! Gostaria de saber mais sobre os serviços da Daxorya.",
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute right-full top-1/2 mr-3
          hidden -translate-y-1/2 whitespace-nowrap
          rounded-md border border-slate-200 bg-white
          px-3 py-2 text-sm font-medium text-slate-950
          shadow-lg
          group-hover:block
        "
      >
        {tooltip}
      </span>

      {/* Pulso externo */}
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />

      {/* Botão */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltip}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="
          relative flex items-center justify-center
          rounded-full bg-green-500
          text-white
          shadow-lg shadow-green-500/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-green-600
          hover:shadow-xl hover:shadow-green-500/25
          focus:outline-none
          focus:ring-2 focus:ring-green-500/50
          focus:ring-offset-2
        "
      >
        <i className="fab fa-whatsapp text-2xl" />
      </a>
    </div>
  );
}
