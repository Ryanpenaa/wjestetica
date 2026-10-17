import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Camera, MapPin, Instagram, ChevronRight, ShieldCheck, BadgeCheck, Star, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5581994397889?text=" + encodeURIComponent("Olá! Vim pelo Instagram da Estética WJ e gostaria de agendar uma lavagem para meu veículo. Podem me informar os horários disponíveis e os valores?");
const instagram = "https://www.instagram.com/estetica_wj01/";
const maps = "https://www.google.com/maps?q=-8.0788107,-36.0414314";

const links = [
  { title: "Agendar Lavagem", description: "Fale com a gente pelo WhatsApp", url: whatsapp, Icon: CalendarDays, primary: true },
  { title: "Galeria de Resultados", description: "Veja nossos trabalhos no Instagram", url: instagram, Icon: Camera, primary: false },
  { title: "Onde Estamos", description: "Abra nossa localização no mapa", url: maps, Icon: MapPin, primary: false },
];
const benefits = [
  { title: "Atendimento de confiança", Icon: BadgeCheck },
  { title: "Qualidade comprovada", Icon: ShieldCheck },
  { title: "Resultados que impressionam", Icon: Star },
  { title: "Cuidado de verdade", Icon: HeartHandshake },
];

function Index() {
  return (
    <main style={{ minHeight: "100svh", background: "radial-gradient(ellipse at 50% 0%, #063858 0%, #080e16 40%, #050608 82%)", color: "#fff", fontFamily: "Inter, system-ui, Arial, sans-serif", padding: "18px 14px 32px" }}>
      <div style={{ maxWidth: 470, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 22 }}>
          <img src="/BANNER2.png" alt="Logo Estética WJ" style={{ display: "block", width: "100%", maxWidth: 340, height: 300, objectFit: "contain", margin: "10px auto 0", filter: "drop-shadow(0 3px 26px #0abdf966)" }} />
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: ".05em", margin: "0 0 7px", textTransform: "uppercase" }}>Estética WJ</h1>
          <p style={{ color: "#b3c4d1", margin: "0 0 24px", fontSize: 14, lineHeight: 1.6 }}>Seu veículo merece esse cuidado!<br/>🚘 Carros &nbsp;•&nbsp; 🏍️ Motos &nbsp;•&nbsp; 🚐 Vans</p>
        </header>
        <section style={{ border: "1px solid #23333d", background: "#0c0f13", borderRadius: 24, padding: 14, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", padding: "2px 2px 15px", gap: 12 }}>
            <div><div style={{ fontSize: 9, fontWeight: 750, color: "#859ead", letterSpacing: "0.24em", marginBottom: 4 }}>ACESSO RÁPIDO</div><h2 style={{ fontSize: 17, fontWeight: 850, margin: 0 }}>Escolha uma opção</h2></div>
            <span style={{ border: "1px solid #0d84b5", color: "#58d7ff", background: "#063247", borderRadius: 999, fontSize: 9, padding: "5px 10px", fontWeight: 850, whiteSpace: "nowrap" }}>LINK NA BIO</span>
          </div>
          <nav aria-label="Links rápidos" style={{ display: "grid", gap: 10 }}>
            {links.map(({ title, description, url, Icon, primary }) => (
              <a key={title} href={url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 69, padding: "11px 12px", borderRadius: 16, textDecoration: "none", color: "white", background: primary ? "linear-gradient(110deg,#06bfea,#0983cd)" : "#171b20", border: "1px solid " + (primary ? "#43dafe" : "#313841"), boxShadow: primary ? "0 8px 25px #06bfe924" : "none" }}>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: primary ? "#067faa" : "#093044", color: primary ? "#fff" : "#2dcfff", display: "grid", placeItems: "center", flexShrink: 0 }}><Icon size={21}/></span>
                <span style={{ display: "grid", gap: 4, flex: 1, minWidth: 0 }}><strong style={{ fontSize: 14 }}>{title}</strong><span style={{ fontSize: 11, color: primary ? "#e5faff" : "#a6b6c5" }}>{description}</span></span>
                <ChevronRight size={18} style={{ flexShrink: 0, opacity: .8 }}/>
              </a>
            ))}
          </nav>
        </section>
        <section style={{ border: "1px solid #23333d", background: "#0c0f13", borderRadius: 24, padding: "19px 14px 14px" }}>
          <h2 style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", textAlign: "center", color: "#5ed8ff", margin: "0 0 16px" }}>POR QUE ESCOLHER A GENTE</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 10 }}>
            {benefits.map(({ title, Icon }) => <div key={title} style={{ background: "#11171c", border: "1px solid #2a343d", borderRadius: 15, minHeight: 95, padding: 11, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
              <span style={{ border: "1px solid #086b98", borderRadius: 50, padding: 7, color: "#2acbff", background: "#082637", display: "inline-flex" }}><Icon size={18}/></span><strong style={{ fontSize: 12, lineHeight: 1.3 }}>{title}</strong>
            </div>)}
          </div>
        </section>
        <footer style={{ textAlign: "center", padding: "21px 0 5px", fontSize: 11, color: "#9aaebd" }}>
          <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Estética WJ" style={{ display: "inline-flex", padding: 11, border: "1px solid #14658c", borderRadius: 99, color: "#50d9ff", marginBottom: 9 }}><Instagram size={23}/></a>
          <div>© Estética WJ • Lavagem e estética automotiva</div>
        </footer>
      </div>
    </main>
  );
}
