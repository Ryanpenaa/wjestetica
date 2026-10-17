import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5581994397889?text=" + encodeURIComponent("Olá! Vim pelo Instagram da Estética WJ e gostaria de agendar uma lavagem para meu veículo. Podem me informar os horários disponíveis e os valores?");
const instagram = "https://www.instagram.com/estetica_wj01/";
const maps = "https://www.google.com/maps?q=-8.0788107,-36.0414314";

function Icon({ type }: { type: "whatsapp" | "instagram" | "map" }) {
  const shared = { width: 23, height: 23, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };
  if (type === "instagram") return <svg {...shared}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.5" r=".7" fill="currentColor"/></svg>;
  if (type === "map") return <svg {...shared}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  return <svg {...shared}><path d="M20 11.5a8.5 8.5 0 0 1-12.5 7.5L3 20l1-4.6A8.5 8.5 0 1 1 20 11.5Z"/><path d="M8 8c1 4 4 7 8 8"/></svg>;
}

function Index() {
  return <main style={{minHeight:"100svh",background:"radial-gradient(ellipse at 50% 0%, #063858 0%, #081421 40%, #05090e 80%)",color:"#f4fbff",fontFamily:"Inter,system-ui,Arial,sans-serif",display:"flex",justifyContent:"center"}}>
    <div style={{width:"100%",maxWidth:480,padding:"25px 22px 38px",textAlign:"center"}}>
      <img src="/BANNER2.png" alt="Logo Estética WJ" style={{display:"block",width:"100%",maxWidth:340,height:300,objectFit:"contain",margin:"10px auto 0",filter:"drop-shadow(0 3px 26px #0abdf966)"}} />
      <h1 style={{fontSize:24,fontWeight:800,letterSpacing:".05em",margin:"0 0 7px",textTransform:"uppercase"}}>Estética WJ</h1>
      <p style={{color:"#b3c4d1",margin:"0 0 24px",fontSize:14,lineHeight:1.6}}>Seu veículo merece esse cuidado!<br/>🚘 Carros &nbsp;•&nbsp; 🏍️ Motos &nbsp;•&nbsp; 🚐 Vans</p>
      <nav aria-label="Links da Estética WJ" style={{display:"grid",gap:13}}>
        {[
          {label:"Agendar minha lavagem",href:whatsapp,type:"whatsapp" as const,primary:true},
          {label:"Conheça nossos trabalhos",href:instagram,type:"instagram" as const,primary:false},
          {label:"Como chegar",href:maps,type:"map" as const,primary:false}
        ].map(item=><a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,minHeight:65,padding:"15px 16px",borderRadius:17,border:"1px solid "+(item.primary?"#43ddff":"#237197"),background:item.primary?"linear-gradient(120deg,#03b9eb,#0876bb)":"linear-gradient(120deg,#132d43,#0b1928)",color:item.primary?"#001521":"white",textDecoration:"none",fontSize:15,fontWeight:750,boxShadow:item.primary?"0 0 27px #05baf52a":"0 6px 20px #0007"}}><Icon type={item.type}/>{item.label}</a>)}
      </nav>
      <footer style={{marginTop:31,color:"#8eacbc",fontSize:12}}>
        <div>Siga nossa página</div><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Estética WJ" style={{display:"inline-flex",color:"#62dfff",border:"1px solid #135d85",padding:12,borderRadius:"50%",margin:"14px 0"}}><Icon type="instagram"/></a>
        <small style={{display:"block",marginTop:5}}>© Estética WJ • Lavagem e estética automotiva</small>
      </footer>
    </div>
  </main>;
}
