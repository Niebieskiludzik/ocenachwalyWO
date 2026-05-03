import { supabase } from "./supabase.js";

async function loadVotes() {
  const { data } = await supabase
    .from("votes")
    .select("voter_name, player_id, score, created_at")
    .order("created_at", { ascending: false })
    .limit(5);

  const el = document.getElementById("votes");

  el.innerHTML = data.map(v => `
    <div class="btn">
      🧑 ${v.voter_name}<br>
      🎯 player_id: ${v.player_id}<br>
      ⭐ ${v.score}
    </div>
  `).join("");
}

loadVotes();
