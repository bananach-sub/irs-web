let count = 1;
function post() {
  const name = document.getElementById("name").value || "名無しさん";
  const msg = document.getElementById("msg").value;
  if (!msg.trim()) return;
  
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `<span class="num">${count}</span> 名前：<span class="name">${name}</span> ${new Date().toLocaleString()}<br>${msg.replace(/\n/g, "<br>")}`;
  document.getElementById("log").appendChild(div);
  document.getElementById("msg").value = "";
  count++;
  window.scrollTo(0, document.body.scrollHeight);
}
post(); // 1レス目サンプル
