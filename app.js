import { supabase } from "./supabase.js";

// 🏆 MVP RANKING
async function loadMVP() {
  const { data } = await supabase
    .from("players")
    .select("name, rating")
    .order("rating", { ascending: false })
    .limit(5);

  const el = document.getElementById("mvpList");

  el.innerHTML = data.map(p => `
    <div class="card">
      ${p.name} — ⭐ ${p.rating}
    </div>
  `).join("");
}

// ⚽ OBECNOŚĆ
async function loadAttendance() {
  const { data } = await supabase
    .from("players")
    .select("name, present");

  const el = document.getElementById("attendanceList");

  el.innerHTML = data.map(p => `
    <div class="card">
      ${p.name} — ${p.present ? "🟢" : "🔴"}
    </div>
  `).join("");
}

loadMVP();
loadAttendance();
