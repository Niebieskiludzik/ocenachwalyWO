import { supabase } from "./supabase.js";

async function loadVotes() {

  const { data } = await supabase
    .from("votes")
    .select(`
      voter_name,
      score,
      created_at,
      players (name)
    `)
    .order("created_at", { ascending: false })
    .limit(10);

  const el = document.getElementById("votes");

  el.innerHTML = `
    <div class="swipe">
      ${data.map(v => `
        <div class="card">
          🧑 ${v.voter_name}<br>
          ⚽ ${v.players?.name || "—"}<br>
          ⭐ ${v.score}
        </div>
      `).join("")}
    </div>
  `;
}

loadVotes();
