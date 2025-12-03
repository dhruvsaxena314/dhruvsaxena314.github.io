export default async function handler(req, res){
  if(req.method !== "POST"){
    return res.status(405).json({error:"POST only"});
  }

  const ADMIN_TOKEN = process.env.GH_TRIGGER_TOKEN;
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  const OWNER = "dhruvsaxena314";
  const REPO = "dhruvsaxena314.github.io";

  const incoming = req.headers["x-admin-token"];

  if(!ADMIN_TOKEN || !GITHUB_TOKEN){
    return res.status(500).json({error:"missing-env"});
  }

  if(!incoming || incoming !== ADMIN_TOKEN){
    return res.status(401).json({error:"unauthorized"});
  }

  const payload = await new Response(req.body).json();

  const r = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/dispatches`,
    {
      method: "POST",
      headers: {
        "Authorization": `token ${GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_type: "site-update",
        client_payload: payload
      })
    }
  );

  if(!r.ok){
    return res.status(500).json({error:"github-failed"});
  }

  return res.json({ok:true});
}
