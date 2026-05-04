import { supabase } from "./supabase.js";

async function loadRanking() {
  const { data } = await supabase
    .from("players")
    .select("name, rating, manual_points");

  const sorted = data
    .map(p => ({
      name: p.name,
      points: (p.rating || 0) + (p.manual_points || 0)
    }))
    .sort((a, b) => b.points - a.points);

  document.getElementById("ranking").innerHTML =
    sorted.map((p, i) => `
      <div class="rank-item">
        ${i + 1}. ${p.name}<br>
        ${p.points.toFixed(1)} punktów
      </div>
    `).join("");
}

loadRanking();
